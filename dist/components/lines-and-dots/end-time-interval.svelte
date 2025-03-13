<script>import { onDestroy } from 'svelte';
import { pauseLiveUpdates } from '../../stores/events';
import { getMillisecondDuration } from '../../utilities/format-time';
export let workflow;
export let startTime;
const rightNow = () => {
    const now = new Date();
    now.setSeconds(now.getSeconds() + 1);
    return now;
};
$: endTime = (workflow === null || workflow === void 0 ? void 0 : workflow.endTime) || rightNow();
$: duration = getMillisecondDuration({
    start: startTime,
    end: endTime,
    onlyUnderSecond: false,
});
let endTimeInterval;
const clearEndTimeInterval = (endTime) => {
    if (endTime) {
        clearInterval(endTimeInterval);
        endTimeInterval = null;
    }
};
const startStopInterval = (pauseLiveUpdates) => {
    if (pauseLiveUpdates) {
        clearInterval(endTimeInterval);
        endTimeInterval = null;
    }
    else if (!endTimeInterval && workflow.isRunning) {
        endTimeInterval = setInterval(() => {
            endTime = rightNow();
        }, 1000);
    }
};
$: clearEndTimeInterval(workflow.endTime);
$: startStopInterval($pauseLiveUpdates);
onDestroy(() => {
    clearInterval(endTimeInterval);
    endTimeInterval = null;
    $pauseLiveUpdates = false;
});
</script>

<slot {endTime} {duration} />
