<script>import { page } from '$app/stores';
import Link from '../../holocene/link.svelte';
import Table from '../../holocene/table/table.svelte';
import { eventOrGroupIsCanceled, eventOrGroupIsFailureOrTimedOut, eventOrGroupIsTerminated, } from '../../models/event-groups/get-event-in-group';
import { isLocalActivityMarkerEvent } from '../../utilities/is-event-type';
import { routeForEventHistoryEvent } from '../../utilities/route-for';
export let eventGroup;
export let selectedId;
export let onGroupClick;
$: ({ workflow, run, namespace } = $page.params);
</script>

<div class="w-full border-slate-700 lg:w-1/3 lg:border-r">
  <Table class="surface-primary w-full table-fixed pb-2" variant="simple">
    {#each [...eventGroup.events].reverse() as [id, eventInGroup] (id)}
      <tr
        class="row dense"
        class:active={id === selectedId}
        class:failure={eventOrGroupIsFailureOrTimedOut(eventInGroup)}
        class:canceled={eventOrGroupIsCanceled(eventInGroup)}
        class:terminated={eventOrGroupIsTerminated(eventInGroup)}
        on:click|preventDefault|stopPropagation={() => onGroupClick(id)}
      >
        <td class="w-20">
          <p class="truncate text-sm text-slate-500 md:text-base">
            <Link
              class="truncate"
              href={routeForEventHistoryEvent({
                eventId: id,
                namespace,
                workflow,
                run,
              })}
            >
              {id}
            </Link>
          </p>
        </td>
        <td>
          <p class="event-type truncate text-sm md:text-base">
            {isLocalActivityMarkerEvent(eventInGroup)
              ? 'LocalActivity'
              : eventInGroup.eventType}
          </p>
        </td>
        <td />
      </tr>
    {/each}
  </Table>
</div>

<style>
  .row:hover {

    cursor: pointer;

    background-color: rgb(var(--color-interactive-table-hover));

    background-attachment: fixed
}

  .active {

    background-color: rgb(var(--color-interactive-table-hover))
}

  .failure {

    --tw-bg-opacity: 1;

    background-color: rgb(255 243 237 / var(--tw-bg-opacity))
}

  .failure .event-type {

    --tw-text-opacity: 1;

    color: rgb(199 22 7 / var(--tw-text-opacity))
}

  .canceled {

    --tw-bg-opacity: 1;

    background-color: rgb(255 251 235 / var(--tw-bg-opacity))
}

  .canceled .event-type {

    --tw-text-opacity: 1;

    color: rgb(182 85 7 / var(--tw-text-opacity))
}

  .terminated {

    --tw-bg-opacity: 1;

    background-color: rgb(255 242 255 / var(--tw-bg-opacity))
}

  .terminated .event-type {

    --tw-text-opacity: 1;

    color: rgb(211 0 216 / var(--tw-text-opacity))
}

  .failure:hover,
  .active.canceled {

    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));

    --tw-gradient-from: #FFE4D4 var(--tw-gradient-from-position);

    --tw-gradient-to: rgb(255 228 212 / 0) var(--tw-gradient-to-position);

    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);

    --tw-gradient-to: #FFC4A8 var(--tw-gradient-to-position);

    background-attachment: fixed
}

  .canceled:hover,
  .active.canceled {

    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));

    --tw-gradient-from: #FFF4C6 var(--tw-gradient-from-position);

    --tw-gradient-to: rgb(255 244 198 / 0) var(--tw-gradient-to-position);

    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);

    --tw-gradient-to: #FEE989 var(--tw-gradient-to-position);

    background-attachment: fixed
}

  .terminated:hover,
  .active.terminated {

    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));

    --tw-gradient-from: #FEE4FF var(--tw-gradient-from-position);

    --tw-gradient-to: rgb(254 228 255 / 0) var(--tw-gradient-to-position);

    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);

    --tw-gradient-to: #FEC7FF var(--tw-gradient-to-position);

    background-attachment: fixed
}</style>
