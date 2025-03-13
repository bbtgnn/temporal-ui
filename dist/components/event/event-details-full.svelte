<script>import { relativeTime, timeFormat } from '../../stores/time-format';
import { spaceBetweenCapitalLetters } from '../../utilities/format-camel-case';
import { formatDate } from '../../utilities/format-date';
import { formatAttributes } from '../../utilities/format-event-attributes';
import { isPendingActivity } from '../../utilities/is-pending-activity';
import EventDetailsRowExpanded from './event-details-row-expanded.svelte';
import EventLinksExpanded from './event-links-expanded.svelte';
import EventMetadataExpanded from './event-metadata-expanded.svelte';
export let group = undefined;
export let event = undefined;
$: pendingEvent = (group === null || group === void 0 ? void 0 : group.pendingActivity) || (group === null || group === void 0 ? void 0 : group.pendingNexusOperation);
$: showEventGroup = group && (group.eventList.length > 1 || pendingEvent);
</script>

{#if showEventGroup}
  <div class="w-full">
    <div
      class="flex flex-col gap-0 overflow-hidden border border-subtle xl:flex-row"
    >
      {#each group.eventList as groupEvent}
        {@const attributes = formatAttributes(groupEvent)}
        {@const details = Object.entries(attributes)}
        <div
          class="w-full border-subtle [&:not(:last-child)]:border-r"
          class:three-events={group.eventList.length === 3 ||
            (group.eventList.length === 2 && pendingEvent)}
          class:two-events={group.eventList.length === 2 ||
            (group.eventList.length === 1 && pendingEvent)}
        >
          <div
            class="flex w-full flex-wrap justify-between bg-subtle px-2 py-1"
          >
            <div class="flex gap-2">
              {groupEvent.id}
              {spaceBetweenCapitalLetters(groupEvent.name)}
            </div>
            <div>
              {formatDate(groupEvent.eventTime, $timeFormat, {
                relative: $relativeTime,
              })}
            </div>
          </div>
          {#if groupEvent?.userMetadata?.summary}
            <EventMetadataExpanded value={groupEvent.userMetadata.summary} />
          {/if}
          <EventLinksExpanded links={groupEvent?.links} />
          {#each details as [key, value] (key)}
            <EventDetailsRowExpanded {key} {value} {attributes} />
          {/each}
        </div>
      {/each}
      {#if pendingEvent}
        {@const details = Object.entries(pendingEvent)}
        <div
          class="w-full border-subtle [&:not(:last-child)]:border-r"
          class:three-events={group.eventList.length === 2}
          class:two-events={group.eventList.length === 1}
        >
          <div class="pending flex w-full justify-between px-2 py-1 text-white">
            <div class="flex gap-2">
              Pending {isPendingActivity(pendingEvent)
                ? 'Activity'
                : 'Nexus Operation'}
            </div>
          </div>
          {#each details as [key, value] (key)}
            <EventDetailsRowExpanded {key} {value} attributes={pendingEvent} />
          {/each}
        </div>
      {/if}
    </div>
  </div>
{:else if event}
  {@const attributes = formatAttributes(event)}
  {@const details = Object.entries(attributes)}
  <div class="w-full">
    <div class="w-full overflow-hidden border border-subtle">
      <EventLinksExpanded links={event?.links} />
      {#each details as [key, value] (key)}
        <EventDetailsRowExpanded {key} {value} {attributes} />
      {/each}
    </div>
  </div>
{/if}

<style>
  @media (min-width: 1280px) {

    .three-events {
        width: 33.333333%;
    }

    .two-events {
        width: 50%;
    }
}

  .pending {
    background: repeating-linear-gradient(
      to right,
      #444ce7 0,
      #444ce7 4px,
      #2f34a4 4px,
      #2f34a4 8px
    );
  }</style>
