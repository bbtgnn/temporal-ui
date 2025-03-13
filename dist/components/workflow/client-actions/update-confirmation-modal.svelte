<script>var _a;
import { writable } from 'svelte/store';
import { v4 as uuid } from 'uuid';
import { page } from '$app/stores';
import PayloadDecoder from '../../event/payload-decoder.svelte';
import {} from '../../payload-input-with-encoding.svelte';
import PayloadInput from '../../payload-input.svelte';
import Alert from '../../../holocene/alert.svelte';
import Button from '../../../holocene/button.svelte';
import CodeBlock from '../../../holocene/code-block.svelte';
import Input from '../../../holocene/input/input.svelte';
import Modal from '../../../holocene/modal.svelte';
import Option from '../../../holocene/select/option.svelte';
import Select from '../../../holocene/select/select.svelte';
import { translate } from '../../../i18n/translate';
import { updateWorkflow } from '../../../services/workflow-service';
import { toaster } from '../../../stores/toaster';
import { workflowRun } from '../../../stores/workflow-run';
import { isNetworkError } from '../../../utilities/is-network-error';
$: ({ run: runId } = $page.params);
$: ({ metadata } = $workflowRun);
$: updateDefinitions = (_a = metadata === null || metadata === void 0 ? void 0 : metadata.definition) === null || _a === void 0 ? void 0 : _a.updateDefinitions;
export let open;
export let workflow;
export let namespace;
const defaultEncoding = 'json/plain';
let error = '';
let loading = false;
let failure;
let success;
let name = '';
let updateId = uuid();
let input = '';
let customUpdate = false;
let encoding = writable(defaultEncoding);
const hideModal = () => {
    open = false;
    name = '';
    input = '';
    customUpdate = false;
    $encoding = defaultEncoding;
    failure = undefined;
    success = undefined;
};
const update = async () => {
    var _a, _b;
    failure = undefined;
    success = undefined;
    error = '';
    loading = true;
    try {
        const result = await updateWorkflow({
            namespace,
            workflow: { workflowId: workflow.id, runId },
            input,
            updateId,
            encoding: $encoding,
            name,
        });
        failure = (_a = result === null || result === void 0 ? void 0 : result.outcome) === null || _a === void 0 ? void 0 : _a.failure;
        success = ((_b = result === null || result === void 0 ? void 0 : result.outcome) === null || _b === void 0 ? void 0 : _b.success) || !failure;
        updateId = uuid();
        if (success) {
            toaster.push({
                message: translate('workflows.update-success'),
                variant: 'success',
            });
            hideModal();
        }
    }
    catch (err) {
        error = isNetworkError(err)
            ? err.message
            : translate('common.unknown-error');
    }
    finally {
        loading = false;
    }
};
const handleCustom = () => {
    customUpdate = true;
    name = '';
};
</script>

<Modal
  id="update-confirmation-modal"
  data-testid="update-confirmation-modal"
  large
  bind:error
  bind:open
  {loading}
  confirmText={translate('common.submit')}
  cancelText={translate('common.cancel')}
  confirmDisabled={!name || !encoding}
  on:cancelModal={hideModal}
  on:confirmModal={update}
>
  <h3 slot="title">{translate('workflows.update-modal-title')}</h3>
  <div class="flex flex-col gap-4" slot="content">
    {#if updateDefinitions?.length > 0 && !customUpdate}
      <Select
        id="update-select"
        label={translate('common.name')}
        class="min-w-fit"
        bind:value={name}
        data-testid="update-select"
        placeholder="Select an Update"
        required
      >
        {#each updateDefinitions as { name: value, description = '' }}
          <Option {value} {description}>{value}</Option>
        {/each}
        <Option on:click={handleCustom} value="custom">Custom</Option>
      </Select>
    {:else}
      <div class="flex w-full items-end justify-between gap-2">
        <Input
          id="update-name"
          class="w-full"
          label={translate('common.name')}
          required
          bind:value={name}
        />
        {#if customUpdate}
          <Button
            on:click={() => {
              customUpdate = false;
              name = '';
            }}
            variant="secondary"
            leadingIcon="close"
          />
        {/if}
      </div>
    {/if}
    <Input
      id="update-id"
      label={translate('workflows.update-id')}
      required
      bind:value={updateId}
    />
    <PayloadInput bind:input />
    {#if loading}
      <Alert intent="info" title="In Progress"
        >{translate('workflows.update-in-progress')}</Alert
      >
    {/if}
    {#if failure}
      <Alert intent="error" title={failure?.message || 'Failure'}>
        {#if failure?.stackTrace}
          <CodeBlock
            class="mt-4"
            content={failure.stackTrace}
            language="text"
          />
        {/if}
      </Alert>
    {/if}
    {#if success}
      <Alert intent="success" title="Success">
        {#if success?.payloads?.[0] && success.payloads[0].data}
          <PayloadDecoder value={success.payloads[0]} let:decodedValue>
            <CodeBlock class="mt-4" content={decodedValue} language="text" />
          </PayloadDecoder>
        {/if}
      </Alert>
    {/if}
  </div>
</Modal>
