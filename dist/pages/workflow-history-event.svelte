<script>import { page } from '$app/stores';
import EventSummaryTable from '../components/event/event-summary-table.svelte';
import { groupEvents } from '../models/event-groups';
import { fetchAllEvents } from '../services/events-service';
import { eventFilterSort } from '../stores/event-view';
import { fullEventHistory } from '../stores/events';
import { workflowRun } from '../stores/workflow-run';
$: ({ namespace, workflow: workflowId, run: runId } = $page.params);
const resetFullHistory = () => {
    $fullEventHistory = [];
};
const fetchEvents = async (namespace, workflowId, runId) => {
    if (!$fullEventHistory.length) {
        resetFullHistory();
        $fullEventHistory = await fetchAllEvents({
            namespace,
            workflowId,
            runId,
        });
    }
};
$: fetchEvents(namespace, workflowId, runId);
$: updating = !$fullEventHistory.length;
$: ({ workflow } = $workflowRun);
$: pendingActivities = workflow === null || workflow === void 0 ? void 0 : workflow.pendingActivities;
$: pendingNexusOperations = workflow === null || workflow === void 0 ? void 0 : workflow.pendingNexusOperations;
$: ascendingGroups = groupEvents($fullEventHistory, 'ascending', pendingActivities, pendingNexusOperations);
$: groups =
    $eventFilterSort === 'ascending'
        ? ascendingGroups
        : [...ascendingGroups].reverse();
$: visibleItems = $fullEventHistory.filter((e) => e.id === $page.params.id);
</script>

<div class="px-8" data-testid="event-summary-table">
  <EventSummaryTable items={visibleItems} {groups} {updating} openExpanded />
</div>
