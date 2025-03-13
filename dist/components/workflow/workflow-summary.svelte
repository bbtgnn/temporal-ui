<script>import { page } from '$app/stores';
import WorkflowDetail from './workflow-detail.svelte';
import Accordion from '../../holocene/accordion/accordion.svelte';
import { translate } from '../../i18n/translate';
import { relativeTime, timeFormat } from '../../stores/time-format';
import { workflowRun, workflowSummaryViewOpen, } from '../../stores/workflow-run';
import { formatDate } from '../../utilities/format-date';
import { formatDistanceAbbreviated } from '../../utilities/format-time';
import { routeForWorkers } from '../../utilities/route-for';
$: ({ workflow } = $workflowRun);
$: elapsedTime = formatDistanceAbbreviated({
    start: workflow === null || workflow === void 0 ? void 0 : workflow.startTime,
    end: workflow === null || workflow === void 0 ? void 0 : workflow.endTime,
    includeMilliseconds: true,
});
</script>

<section>
  <Accordion
    title={translate('common.summary')}
    icon="summary"
    data-testid="summary-accordion"
    open={$workflowSummaryViewOpen}
    onToggle={() => {
      $workflowSummaryViewOpen = !$workflowSummaryViewOpen;
    }}
  >
    <div class="flex flex-col gap-2 xl:flex-row">
      <div class="grow basis-1/3 overflow-hidden">
        <h4>{translate('common.execution-details')}</h4>
        <div class="h-0.5 rounded-full bg-inverse" />
        <WorkflowDetail
          title={translate('common.workflow-type')}
          content={workflow?.name}
          copyable
          textSize="sm"
        />
        <WorkflowDetail
          title={translate('common.run-id')}
          content={workflow?.runId}
          copyable
          textSize="sm"
        />
        <WorkflowDetail
          title={translate('common.history-size-bytes')}
          content={workflow?.historySizeBytes}
          copyable
          textSize="sm"
        />
      </div>
      <div class="grow overflow-hidden">
        <h4>{translate('common.task-queue')}</h4>
        <div class="h-0.5 rounded-full bg-inverse" />
        <WorkflowDetail
          content={workflow?.taskQueue}
          href={routeForWorkers({
            namespace: $page.params.namespace,
            workflow: workflow?.id,
            run: workflow?.runId,
          })}
          copyable
          textSize="sm"
        />
        <WorkflowDetail
          title={translate('workflows.state-transitions')}
          content={workflow?.stateTransitionCount}
          textSize="sm"
        />
      </div>
      <div class="grow-0">
        <h4>
          {translate('workflows.start-and-close-time')}
        </h4>
        <div class="h-0.5 rounded-full bg-inverse" />
        <WorkflowDetail
          title={translate('common.start-time')}
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
          textSize="sm"
        />
        <WorkflowDetail
          title={translate('common.close-time')}
          tooltip={$relativeTime
            ? formatDate(workflow?.endTime, $timeFormat, {
                relative: false,
              })
            : formatDate(workflow?.endTime, $timeFormat, {
                relative: true,
              })}
          content={formatDate(workflow?.endTime, $timeFormat, {
            relative: $relativeTime,
          })}
          textSize="sm"
        />
        {#if elapsedTime}
          <WorkflowDetail icon="clock" content={elapsedTime} textSize="sm" />
        {/if}
      </div>
    </div>
  </Accordion>
</section>
