<script>import MetadataDecoder from '../../event/metadata-decoder.svelte';
import { translate } from '../../../i18n/translate';
import { setActiveGroup } from '../../../stores/active-events';
import { getMillisecondDuration } from '../../../utilities/format-time';
import { isActivityTaskScheduledEvent } from '../../../utilities/is-event-type';
import { CategoryIcon, TimelineConfig, timelineTextPosition, } from '../constants';
import Dot from './dot.svelte';
import Line from './line.svelte';
import Text from './text.svelte';
export let y = 0;
export let group;
export let activeGroups = [];
export let startTime;
export let endTime;
export let canvasWidth;
export let active = true;
export let readOnly = false;
const { height, gutter, radius } = TimelineConfig;
$: timelineWidth = canvasWidth - 2 * gutter;
$: active = !activeGroups.length || activeGroups.includes(group.id);
$: pendingActivity = group === null || group === void 0 ? void 0 : group.pendingActivity;
const getDistancePointsAndPositions = (endTime, timelineWidth, y) => {
    const workflowDistance = getMillisecondDuration({
        start: startTime,
        end: endTime,
        onlyUnderSecond: false,
    });
    const points = group.eventList.map((event) => {
        const distance = getMillisecondDuration({
            start: startTime,
            end: event.eventTime,
            onlyUnderSecond: false,
        });
        const ratio = distance / workflowDistance;
        return Math.round(ratio * timelineWidth) + gutter;
    });
    const { textAnchor, textIndex, textPosition, backdrop } = timelineTextPosition(points, y, timelineWidth, group.isPending, TimelineConfig);
    return { points, textAnchor, textIndex, textPosition, backdrop };
};
$: ({ points, textAnchor, textIndex, textPosition, backdrop } =
    getDistancePointsAndPositions(endTime, timelineWidth, y));
const onClick = () => {
    if (readOnly)
        return;
    setActiveGroup(group);
};
</script>

<g
  role="button"
  tabindex="0"
  on:click|preventDefault={onClick}
  on:keypress|preventDefault={onClick}
  class="relative cursor-pointer"
  {height}
>
  {#each points as x, index}
    {@const nextPoint = points[index + 1]}
    {@const showText = textIndex === index}
    {#if nextPoint}
      <Line
        startPoint={[x, y]}
        endPoint={[nextPoint, y]}
        category={group.category}
        classification={group.lastEvent.classification}
        strokeWidth={radius * 2}
        scheduling={index === 0 &&
          group.lastEvent.classification === 'Completed'}
      />
    {/if}
    {#if !nextPoint && group.isPending}
      <Line
        startPoint={[x, y]}
        endPoint={[canvasWidth - gutter, y]}
        category={pendingActivity
          ? pendingActivity.attempt > 1
            ? 'retry'
            : 'pending'
          : group.category}
        classification={group.lastEvent.classification}
        pending
        strokeWidth={radius * 2}
      />
    {/if}
    {#if showText}
      {#if pendingActivity}
        {#key pendingActivity.attempt}
          <Text
            point={textPosition}
            {textAnchor}
            {backdrop}
            backdropHeight={radius * 2}
            config={TimelineConfig}
            icon="retry"
          >
            {group?.displayName} • {translate('workflows.attempt')}
            {pendingActivity.attempt} / {pendingActivity.maximumAttempts || '∞'}
          </Text>
        {/key}
      {:else}
        <MetadataDecoder
          value={group?.userMetadata?.summary}
          prefix={isActivityTaskScheduledEvent(group.initialEvent)
            ? group?.displayName
            : ''}
          fallback={group?.displayName}
          let:decodedValue
        >
          <Text
            point={textPosition}
            {textAnchor}
            {backdrop}
            backdropHeight={radius * 2}
            config={TimelineConfig}
          >
            {decodedValue}
          </Text>
        </MetadataDecoder>
      {/if}
    {/if}
    <Dot
      point={[x, y]}
      classification={group.eventList[index]?.classification}
      icon={CategoryIcon[group.category]}
      r={radius}
    />
  {/each}
</g>

<style>
  g {
    pointer-events: bounding-box;
    outline: none;
  }</style>
