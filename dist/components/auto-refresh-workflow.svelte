<script>import ToggleSwitch from '../holocene/toggle-switch.svelte';
import Tooltip from '../holocene/tooltip.svelte';
import { translate } from '../i18n/translate';
import { autoRefreshWorkflow } from '../stores/event-view';
export let onChange;
$: checked = $autoRefreshWorkflow === 'on';
</script>

<Tooltip
  bottomLeft
  text={translate('common.auto-refresh-tooltip', { interval: '15' })}
>
  <ToggleSwitch
    label={translate('common.auto-refresh')}
    labelPosition="left"
    id="autorefresh"
    {checked}
    on:change={onChange}
  />
</Tooltip>
