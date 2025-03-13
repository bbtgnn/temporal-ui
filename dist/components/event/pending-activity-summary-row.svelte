<script>import { page } from '$app/stores';
import Icon from '../../holocene/icon/icon.svelte';
import Link from '../../holocene/link.svelte';
import { translate } from '../../i18n/translate';
import { routeForEventHistoryEvent } from '../../utilities/route-for';
import { toTimeDifference } from '../../utilities/to-time-difference';
import EventDetailsFull from './event-details-full.svelte';
import EventDetailsRow from './event-details-row.svelte';
export let event;
export let group = undefined;
export let index;
export let expandAll = false;
export let active = false;
export let onRowClick = () => { };
$: expanded = expandAll;
$: ({ workflow, run, namespace } = $page.params);
$: href = routeForEventHistoryEvent({
    eventId: event.activityId,
    namespace,
    workflow,
    run,
});
const onLinkClick = () => {
    expanded = !expanded;
    onRowClick();
};
</script>

<tr
  class="row dense"
  id={`${event.id}-${index}`}
  class:expanded={expanded && !expandAll}
  class:active
  data-testid="pending-activity-summary-row"
  on:click|stopPropagation={onLinkClick}
>
  <td class="font-mono">
    <Link data-testid="link" {href}>
      {event.activityId}
    </Link>
  </td>
  <td class="w-full overflow-hidden text-right font-normal xl:text-left">
    <div class="flex w-full items-center gap-2">
      <p class="event-name truncate font-semibold md:text-base">
        Pending Activity
      </p>
      <div
        class="flex items-center gap-1 {event.attempt > 1 &&
          'surface-retry px-1 py-0.5'}"
      >
        <Icon class="mr-1.5 inline" name="retry" />
        {translate('workflows.attempt')}
        {event.attempt} / {event.maximumAttempts || '∞'}
        {#if event.attempt > 1}
          • {translate('workflows.next-retry')}
          {toTimeDifference({
            date: event.scheduledTime,
            negativeDefault: 'None',
          })}
        {/if}
      </div>
      <EventDetailsRow
        key="activityType"
        value={event.activityType}
        showKey
        attributes={event}
      />
    </div></td
  >
  <td />
</tr>
{#if expanded}
  <tr class="row expanded">
    <td class="expanded-cell w-full">
      <EventDetailsFull {group} />
    </td>
  </tr>
{/if}

<style>
  .row {

    display: flex;

    -webkit-user-select: none;

       -moz-user-select: none;

            user-select: none;

    align-items: center;

    gap: 1rem;

    padding-left: 0.5rem;

    padding-right: 0.5rem;

    font-size: 0.875rem;

    line-height: 1.25rem;

    text-decoration-line: none
}

  .expanded-cell {

    font-size: 0.875rem;

    line-height: 1.25rem;

    text-decoration-line: none
}</style>
