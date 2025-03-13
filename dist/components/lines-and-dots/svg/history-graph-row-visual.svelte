<script>import { isEvent } from '../../../models/event-history';
import { eventFilterSort } from '../../../stores/event-view';
import { isPendingActivity, isPendingNexusOperation, } from '../../../utilities/is-pending-activity';
import { getNextDistanceAndOffset, HistoryConfig, isMiddleEvent, } from '../constants';
import Dot from './dot.svelte';
import Line from './line.svelte';
export let event;
export let group;
export let history;
export let groups;
export let index;
export let canvasWidth;
const { height, radius } = HistoryConfig;
const strokeWidth = radius / 2;
$: y = index * height + height / 2;
$: ({ nextDistance, offset } = getNextDistanceAndOffset(history, event, groups, height, $eventFilterSort));
$: zoomNextDistance = offset > 0 && nextDistance;
$: classification =
    isPendingActivity(event) || isPendingNexusOperation(event)
        ? 'pending'
        : event === null || event === void 0 ? void 0 : event.classification;
$: horizontalOffset = offset * 1.75 * radius;
$: nextIsPending =
    isEvent(event) && (group === null || group === void 0 ? void 0 : group.lastEvent.id) === (event === null || event === void 0 ? void 0 : event.id) && (group === null || group === void 0 ? void 0 : group.isPending);
$: connectLine =
    isPendingActivity(event) || isPendingNexusOperation(event) || offset === 0
        ? false
        : !isMiddleEvent(event, groups);
$: category =
    isPendingActivity(event) || isPendingNexusOperation(event)
        ? 'pending'
        : nextIsPending
            ? event === null || event === void 0 ? void 0 : event.category
            : '';
$: reverseSort = $eventFilterSort === 'descending';
</script>

<g role="button" tabindex="0" class="relative cursor-pointer">
  {#if connectLine}
    <Line
      startPoint={[canvasWidth, y]}
      endPoint={[canvasWidth - horizontalOffset - radius, y]}
    />
  {/if}
  {#if !reverseSort}
    <Dot
      point={[canvasWidth - horizontalOffset, y]}
      {classification}
      strokeWidth={1}
    />
  {/if}
  {#if zoomNextDistance}
    <Line
      startPoint={[
        canvasWidth - horizontalOffset - radius / 2 + strokeWidth,
        y + radius + strokeWidth / 2,
      ]}
      endPoint={[
        canvasWidth - horizontalOffset - radius / 2 + strokeWidth,
        y + zoomNextDistance + radius,
      ]}
      category={group?.pendingActivity
        ? group.pendingActivity.attempt > 1
          ? 'retry'
          : 'pending'
        : category}
      pending={nextIsPending}
    />
  {/if}
  {#if reverseSort}
    <Dot
      point={[canvasWidth - horizontalOffset, y]}
      {classification}
      strokeWidth={1}
    />
  {/if}
</g>
