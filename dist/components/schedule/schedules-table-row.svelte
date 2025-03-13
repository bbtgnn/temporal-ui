<script>var _a, _b, _c, _d;
import { page } from '$app/stores';
import WorkflowStatus from '../workflow-status.svelte';
import Link from '../../holocene/link.svelte';
import { translate } from '../../i18n/translate';
import { relativeTime, timeFormat } from '../../stores/time-format';
import { decodePayloadAttributes } from '../../utilities/decode-payload';
import { formatDate } from '../../utilities/format-date';
import { routeForEventHistory, routeForSchedule, } from '../../utilities/route-for';
import ScheduleBasicFrequency from './schedule-basic-frequency.svelte';
let { namespace } = $page.params;
export let schedule;
export let columns;
$: spec = (_a = schedule === null || schedule === void 0 ? void 0 : schedule.info) === null || _a === void 0 ? void 0 : _a.spec;
$: calendar = (_b = spec === null || spec === void 0 ? void 0 : spec.structuredCalendar) === null || _b === void 0 ? void 0 : _b[0];
$: interval = (_c = spec === null || spec === void 0 ? void 0 : spec.interval) === null || _c === void 0 ? void 0 : _c[0];
$: timezoneName = (spec === null || spec === void 0 ? void 0 : spec.timezoneName) || 'UTC';
$: searchAttributes = (_d = schedule === null || schedule === void 0 ? void 0 : schedule.searchAttributes) !== null && _d !== void 0 ? _d : {};
$: decodedAttributes = decodePayloadAttributes({ searchAttributes });
const sortRecentActions = (recentActions) => {
    var _a;
    return ((_a = recentActions === null || recentActions === void 0 ? void 0 : recentActions.sort((a, b) => new Date(b.actualTime).getTime() -
        new Date(a.actualTime).getTime()).slice(0, 5)) !== null && _a !== void 0 ? _a : []);
};
$: route = routeForSchedule({
    namespace,
    scheduleId: schedule === null || schedule === void 0 ? void 0 : schedule.scheduleId,
});
</script>

<tr>
  {#each columns as { label } (label)}
    {#if label === translate('common.status')}
      <td class="cell">
        <WorkflowStatus
          status={schedule?.info?.paused ? 'Paused' : 'Running'}
        />
      </td>
    {:else if label === translate('schedules.id')}
      <td class="cell whitespace-pre-line break-words">
        <Link href={route}>{schedule.scheduleId}</Link>
      </td>
    {:else if label === translate('common.workflow-type')}
      <td class="cell whitespace-pre-line break-words">
        {schedule?.info?.workflowType?.name ?? ''}
      </td>
    {:else if label === translate('schedules.recent-runs')}
      <td class="cell truncate">
        {#each sortRecentActions(schedule?.info?.recentActions) as run}
          <p>
            <Link
              href={routeForEventHistory({
                namespace,
                workflow: run?.startWorkflowResult?.workflowId,
                run: run?.startWorkflowResult?.runId,
              })}
              >{formatDate(run?.actualTime, $timeFormat, {
                relative: $relativeTime,
              })}</Link
            >
          </p>
        {/each}
      </td>
    {:else if label === translate('schedules.upcoming-runs')}
      <td class="cell truncate">
        {#each schedule?.info?.futureActionTimes?.slice(0, 5) ?? [] as run}
          <div>
            {formatDate(run, $timeFormat, {
              relative: $relativeTime,
              relativeLabel: translate('common.from-now'),
            })}
          </div>
        {/each}
      </td>
    {:else if label === translate('schedules.schedule-spec')}
      <td class="cell">
        <p>{@html translate('common.timezone', { timezone: timezoneName })}</p>
        <ScheduleBasicFrequency {calendar} {interval} />
      </td>
    {:else}
      <td class="cell">
        {decodedAttributes?.searchAttributes?.indexedFields?.[label] ?? ''}
      </td>
    {/if}
  {/each}
</tr>

<style>
  .cell {
    padding: 0.5rem;
    text-align: left
}</style>
