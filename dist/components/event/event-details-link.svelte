<script>import { page } from '$app/stores';
import Link from '../../holocene/link.svelte';
import {} from '../../utilities/get-single-attribute-for-event';
import { routeForEventHistory, routeForNexusEndpoint, routeForTaskQueue, } from '../../utilities/route-for';
export let value;
export let attributes;
export let type;
$: ({ workflow, namespace } = $page.params);
$: executionLink = routeForEventHistory({
    namespace,
    workflow,
    run: value,
});
$: taskQueueLink = routeForTaskQueue({ namespace, queue: value });
$: childWorkflowLink = routeForEventHistory({
    namespace,
    workflow: attributes.workflowExecutionWorkflowId,
    run: attributes.workflowExecutionRunId,
});
$: nexusEndpointLink = routeForNexusEndpoint(value);
$: hrefs = {
    execution: executionLink,
    'task-queue': taskQueueLink,
    'child-workflow': childWorkflowLink,
    'nexus-endpoint': nexusEndpointLink,
};
$: href = hrefs[type];
</script>

<Link class={$$restProps.class} {href}>
  {value}
</Link>
