<script>import { getContext } from 'svelte';
import Checkbox from '../../../holocene/checkbox.svelte';
import { translate } from '../../../i18n/translate';
import { BATCH_OPERATION_CONTEXT, } from '../../../pages/workflows-with-new-search.svelte';
import { supportsBulkActions } from '../../../stores/bulk-actions';
import BatchActions from './batch-actions.svelte';
export let workflows;
export let empty;
export let columnsCount;
const { handleSelectPage, selectedWorkflows, pageSelected, batchActionsVisible, } = getContext(BATCH_OPERATION_CONTEXT);
const handleCheckboxChange = (event) => {
    const { checked } = event.detail;
    handleSelectPage(checked, workflows);
};
$: indeterminate =
    $selectedWorkflows.length > 0 &&
        $selectedWorkflows.length < workflows.length;
$: label = translate('workflows.select-all-workflows');
</script>

<tr>
  {#if !empty && $supportsBulkActions}
    <th class="batch-actions-checkbox-table-cell">
      <Checkbox
        {label}
        labelHidden
        id="select-visible-workflows"
        data-testid="batch-actions-checkbox"
        bind:checked={$pageSelected}
        {indeterminate}
        on:change={handleCheckboxChange}
      />
    </th>
  {/if}
  <th class="w-12" />
  {#if $supportsBulkActions && $batchActionsVisible}
    <th class="batch-actions-table-cell" colspan={columnsCount}>
      <BatchActions {workflows} />
    </th>
  {:else}
    <slot />
  {/if}
</tr>

<style>
  .batch-actions-checkbox-table-cell {

    width: 2.5rem
}

  .batch-actions-table-cell {

    overflow: visible;

    white-space: nowrap;

    font-weight: 500
}</style>
