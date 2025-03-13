<script>import { goto } from '$app/navigation';
import Button from '../../holocene/button.svelte';
import Tooltip from '../../holocene/tooltip.svelte';
import { translate } from '../../i18n/translate';
import { routeForWorkflowStart } from '../../utilities/route-for';
export let namespace;
export let workflowId;
export let taskQueue;
export let workflowType;
$: href = routeForWorkflowStart({
    namespace,
    workflowId,
    taskQueue,
    workflowType,
});
</script>

<Tooltip text={translate('workflows.start-workflow-like-this-one')} topLeft>
  <Button
    size="xs"
    variant="ghost"
    class="start-button"
    leadingIcon="lightning-bolt"
    on:click={() => goto(href)}
    {...$$restProps}
  ></Button>
</Tooltip>
