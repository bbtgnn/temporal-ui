<script>import { page } from '$app/stores';
import Icon from '../../holocene/icon/icon.svelte';
import Link from '../../holocene/link.svelte';
import { translate } from '../../i18n/translate';
import { routeForEventHistoryEvent } from '../../utilities/route-for';
import { toTimeDifference } from '../../utilities/to-time-difference';
import EventDetailsFull from './event-details-full.svelte';
export let event;
export let group = undefined;
export let index;
export let expandAll = false;
export let active = false;
export let onRowClick = () => { };
$: expanded = expandAll;
$: ({ workflow, run, namespace } = $page.params);
$: href = routeForEventHistoryEvent({
    eventId: event.scheduledEventId,
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
  id={`${event.scheduledEventId}-${index}`}
  class:expanded={expanded && !expandAll}
  class:active
  data-testid="pending-nexus-summary-row"
  on:click|stopPropagation={onLinkClick}
>
  <td class="font-mono">
    <Link data-testid="link" {href}>
      {event.scheduledEventId || ''}
    </Link>
  </td>
  <td
    class="w-full overflow-hidden text-right text-sm font-normal xl:text-left"
  >
    <div class="flex">
      <div class="flex w-full items-center gap-2">
        <p class="font-semibold md:text-base">Pending Nexus Operation</p>
        {#if event.attempt}
          <div
            class="flex items-center gap-1 {event.attempt > 1 &&
              'surface-retry px-1 py-0.5'}"
          >
            <Icon class="mr-1.5 inline" name="retry" />
            {translate('workflows.attempt')}
            {event.attempt}
            {#if event.attempt > 1}
              • {translate('workflows.next-retry')}
              {toTimeDifference({
                date: event.nextAttemptScheduleTime,
                negativeDefault: 'None',
              })}
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </td>
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
