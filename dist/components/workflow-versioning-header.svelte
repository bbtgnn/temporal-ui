<script>import CompatibilityBadge from '../holocene/compatibility-badge.svelte';
import { translate } from '../i18n/translate';
import { getCurrentWorkflowBuildId } from '../utilities/task-queue-compatibility';
export let workflow;
$: buildId = getCurrentWorkflowBuildId(workflow);
</script>

<p class="flex items-center gap-1">
  <span>{translate('workers.buildId')}</span><CompatibilityBadge
    active
    {buildId}
  />
</p>
