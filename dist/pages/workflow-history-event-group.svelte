<script>import { page } from '$app/stores';
import EventSummaryTable from '../components/event/event-summary-table.svelte';
import Link from '../holocene/link.svelte';
import { groupEvents } from '../models/event-groups';
import { fetchAllEvents } from '../services/events-service';
import { eventFilterSort } from '../stores/event-view';
import { fullEventHistory } from '../stores/events';
import { workflowRun } from '../stores/workflow-run';
import { isChildWorkflowClosedEvent } from '../utilities/get-workflow-relationships';
import { routeForEventHistory } from '../utilities/route-for';
$: ({
    namespace,
    workflow: workflowId,
    run: runId,
    id: groupId,
} = $page.params);
let eventGroup;
let events = [];
const resetFullHistory = () => {
    $fullEventHistory = [];
};
const fetchEvents = async (namespace, workflowId, runId) => {
    if ($workflowRun.workflow.id !== workflowId || !$fullEventHistory.length) {
        resetFullHistory();
        $fullEventHistory = await fetchAllEvents({
            namespace,
            workflowId,
            runId,
            sort: $eventFilterSort,
        });
    }
    eventGroup = groupEvents($fullEventHistory, $eventFilterSort).find((e) => e.id === groupId);
    if (eventGroup)
        events = [eventGroup];
};
$: fetchEvents(namespace, workflowId, runId);
$: updating = !$fullEventHistory.length;
function getLink(group) {
    const childEvent = group === null || group === void 0 ? void 0 : group.eventList.find(isChildWorkflowClosedEvent);
    return childEvent
        ? routeForEventHistory({
            namespace,
            workflow: childEvent.attributes.workflowExecution.workflowId,
            run: childEvent.attributes.workflowExecution.runId,
        })
        : '';
}
$: workflowLink = getLink(eventGroup);
</script>

<div class="px-8">
  {#if eventGroup}
    <h2 class="flex w-full items-center">
      {#if workflowLink}
        <Link href={workflowLink}>
          {eventGroup.displayName}
        </Link>
      {:else}
        {eventGroup.displayName}
      {/if}
    </h2>
  {/if}
  <div data-testid="event-summary-table">
    <EventSummaryTable items={events} groups={events} {updating} openExpanded />
  </div>
</div>
