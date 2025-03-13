<script>var _a;
import Button from '../../../holocene/button.svelte';
import Icon from '../../../holocene/icon/icon.svelte';
import { activeGroupHeight, activeGroups } from '../../../stores/active-events';
import { eventFilterSort } from '../../../stores/event-view';
import { fullEventHistory } from '../../../stores/events';
import { eventStatusFilter } from '../../../stores/filters';
import { timeFormat } from '../../../stores/time-format';
import { formatDate } from '../../../utilities/format-date';
import { getFailedOrPendingGroups } from '../../../utilities/get-failed-or-pending';
import { TimelineConfig } from '../constants';
import EndTimeInterval from '../end-time-interval.svelte';
import GroupDetailsRow from './group-details-row.svelte';
import Line from './line.svelte';
import TimelineAxis from './timeline-axis.svelte';
import TimelineGraphRow from './timeline-graph-row.svelte';
import WorkflowRow from './workflow-row.svelte';
export let x = 0;
export let y = 0;
export let workflow;
export let groups;
export let viewportHeight = 360;
export let readOnly = false;
export let workflowTaskFailedError = undefined;
const { height, gutter, radius } = TimelineConfig;
let canvasWidth = 0;
let scrollY = 0;
$: expandedGroupHeight = readOnly ? 0 : $activeGroupHeight;
$: filteredGroups = getFailedOrPendingGroups(groups, $eventStatusFilter);
$: startTime = ((_a = $fullEventHistory[0]) === null || _a === void 0 ? void 0 : _a.eventTime) || workflow.startTime;
$: timelineHeight =
    Math.max(height * (filteredGroups.length + 2), 120) + expandedGroupHeight;
$: canvasHeight = timelineHeight + 120;
const onExpandCollapse = () => {
    if (viewportHeight === 360) {
        viewportHeight = 800;
    }
    else {
        viewportHeight = 360;
    }
};
const handleScroll = (e) => {
    var _a;
    scrollY = (_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.scrollTop;
};
$: activeGroupsHeightAboveGroup = (group) => {
    const activeGroupIsAbove = $activeGroups === null || $activeGroups === void 0 ? void 0 : $activeGroups.filter((id) => {
        if ($eventFilterSort === 'ascending')
            return parseInt(id) < parseInt(group.id);
        return parseInt(id) > parseInt(group.id);
    });
    if (!(activeGroupIsAbove === null || activeGroupIsAbove === void 0 ? void 0 : activeGroupIsAbove.length))
        return 0;
    return expandedGroupHeight;
};
</script>

<div
  class="relative h-auto overflow-auto border-b border-subtle"
  bind:clientWidth={canvasWidth}
  style="max-height: {viewportHeight}px;"
  on:scroll={handleScroll}
>
  <EndTimeInterval {workflow} {startTime} let:endTime let:duration>
    <div class="sticky left-0.5 top-1" class:invisible={readOnly}>
      <Button size="xs" variant="ghost" on:click={onExpandCollapse}>
        <Icon
          name={viewportHeight === 360 ? 'chevron-down' : 'chevron-up'}
          x={canvasWidth - 2 * radius}
          y={radius}
        />
      </Button>
    </div>
    <div
      class="sticky {timelineHeight < viewportHeight
        ? 'top-[160px]'
        : viewportHeight === 360
        ? 'top-[260px]'
        : 'top-[700px]'}"
      class:invisible={!!$activeGroups.length}
    >
      <div class="flex w-full justify-between text-xs">
        <p class="w-60 -translate-x-24 rotate-90">
          {formatDate(startTime, $timeFormat)}
        </p>
        <p class="w-60 translate-x-24 rotate-90">
          {formatDate(endTime, $timeFormat)}
        </p>
      </div>
    </div>
    <svg
      {x}
      {y}
      viewBox="0 0 {canvasWidth} {canvasHeight}"
      height={canvasHeight}
      width={canvasWidth}
      class="-mt-12"
      class:error={workflowTaskFailedError}
    >
      <Line
        startPoint={[gutter, 0]}
        endPoint={[gutter, timelineHeight]}
        strokeWidth={radius / 2}
      />
      <Line
        startPoint={[canvasWidth - gutter, 0]}
        endPoint={[canvasWidth - gutter, timelineHeight]}
        strokeWidth={radius / 2}
      />
      <TimelineAxis
        x1={gutter - radius / 4}
        x2={canvasWidth - gutter + radius / 4}
        {timelineHeight}
        {startTime}
        {duration}
      />
      <WorkflowRow {workflow} y={height} length={canvasWidth} />
      {#each filteredGroups as group, index (group.id)}
        {@const y = (index + 2) * height + activeGroupsHeightAboveGroup(group)}
        {#if y > scrollY - 2 * height && y < scrollY + viewportHeight * height}
          {#key group.eventList.length}
            <TimelineGraphRow
              {y}
              {group}
              activeGroups={$activeGroups}
              {canvasWidth}
              {startTime}
              {endTime}
              {readOnly}
            />
          {/key}
        {/if}
        {#if $activeGroups.includes(group.id)}
          <GroupDetailsRow y={y + 1.33 * radius} {group} {canvasWidth} />
        {/if}
      {/each}
    </svg>
  </EndTimeInterval>
</div>

<style>
  .error {
    background-color: rgb(var(--color-surface-danger))
}</style>
