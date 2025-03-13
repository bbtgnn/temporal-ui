<script>import { groupEvents } from '../../../models/event-groups';
import { fetchAllEvents } from '../../../services/events-service';
import { fetchWorkflow } from '../../../services/workflow-service';
import TimelineGraph from './timeline-graph.svelte';
export let namespace;
export let workflowId;
export let runId = '';
export let viewportHeight = 360;
export let onLoad = () => { };
const getWorkflowAndEventHistory = async () => {
    const [workflow, history] = await Promise.all([
        fetchWorkflow({ namespace, workflowId, runId }),
        fetchAllEvents({ namespace, workflowId, runId }),
    ]);
    return { workflow: workflow.workflow, history };
};
const createGroups = (workflow, history) => {
    var _a;
    onLoad();
    const pendingActivities = (_a = workflow === null || workflow === void 0 ? void 0 : workflow.pendingActivities) !== null && _a !== void 0 ? _a : [];
    return groupEvents(history, 'ascending', pendingActivities);
};
</script>

{#await getWorkflowAndEventHistory() then { workflow, history }}
  <div class="cursor-pointer overflow-auto {$$restProps.class}">
    <TimelineGraph
      {viewportHeight}
      {workflow}
      groups={createGroups(workflow, history)}
      readOnly
    />
  </div>
{/await}
