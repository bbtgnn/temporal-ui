<script>var _a, _b, _c, _d, _e, _f;
import { page } from '$app/stores';
import { translate } from '../../i18n/translate';
import { relativeTime, timeFormat } from '../../stores/time-format';
import { formatDate } from '../../utilities/format-date';
import { formatDistanceAbbreviated } from '../../utilities/format-time';
import { routeForWorkerDeployment, routeForWorkers, routeForWorkflow, routeForWorkflowsWithQuery, } from '../../utilities/route-for';
import WorkflowDetail from './workflow-detail.svelte';
export let workflow;
$: ({ namespace } = $page.params);
$: elapsedTime = formatDistanceAbbreviated({
    start: workflow === null || workflow === void 0 ? void 0 : workflow.startTime,
    end: (workflow === null || workflow === void 0 ? void 0 : workflow.endTime) || Date.now(),
    includeMilliseconds: true,
});
$: deployment =
    (_b = (_a = workflow === null || workflow === void 0 ? void 0 : workflow.searchAttributes) === null || _a === void 0 ? void 0 : _a.indexedFields) === null || _b === void 0 ? void 0 : _b['TemporalWorkerDeployment'];
$: deploymentVersion =
    (_d = (_c = workflow === null || workflow === void 0 ? void 0 : workflow.searchAttributes) === null || _c === void 0 ? void 0 : _c.indexedFields) === null || _d === void 0 ? void 0 : _d['TemporalWorkerDeploymentVersion'];
$: deploymentBehavior =
    (_f = (_e = workflow === null || workflow === void 0 ? void 0 : workflow.searchAttributes) === null || _e === void 0 ? void 0 : _e.indexedFields) === null || _f === void 0 ? void 0 : _f['TemporalWorkflowVersioningBehavior'];
</script>

<div
  class="flex w-full flex-col gap-2 {deployment
    ? '2xl:flex-row 2xl:gap-8'
    : 'xl:flex-row xl:gap-8'}"
>
  <div
    class="flex w-full flex-col gap-2 {deployment ? '2xl:w-1/4' : 'xl:w-1/3'}"
  >
    <WorkflowDetail
      title={translate('common.start')}
      tooltip={$relativeTime
        ? formatDate(workflow?.startTime, $timeFormat, {
            relative: false,
          })
        : formatDate(workflow?.startTime, $timeFormat, {
            relative: true,
          })}
      content={formatDate(workflow?.startTime, $timeFormat, {
        relative: $relativeTime,
      })}
    />
    <WorkflowDetail
      title={translate('common.end')}
      tooltip={$relativeTime
        ? formatDate(workflow?.endTime, $timeFormat, {
            relative: false,
          })
        : formatDate(workflow?.endTime, $timeFormat, {
            relative: true,
          })}
      content={workflow?.endTime
        ? formatDate(workflow?.endTime, $timeFormat, {
            relative: $relativeTime,
          })
        : '-'}
    />
    <WorkflowDetail content={elapsedTime} icon="clock" />
  </div>
  <div
    class="flex w-full flex-col gap-2 {deployment ? '2xl:w-1/4' : 'xl:w-1/3'}"
  >
    <WorkflowDetail
      title={translate('common.run-id')}
      content={workflow?.runId}
      copyable
    />
    <WorkflowDetail
      title={translate('common.workflow-type')}
      content={workflow?.name}
      copyable
      filterable
      href={routeForWorkflowsWithQuery({
        namespace,
        query: `WorkflowType="${workflow?.name}"`,
      })}
    />
    <WorkflowDetail
      title={translate('common.task-queue')}
      content={workflow?.taskQueue}
      href={routeForWorkers({
        namespace: $page.params.namespace,
        workflow: workflow?.id,
        run: workflow?.runId,
      })}
    />
  </div>
  {#if deployment}
    <div class="flex w-full flex-col gap-2 2xl:w-1/4">
      <WorkflowDetail
        title={translate('deployments.deployment')}
        content={deployment}
        href={routeForWorkerDeployment({
          namespace,
          deployment,
        })}
      />
      {#if deploymentVersion}
        <WorkflowDetail
          title={translate('deployments.deployment-version')}
          content={workflow.searchAttributes.indexedFields[
            'TemporalWorkerDeploymentVersion'
          ]}
        />
      {/if}
      {#if deploymentBehavior}
        <WorkflowDetail
          title={translate('deployments.deployment-behavior')}
          content={deploymentBehavior}
        />
      {/if}
    </div>
  {/if}
  <div
    class="flex w-full flex-col gap-2 {deployment ? '2xl:w-1/4' : 'xl:w-1/3'}"
  >
    {#if workflow?.parent}
      <WorkflowDetail
        title={translate('workflows.parent-workflow')}
        content={workflow?.parent?.workflowId}
        href={routeForWorkflow({
          namespace,
          workflow: workflow?.parent?.workflowId,
          run: workflow?.parent?.runId,
        })}
      />
    {/if}
    <WorkflowDetail
      title={translate('common.history-size-bytes')}
      content={workflow?.historySizeBytes}
    />
  </div>
</div>
