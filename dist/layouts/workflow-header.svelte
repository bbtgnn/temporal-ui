<script>var _a, _b, _c;
import { fly } from 'svelte/transition';
import { page } from '$app/stores';
import WorkflowDetails from '../components/lines-and-dots/workflow-details.svelte';
import WorkflowCurrentDetails from '../components/workflow/metadata/workflow-current-details.svelte';
import WorkflowSummaryAndDetails from '../components/workflow/metadata/workflow-summary-and-details.svelte';
import WorkflowActions from '../components/workflow-actions.svelte';
import WorkflowStatus from '../components/workflow-status.svelte';
import Alert from '../holocene/alert.svelte';
import Badge from '../holocene/badge.svelte';
import Copyable from '../holocene/copyable/index.svelte';
import Icon from '../holocene/icon/icon.svelte';
import Link from '../holocene/link.svelte';
import TabList from '../holocene/tab/tab-list.svelte';
import Tab from '../holocene/tab/tab.svelte';
import Tabs from '../holocene/tab/tabs.svelte';
import { translate } from '../i18n/translate';
import { fullEventHistory } from '../stores/events';
import { namespaces } from '../stores/namespaces';
import { resetWorkflows } from '../stores/reset-workflows';
import { workflowRun } from '../stores/workflow-run';
import { workflowsSearchParams } from '../stores/workflows';
import { isCancelInProgress } from '../utilities/cancel-in-progress';
import { getWorkflowRelationships } from '../utilities/get-workflow-relationships';
import { has } from '../utilities/has';
import { pathMatches } from '../utilities/path-matches';
import { routeForCallStack, routeForEventHistory, routeForPendingActivities, routeForRelationships, routeForWorkers, routeForWorkflowMetadata, routeForWorkflowQuery, routeForWorkflows, } from '../utilities/route-for';
$: ({ namespace, workflow: workflowId, run: runId, id } = $page.params);
$: ({ workflow, workers } = $workflowRun);
$: routeParameters = {
    namespace,
    workflow: workflowId,
    run: runId,
};
$: isRunning = (_a = $workflowRun === null || $workflowRun === void 0 ? void 0 : $workflowRun.workflow) === null || _a === void 0 ? void 0 : _a.isRunning;
$: activitiesCanceled = ['Terminated', 'TimedOut', 'Canceled'].includes((_b = $workflowRun.workflow) === null || _b === void 0 ? void 0 : _b.status);
$: cancelInProgress = isCancelInProgress((_c = $workflowRun === null || $workflowRun === void 0 ? void 0 : $workflowRun.workflow) === null || _c === void 0 ? void 0 : _c.status, $fullEventHistory);
$: workflowHasBeenReset = has($resetWorkflows, runId);
$: workflowRelationships = getWorkflowRelationships(workflow, $fullEventHistory, $namespaces);
</script>

<div class="flex items-center justify-between pb-4">
  <div class="flex items-center gap-2">
    <Link
      href={`${routeForWorkflows({
        namespace,
      })}?${$workflowsSearchParams}`}
      data-testid="back-to-workflows"
      icon="chevron-left"
    >
      {id
        ? translate('common.workflows')
        : translate('workflows.back-to-workflows')}
    </Link>
    {#if id}
      <Link
        href={routeForEventHistory({
          ...routeParameters,
        })}
        data-testid="back-to-workflow-execution"
        icon="chevron-left"
      >
        {workflow?.runId}
      </Link>
    {/if}
  </div>
</div>
<header class="flex flex-col gap-2">
  <div class="flex flex-col items-center justify-between gap-4 lg:flex-row">
    <div
      class="flex w-full flex-col items-start gap-4 lg:flex-row lg:items-center"
    >
      <div
        class="flex flex-wrap items-center justify-between gap-4 max-lg:w-full"
      >
        <WorkflowStatus status={workflow?.status} big />
        <div class="lg:hidden">
          <WorkflowActions
            {isRunning}
            {cancelInProgress}
            {workflow}
            {namespace}
          />
        </div>
      </div>
      <div class="flex flex-col flex-wrap gap-0">
        <h1
          data-testid="workflow-id-heading"
          class="gap-0 overflow-hidden max-sm:text-xl sm:max-md:text-2xl"
        >
          <Copyable
            copyIconTitle={translate('common.copy-icon-title')}
            copySuccessIconTitle={translate('common.copy-success-icon-title')}
            content={workflow?.id}
            clickAllToCopy
            container-class="w-full"
            class="overflow-hidden text-ellipsis text-left"
          />
        </h1>
      </div>
    </div>
    <div class="max-lg:hidden">
      <WorkflowActions {isRunning} {cancelInProgress} {workflow} {namespace} />
    </div>
  </div>
  <WorkflowSummaryAndDetails />
  <WorkflowCurrentDetails />
  <WorkflowDetails {workflow} />
  {#if cancelInProgress}
    <div in:fly={{ duration: 200, delay: 100 }}>
      <Alert
        icon="info"
        intent="info"
        title={translate('workflows.cancel-request-sent')}
      >
        {translate('workflows.cancel-request-sent-description')}
      </Alert>
    </div>
  {/if}
  {#if workflowHasBeenReset}
    <div in:fly={{ duration: 200, delay: 100 }}>
      <Alert
        icon="info"
        intent="info"
        data-testid="workflow-reset-alert"
        title={translate('workflows.reset-success-alert-title')}
      >
        You can find the resulting Workflow Execution <Link
          href={routeForEventHistory({
            namespace,
            workflow: $workflowRun?.workflow?.id,
            run: $resetWorkflows[$workflowRun?.workflow?.runId],
          })}>here</Link
        >.
      </Alert>
    </div>
  {/if}
  <Tabs>
    <TabList class="flex flex-wrap gap-6 pt-2" label="workflow detail">
      <Tab
        label={translate('workflows.history-tab')}
        id="history-tab"
        href={routeForEventHistory({
          ...routeParameters,
        })}
        active={pathMatches(
          $page.url.pathname,
          routeForEventHistory({
            ...routeParameters,
          }),
        )}
      >
        <Badge type="primary" class="px-2 py-0">
          {workflow?.historyEvents}
        </Badge>
      </Tab>
      <Tab
        label={translate('workflows.relationships')}
        id="relationships-tab"
        href={routeForRelationships(routeParameters)}
        active={pathMatches(
          $page.url.pathname,
          routeForRelationships(routeParameters),
        )}
      >
        <Badge type="primary" class="px-2 py-0">
          {workflowRelationships.relationshipCount}
        </Badge></Tab
      >
      <Tab
        label={translate('workflows.workers-tab')}
        id="workers-tab"
        href={routeForWorkers(routeParameters)}
        active={pathMatches(
          $page.url.pathname,
          routeForWorkers(routeParameters),
        )}
      >
        <Badge type="primary" class="px-2 py-0">
          {workers?.pollers?.length}
        </Badge>
      </Tab>
      <Tab
        label={translate('workflows.pending-activities-tab')}
        id="pending-activities-tab"
        href={routeForPendingActivities(routeParameters)}
        active={pathMatches(
          $page.url.pathname,
          routeForPendingActivities(routeParameters),
        )}
      >
        <Badge
          type={activitiesCanceled ? 'warning' : 'primary'}
          class="px-2 py-0"
        >
          <div class="flex items-center gap-1">
            {#if activitiesCanceled}<Icon name="canceled" />
            {/if}
            {workflow?.pendingActivities?.length}
          </div>
        </Badge>
      </Tab>
      <Tab
        label={translate('workflows.call-stack-tab')}
        id="call-stack-tab"
        href={routeForCallStack(routeParameters)}
        active={pathMatches(
          $page.url.pathname,
          routeForCallStack(routeParameters),
        )}
      />
      <Tab
        label={translate('workflows.queries-tab')}
        id="queries-tab"
        href={routeForWorkflowQuery(routeParameters)}
        active={pathMatches(
          $page.url.pathname,
          routeForWorkflowQuery(routeParameters),
        )}
      />
      <Tab
        label={translate('workflows.metadata-tab')}
        id="metadata-tab"
        href={routeForWorkflowMetadata(routeParameters)}
        active={pathMatches(
          $page.url.pathname,
          routeForWorkflowMetadata(routeParameters),
        )}
      />
    </TabList>
  </Tabs>
</header>
