<script>import { page } from '$app/stores';
import Alert from '../holocene/alert.svelte';
import Button from '../holocene/button.svelte';
import CodeBlock from '../holocene/code-block.svelte';
import EmptyState from '../holocene/empty-state.svelte';
import Link from '../holocene/link.svelte';
import Loading from '../holocene/loading.svelte';
import { translate } from '../i18n/translate';
import { getWorkflowStackTrace } from '../services/query-service';
import { authUser } from '../stores/auth-user';
import { workflowRun } from '../stores/workflow-run';
const { namespace } = $page.params;
$: ({ workflow, workers } = $workflowRun);
let currentdate = new Date();
let isLoading = false;
const getStackTrace = () => {
    var _a;
    return getWorkflowStackTrace({
        workflow,
        namespace,
    }, (_a = $page.data) === null || _a === void 0 ? void 0 : _a.settings, $authUser === null || $authUser === void 0 ? void 0 : $authUser.accessToken);
};
let stackTrace;
$: {
    if (workflow === null || workflow === void 0 ? void 0 : workflow.isRunning)
        stackTrace = getStackTrace();
}
const refreshStackTrace = () => {
    var _a;
    stackTrace = getWorkflowStackTrace({
        workflow,
        namespace,
    }, (_a = $page.data) === null || _a === void 0 ? void 0 : _a.settings, $authUser === null || $authUser === void 0 ? void 0 : $authUser.accessToken);
    stackTrace.then(() => {
        currentdate = new Date();
    });
};
</script>

<section>
  {#if workflow?.isRunning && workers?.pollers?.length > 0}
    {#await stackTrace}
      <div class="text-center">
        <Loading />
        <p>{translate('workflows.no-workers-failure-message')}</p>
      </div>
    {:then result}
      <Alert
        intent="info"
        icon="info"
        title={translate('workflows.call-stack-alert')}
        class="mb-4 w-fit"
      />
      <div class="flex items-center gap-4">
        <Button
          on:click={refreshStackTrace}
          leadingIcon="retry"
          loading={isLoading}
        >
          {translate('common.refresh')}
        </Button>
        <p>
          {translate('workflows.call-stack-at')}
          {currentdate.toLocaleTimeString()}
        </p>
      </div>
      <div class="my-2 flex h-full items-start">
        <CodeBlock
          content={result}
          language="text"
          testId="query-call-stack"
          copyIconTitle={translate('common.copy-icon-title')}
          copySuccessIconTitle={translate('common.copy-success-icon-title')}
        />
      </div>
    {:catch _error}
      <EmptyState
        title={translate('common.error-occurred')}
        content={translate('workflows.no-workers-running-message')}
        error={_error?.message}
      />
    {/await}
  {:else}
    <EmptyState
      title={translate('workflows.call-stack-empty-state')}
      testId="query-call-stack-empty"
    >
      {#if workflow?.isRunning && workers?.pollers?.length === 0}
        <p>
          {translate('workflows.call-stack-link-preface')}<Link
            newTab
            href="https://docs.temporal.io/workflows#stack-trace-query"
          >
            {translate('workflows.call-stack-link')}</Link
          >{translate('workflows.call-stack-link-postface', {
            taskQueue: workflow?.taskQueue,
          })}
        </p>
      {/if}
    </EmptyState>
  {/if}
</section>
