<script>import { onDestroy, onMount } from 'svelte';
import { page } from '$app/stores';
import { viewDataEncoderSettings } from '../components/data-encoder-settings.svelte';
import WorkflowError from '../components/workflow/workflow-error.svelte';
import CopyButton from '../holocene/copyable/button.svelte';
import Loading from '../holocene/loading.svelte';
import { translate } from '../i18n/translate';
import WorkflowHeader from './workflow-header.svelte';
import { fetchAllEvents, throttleRefresh, } from '../services/events-service';
import { getPollers } from '../services/pollers-service';
import { getWorkflowMetadata } from '../services/query-service';
import { fetchWorkflow } from '../services/workflow-service';
import { authUser } from '../stores/auth-user';
import { resetLastDataEncoderSuccess } from '../stores/data-encoder-config';
import { eventFilterSort } from '../stores/event-view';
import { currentEventHistory, fullEventHistory, pauseLiveUpdates, timelineEvents, } from '../stores/events';
import { initialWorkflowRun, refresh, workflowRun, } from '../stores/workflow-run';
import { copyToClipboard } from '../utilities/copy-to-clipboard';
import { decodeSingleReadablePayloadWithCodec } from '../utilities/decode-payload';
import { stringifyWithBigInt } from '../utilities/parse-with-big-int';
$: ({ namespace, workflow: workflowId, run: runId } = $page.params);
$: showJson = $page.url.searchParams.has('json');
$: fullJson = { ...$workflowRun, eventHistory: $fullEventHistory };
let workflowError;
let workflowRunController;
let refreshInterval;
const { copy, copied } = copyToClipboard();
const handleCopy = (e) => {
    copy(e, stringifyWithBigInt(fullJson));
};
const decodeUserMetadata = async (workflow) => {
    const userMetadata = { summary: '', details: '' };
    try {
        if (workflow === null || workflow === void 0 ? void 0 : workflow.summary) {
            const decodedSummary = await decodeSingleReadablePayloadWithCodec(workflow.summary);
            if (typeof decodedSummary === 'string') {
                userMetadata.summary = decodedSummary;
            }
        }
        if (workflow === null || workflow === void 0 ? void 0 : workflow.details) {
            const decodedDetails = await decodeSingleReadablePayloadWithCodec(workflow.details);
            if (typeof decodedDetails === 'string') {
                userMetadata.details = decodedDetails;
            }
        }
        $workflowRun = { ...$workflowRun, userMetadata };
    }
    catch (e) {
        console.error('Error decoding user metadata', e);
    }
};
const getWorkflowAndEventHistory = async (namespace, workflowId, runId) => {
    var _a;
    const { settings } = $page.data;
    const { workflow, error } = await fetchWorkflow({
        namespace,
        workflowId,
        runId,
    });
    if (error) {
        workflowError = error;
        return;
    }
    await decodeUserMetadata(workflow);
    const { taskQueue } = workflow;
    const workers = await getPollers({ queue: taskQueue, namespace });
    $workflowRun = { ...$workflowRun, workflow, workers };
    workflowRunController = new AbortController();
    if (workflow.isRunning && ((_a = workers === null || workers === void 0 ? void 0 : workers.pollers) === null || _a === void 0 ? void 0 : _a.length)) {
        getWorkflowMetadata({
            namespace,
            workflow: {
                id: workflowId,
                runId,
            },
        }, settings, $authUser === null || $authUser === void 0 ? void 0 : $authUser.accessToken, workflowRunController.signal).then((metadata) => {
            $workflowRun.metadata = metadata;
        });
    }
    $fullEventHistory = await fetchAllEvents({
        namespace,
        workflowId,
        runId,
        sort: 'ascending',
        signal: workflowRunController.signal,
        historySize: workflow.historyEvents,
    });
};
const getOnlyWorkflowWithPendingActivities = async (refresh) => {
    var _a;
    if (refresh && ((_a = $workflowRun === null || $workflowRun === void 0 ? void 0 : $workflowRun.workflow) === null || _a === void 0 ? void 0 : _a.isRunning)) {
        const { workflow, error } = await fetchWorkflow({
            namespace,
            workflowId,
            runId,
        });
        if (error) {
            workflowError = error;
            return;
        }
        $workflowRun.workflow = workflow;
    }
};
const abortPolling = () => {
    $fullEventHistory = [];
    if (workflowRunController) {
        workflowRunController.abort();
    }
};
const clearWorkflowData = () => {
    $timelineEvents = null;
    $workflowRun = initialWorkflowRun;
    workflowError = undefined;
    abortPolling();
    resetLastDataEncoderSuccess();
    clearInterval(refreshInterval);
    refreshInterval = null;
};
$: runId, clearWorkflowData();
$: getWorkflowAndEventHistory(namespace, workflowId, runId);
$: getOnlyWorkflowWithPendingActivities($refresh);
const setCurrentEvents = (fullHistory, pause) => {
    if (!pause) {
        $currentEventHistory = fullHistory;
    }
};
$: setCurrentEvents($fullEventHistory, $pauseLiveUpdates);
onMount(() => {
    const sort = $page.url.searchParams.get('sort');
    if (sort)
        $eventFilterSort = sort;
    refreshInterval = setInterval(() => {
        throttleRefresh();
    }, 10000);
});
onDestroy(() => {
    clearWorkflowData();
});
</script>

{#if showJson}
  <div
    class="relative h-auto whitespace-break-spaces break-words bg-primary p-4"
  >
    <CopyButton
      copyIconTitle={translate('common.copy-icon-title')}
      copySuccessIconTitle={translate('common.copy-success-icon-title')}
      class="absolute right-1 top-1"
      on:click={handleCopy}
      copied={$copied}
    />
    {stringifyWithBigInt(fullJson, null, 2)}
  </div>
{:else}
  <div
    class="absolute bottom-0 left-0 right-0 {$viewDataEncoderSettings
      ? 'top-[540px]'
      : 'top-0'}
   flex h-full flex-col"
  >
    {#if workflowError}
      <WorkflowError error={workflowError} />
    {:else if !$workflowRun.workflow}
      <Loading class="pt-24" />
    {:else}
      <div class="border-b border-subtle px-4 pt-8 md:pt-20 xl:px-8">
        <WorkflowHeader />
      </div>
      <slot />
    {/if}
  </div>
{/if}
