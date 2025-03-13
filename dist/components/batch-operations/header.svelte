<script>import { createEventDispatcher } from 'svelte';
import Badge, {} from '../../holocene/badge.svelte';
import ToggleSwitch from '../../holocene/toggle-switch.svelte';
import Tooltip from '../../holocene/tooltip.svelte';
import { translate } from '../../i18n/translate';
import { autoRefresh } from '../../stores/batch-operations';
export let operation;
const dispatch = createEventDispatcher();
const handleToggleAutoRefresh = (event) => {
    const { checked } = event.target;
    dispatch('toggleAutoRefresh', { checked });
    $autoRefresh = checked;
};
const jobStateToBadgeType = {
    Completed: 'success',
    Running: 'primary',
    Failed: 'danger',
    Unspecified: undefined,
};
</script>

<div class="flex items-center justify-between">
  <div class="flex flex-col gap-2">
    <div class="flex flex-row items-center gap-2 max-sm:flex-col">
      <h1>
        {translate('batch.describe-page-title')}
      </h1>
      <Badge type={jobStateToBadgeType[operation.state]}>
        {operation.state}
      </Badge>
    </div>
    <p>
      {operation.jobId}
    </p>
  </div>
  {#if operation.state === 'Running'}
    <Tooltip
      top
      text={translate('common.auto-refresh-tooltip', { interval: '5' })}
    >
      <ToggleSwitch
        id="batch-operation-auto-refresh"
        label={translate('common.auto-refresh')}
        labelPosition="left"
        checked={$autoRefresh}
        on:change={handleToggleAutoRefresh}
      />
    </Tooltip>
  {/if}
</div>
