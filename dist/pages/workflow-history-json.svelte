<script>import WorkflowJsonNavigator from '../components/workflow/workflow-json-navigator.svelte';
import ToggleSwitch from '../holocene/toggle-switch.svelte';
import { translate } from '../i18n/translate';
import { decodeEventHistory, filteredEventHistory } from '../stores/events';
</script>

<WorkflowJsonNavigator events={$filteredEventHistory}>
  <ToggleSwitch
    slot="decode"
    label={translate('events.decode-event-history')}
    id="decode-event-history"
    bind:checked={$decodeEventHistory}
    data-testid="decode-event-history-toggle"
  />
</WorkflowJsonNavigator>
