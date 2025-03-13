<script>import Panel from '../panel.svelte';
import EmptyState from '../../holocene/empty-state.svelte';
import Link from '../../holocene/link.svelte';
import { translate } from '../../i18n/translate';
import { fetchWorkflowForSchedule } from '../../services/workflow-service';
import { relativeTime, timeFormat } from '../../stores/time-format';
import { decodeURIForSvelte } from '../../utilities/encode-uri';
import { formatDate } from '../../utilities/format-date';
import { routeForEventHistory, routeForWorkflowsWithQuery, } from '../../utilities/route-for';
import WorkflowStatus from '../workflow-status.svelte';
export let recentRuns = [];
export let namespace;
export let workflowQuery;
const sortRecentRuns = (recentRuns) => {
    var _a, _b;
    return ((_b = (_a = recentRuns === null || recentRuns === void 0 ? void 0 : recentRuns.sort((a, b) => new Date(b.actualTime).getTime() -
        new Date(a.actualTime).getTime())) === null || _a === void 0 ? void 0 : _a.slice(0, 5)) !== null && _b !== void 0 ? _b : []);
};
</script>

<Panel class="w-full">
  <div class="flex justify-between">
    <h2 class="mb-4">{translate('schedules.recent-runs')}</h2>
    <Link
      href={routeForWorkflowsWithQuery({
        namespace,
        query: workflowQuery,
      })}
    >
      {translate('common.view-all-runs')}
    </Link>
  </div>
  {#each sortRecentRuns(recentRuns) as run (run?.startWorkflowResult?.workflowId)}
    {#await fetchWorkflowForSchedule({ namespace, workflowId: decodeURIForSvelte(run.startWorkflowResult.workflowId), runId: run.startWorkflowResult.runId }, fetch) then workflow}
      <div class="row">
        <div class="w-28">
          <WorkflowStatus status={workflow.status} />
        </div>
        <div class="mx-2 w-auto break-words">
          <Link
            href={routeForEventHistory({
              workflow: run.startWorkflowResult.workflowId,
              run: run.startWorkflowResult.runId,
              namespace,
            })}
          >
            {run.startWorkflowResult.workflowId}
          </Link>
        </div>
        <div class="ml-auto">
          <p>
            {formatDate(run.actualTime, $timeFormat, {
              relative: $relativeTime,
            })}
          </p>
        </div>
      </div>
    {:catch}
      <div class="row">
        <div class="w-28" />
        <div class="w-96">
          {run.startWorkflowResult.workflowId}
        </div>
        <div class="ml-auto">
          <p>
            {formatDate(run.actualTime, $timeFormat, {
              relative: $relativeTime,
            })}
          </p>
        </div>
      </div>
    {/await}
  {/each}
  {#if !recentRuns.length}
    <EmptyState title={translate('schedules.recent-runs-empty-state-title')} />
  {/if}
</Panel>

<style>
  .row {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    display: inline-flex;
    width: 100%;
    align-items: center;
    border-bottom-width: 1px;
    border-color: rgb(var(--color-border-subtle));
    padding-top: 0.25rem;
    padding-bottom: 0.25rem
}</style>
