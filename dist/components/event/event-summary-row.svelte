<script>var _a, _b, _c, _d, _e, _f, _g, _h;
import { fade, slide } from 'svelte/transition';
import { page } from '$app/stores';
import Badge from '../../holocene/badge.svelte';
import Icon from '../../holocene/icon/icon.svelte';
import Link from '../../holocene/link.svelte';
import Tooltip from '../../holocene/tooltip.svelte';
import { translate } from '../../i18n/translate';
import { isEventGroup } from '../../models/event-groups';
import { eventOrGroupIsCanceled, eventOrGroupIsFailureOrTimedOut, eventOrGroupIsTerminated, } from '../../models/event-groups/get-event-in-group';
import { relativeTime, timeFormat } from '../../stores/time-format';
import { spaceBetweenCapitalLetters } from '../../utilities/format-camel-case';
import { formatDate } from '../../utilities/format-date';
import { formatAttributes } from '../../utilities/format-event-attributes';
import { formatDistanceAbbreviated } from '../../utilities/format-time';
import { getPrimaryAttributeForEvent, getSecondaryAttributeForEvent, } from '../../utilities/get-single-attribute-for-event';
import { isActivityTaskStartedEvent, isLocalActivityMarkerEvent, } from '../../utilities/is-event-type';
import { routeForEventHistoryEvent } from '../../utilities/route-for';
import { toTimeDifference } from '../../utilities/to-time-difference';
import EventDetailsFull from './event-details-full.svelte';
import EventDetailsRow from './event-details-row.svelte';
import EventLink from './event-link.svelte';
import MetadataDecoder from './metadata-decoder.svelte';
export let event;
export let group = undefined;
export let initialItem;
export let index = 0;
export let compact = false;
export let expandAll = false;
export let typedError = false;
export let active = false;
export let onRowClick = () => { };
$: selectedId = isEventGroup(event)
    ? Array.from(event.events.keys()).shift()
    : event.id;
$: ({ workflow, run, namespace } = $page.params);
$: href = routeForEventHistoryEvent({
    eventId: event.id,
    namespace,
    workflow,
    run,
});
$: expanded = expandAll;
$: attributes = formatAttributes(event);
$: currentEvent = isEventGroup(event) ? event.events.get(selectedId) : event;
$: elapsedTime = formatDistanceAbbreviated({
    start: initialItem === null || initialItem === void 0 ? void 0 : initialItem.eventTime,
    end: isEventGroup(event)
        ? (_a = event.initialEvent) === null || _a === void 0 ? void 0 : _a.eventTime
        : currentEvent.eventTime,
    includeMillisecondsForUnderSecond: true,
});
$: duration = isEventGroup(event)
    ? formatDistanceAbbreviated({
        start: (_b = event.initialEvent) === null || _b === void 0 ? void 0 : _b.eventTime,
        end: (_c = event.lastEvent) === null || _c === void 0 ? void 0 : _c.eventTime,
        includeMillisecondsForUnderSecond: true,
    })
    : '';
const onLinkClick = () => {
    expanded = !expanded;
    onRowClick();
};
$: failure = eventOrGroupIsFailureOrTimedOut(event);
$: canceled = eventOrGroupIsCanceled(event);
$: terminated = eventOrGroupIsTerminated(event);
$: displayName = isEventGroup(event)
    ? event.label
    : isLocalActivityMarkerEvent(event)
        ? 'Local Activity'
        : spaceBetweenCapitalLetters(event.name);
$: primaryAttribute = getPrimaryAttributeForEvent(isEventGroup(event) ? event.initialEvent : event);
$: secondaryAttribute = getSecondaryAttributeForEvent(isEventGroup(event) ? event.lastEvent : event, primaryAttribute === null || primaryAttribute === void 0 ? void 0 : primaryAttribute.key);
$: hasPendingActivity = isEventGroup(event) && (event === null || event === void 0 ? void 0 : event.pendingActivity);
$: pendingAttempt =
    isEventGroup(event) &&
        event.isPending &&
        (((_d = event === null || event === void 0 ? void 0 : event.pendingActivity) === null || _d === void 0 ? void 0 : _d.attempt) || ((_e = event === null || event === void 0 ? void 0 : event.pendingNexusOperation) === null || _e === void 0 ? void 0 : _e.attempt));
$: nonPendingActivityAttempt =
    isEventGroup(event) &&
        !event.isPending &&
        ((_g = (_f = event.eventList.find(isActivityTaskStartedEvent)) === null || _f === void 0 ? void 0 : _f.attributes) === null || _g === void 0 ? void 0 : _g.attempt);
$: showSecondaryAttribute =
    compact &&
        (secondaryAttribute === null || secondaryAttribute === void 0 ? void 0 : secondaryAttribute.key) &&
        (secondaryAttribute === null || secondaryAttribute === void 0 ? void 0 : secondaryAttribute.key) !== (primaryAttribute === null || primaryAttribute === void 0 ? void 0 : primaryAttribute.key) &&
        !((_h = currentEvent === null || currentEvent === void 0 ? void 0 : currentEvent.userMetadata) === null || _h === void 0 ? void 0 : _h.summary);
</script>

<tr
  class="row dense"
  id={`${event.id}-${index}`}
  class:expanded={expanded && !expandAll}
  class:active
  class:failure
  class:canceled
  class:terminated
  class:typedError
  data-eventid={event.id}
  data-testid="event-summary-row"
  on:click|stopPropagation={onLinkClick}
>
  {#if isEventGroup(event)}
    <td class="w-24 min-w-fit font-mono">
      <div class="flex items-center gap-0.5">
        {#each event.eventList as groupEvent}
          <Link
            data-testid="link"
            href={routeForEventHistoryEvent({
              eventId: groupEvent.id,
              namespace,
              workflow,
              run,
            })}
          >
            {groupEvent.id}
          </Link>
        {/each}
      </div>
    </td>
  {:else}
    <td class="font-mono">
      <Link data-testid="link" {href}>
        {event.id}
      </Link>
    </td>
  {/if}
  <td class="text-right md:hidden">
    <Tooltip
      hide={(isEventGroup(event) && !duration) || !elapsedTime}
      text={isEventGroup(event) ? `Duration: ${duration}` : `+${elapsedTime}`}
      bottom
    >
      {formatDate(currentEvent?.eventTime, $timeFormat, {
        relative: $relativeTime,
        abbrFormat: true,
      })}
    </Tooltip>
  </td>
  <td class="hidden text-right md:block">
    <Tooltip
      hide={(isEventGroup(event) && !duration) || !elapsedTime}
      text={isEventGroup(event) ? `Duration: ${duration}` : `+${elapsedTime}`}
      bottom
    >
      {formatDate(currentEvent?.eventTime, $timeFormat, {
        relative: $relativeTime,
      })}
    </Tooltip>
  </td>
  <td class="truncate md:min-w-fit">
    <p class="event-name whitespace-nowrap font-semibold md:text-base">
      {displayName}
    </p>
  </td>
  <td
    class="hidden w-full items-center gap-2 text-right text-sm font-normal md:flex xl:text-left"
  >
    {#if pendingAttempt}
      <div
        class="flex items-center gap-1 {pendingAttempt > 1 &&
          'surface-retry px-1 py-0.5'}"
      >
        <Icon class="mr-1.5 inline" name="retry" />
        {translate('workflows.attempt')}
        {pendingAttempt}
        {#if hasPendingActivity}
          / {hasPendingActivity.maximumAttempts || '∞'}
          {#if pendingAttempt > 1}
            • {translate('workflows.next-retry')}
            {toTimeDifference({
              date: hasPendingActivity.scheduledTime,
              negativeDefault: 'None',
            })}
          {/if}
        {/if}
      </div>
    {/if}
    {#if primaryAttribute?.key}
      <EventDetailsRow {...primaryAttribute} {attributes} />
    {/if}
    {#if currentEvent?.userMetadata?.summary}
      <MetadataDecoder
        value={currentEvent.userMetadata.summary}
        let:decodedValue
      >
        {#if decodedValue}
          <div
            class="flex max-w-xl items-center gap-2 first:pt-0 last:border-b-0 md:w-auto"
          >
            <p class="whitespace-nowrap text-right text-xs">Summary</p>
            <Badge type="secondary" class="block select-none truncate">
              {decodedValue}
            </Badge>
          </div>
        {/if}
      </MetadataDecoder>
    {/if}
    {#if currentEvent?.links?.length}
      <EventLink
        link={currentEvent.links[0]}
        class="max-w-xl"
        linkClass="truncate"
      />
    {/if}
    {#if nonPendingActivityAttempt}
      <EventDetailsRow
        key="attempt"
        value={nonPendingActivityAttempt.toString()}
        {attributes}
      />
    {/if}
    {#if showSecondaryAttribute}
      <EventDetailsRow {...secondaryAttribute} {attributes} />
    {/if}
  </td>
</tr>
{#if expanded}
  <tr
    in:fade
    out:slide={{ duration: 175 }}
    class:typedError
    class="row expanded"
  >
    <td class="expanded-cell w-full">
      <EventDetailsFull {group} event={currentEvent} />
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

  .failure {

    border-width: 1px;

    border-color: rgb(var(--color-border-danger))
}

  .failure .event-name {

    color: rgb(var(--color-text-danger))
}

  .canceled {

    border-width: 1px;

    border-color: rgb(var(--color-border-warning))
}

  .canceled .event-name {

    color: rgb(var(--color-text-warning))
}

  .terminated {

    border-width: 1px;

    --tw-border-opacity: 1;

    border-color: rgb(211 0 216 / var(--tw-border-opacity))
}

  .terminated .event-name {

    --tw-text-opacity: 1;

    color: rgb(211 0 216 / var(--tw-text-opacity))
}

  .expanded-cell {

    font-size: 0.875rem;

    line-height: 1.25rem;

    text-decoration-line: none
}

  .typedError .expanded-cell {

    border-bottom-width: 0px
}</style>
