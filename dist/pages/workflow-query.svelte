<script>var _a, _b, _c, _d, _e, _f;
import { onMount } from 'svelte';
import { page } from '$app/stores';
import PayloadInput from '../components/payload-input.svelte';
import Button from '../holocene/button.svelte';
import Card from '../holocene/card.svelte';
import CodeBlock from '../holocene/code-block.svelte';
import EmptyState from '../holocene/empty-state.svelte';
import Loading from '../holocene/loading.svelte';
import Option from '../holocene/select/option.svelte';
import Select from '../holocene/select/select.svelte';
import ToggleSwitch from '../holocene/toggle-switch.svelte';
import { translate } from '../i18n/translate';
import { getQuery, getWorkflowMetadata, } from '../services/query-service';
import { authUser } from '../stores/auth-user';
import { workflowRun } from '../stores/workflow-run';
import { encodePayloads } from '../utilities/encode-payload';
import { stringifyWithBigInt } from '../utilities/parse-with-big-int';
const { namespace, workflow: workflowId, run: runId } = $page.params;
const params = {
    id: workflowId,
    runId,
};
let queryType;
let initialQueryType;
let input = '';
let initialInput = '';
let loading = false;
let jsonFormatting = true;
$: edited = initialQueryType !== queryType || input !== initialInput;
$: metadataError = (_b = (_a = $workflowRun.metadata) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
$: queryTypes =
    ((_e = (_d = (_c = $workflowRun === null || $workflowRun === void 0 ? void 0 : $workflowRun.metadata) === null || _c === void 0 ? void 0 : _c.definition) === null || _d === void 0 ? void 0 : _d.queryDefinitions) === null || _e === void 0 ? void 0 : _e.filter((query) => {
        return (query === null || query === void 0 ? void 0 : query.name) !== '__stack_trace';
    })) || [];
$: queryType = queryType || ((_f = queryTypes === null || queryTypes === void 0 ? void 0 : queryTypes[0]) === null || _f === void 0 ? void 0 : _f.name);
let queryResult;
let encodePayloadResult;
onMount(() => {
    if (!$workflowRun.metadata) {
        fetchCurrentDetails();
    }
});
const fetchCurrentDetails = async () => {
    const { settings } = $page.data;
    const metadata = await getWorkflowMetadata({
        namespace,
        workflow: {
            id: workflowId,
            runId: runId,
        },
    }, settings, $authUser === null || $authUser === void 0 ? void 0 : $authUser.accessToken);
    $workflowRun.metadata = metadata;
};
const reset = () => {
    loading = false;
    initialQueryType = queryType;
    initialInput = input;
};
const query = async (queryType) => {
    var _a;
    loading = true;
    let payloads;
    try {
        encodePayloadResult = input
            ? encodePayloads({
                input,
                encoding: 'json/plain',
                encodeWithCodec: false,
            })
            : Promise.resolve(null);
        payloads = await encodePayloadResult;
    }
    catch (e) {
        reset();
        return;
    }
    queryResult = getQuery({
        namespace,
        workflow: params,
        queryType,
        queryArgs: payloads ? { payloads } : null,
    }, (_a = $page.data) === null || _a === void 0 ? void 0 : _a.settings, $authUser === null || $authUser === void 0 ? void 0 : $authUser.accessToken).finally(() => {
        reset();
    });
};
</script>

<section>
  {#if metadataError}
    <EmptyState
      title={translate('common.error-occurred')}
      content={translate('workflows.no-workers-running-message')}
      error={$workflowRun.metadata?.error?.message}
    />
  {:else if !queryTypes.length}
    <div class="text-center">
      <Loading />
      <p class="-mt-10">{translate('workflows.no-workers-failure-message')}</p>
    </div>
  {:else}
    <div class="flex w-3/4 gap-4 max-2xl:w-full max-lg:flex-col">
      <Card class="mt-7 flex h-fit w-full flex-col gap-2">
        <Select
          id="query-select"
          label={translate('workflows.query-type')}
          class="min-w-fit"
          bind:value={queryType}
          data-testid="query-select"
          required
        >
          {#each queryTypes as { name: value, description = '' }}
            <Option {value} {description}>{value}</Option>
          {/each}
        </Select>
        <div class="flex flex-col gap-1">
          <PayloadInput bind:input label={translate('workflows.query-arg')} />
        </div>
        <div class="flex w-full flex-wrap items-end justify-end gap-4">
          <Button
            on:click={() => query(queryType)}
            {loading}
            variant={edited ? 'primary' : 'secondary'}
            leadingIcon={edited ? null : 'retry'}
            disabled={loading}
          >
            {edited
              ? translate('workflows.run-query')
              : translate('workflows.refresh-query')}
          </Button>
        </div>
      </Card>
      <div class="flex w-full flex-col gap-2">
        {#await Promise.all( [queryResult, encodePayloadResult], ) then [result, _]}
          {@const content =
            typeof result !== 'string' ? stringifyWithBigInt(result) : result}
          <div class="ml-auto">
            <ToggleSwitch
              label={translate('workflows.json-formatting')}
              labelPosition="left"
              id="json-formatting"
              checked={jsonFormatting}
              on:change={() => (jsonFormatting = !jsonFormatting)}
            />
          </div>
          <CodeBlock
            {content}
            language={jsonFormatting ? 'json' : 'text'}
            copyIconTitle={translate('common.copy-icon-title')}
            copySuccessIconTitle={translate('common.copy-success-icon-title')}
            testId="query-result"
            class={edited && 'opacity-50'}
          />
        {:catch _error}
          <EmptyState
            title={translate('common.error-occurred')}
            error={_error?.message}
          />
        {/await}
      </div>
    </div>
  {/if}
</section>
