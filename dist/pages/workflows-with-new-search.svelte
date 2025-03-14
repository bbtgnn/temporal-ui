<script context="module">export const BATCH_OPERATION_CONTEXT = 'BATCH_OPERATION_CONTEXT';
</script>

<script>import { derived, writable } from 'svelte/store';
import { onMount, setContext } from 'svelte';
import { page } from '$app/stores';
import BatchCancelConfirmationModal from '../components/workflow/client-actions/batch-cancel-confirmation-modal.svelte';
import BatchResetConfirmationModal from '../components/workflow/client-actions/batch-reset-confirmation-modal.svelte';
import BatchTerminateConfirmationModal from '../components/workflow/client-actions/batch-terminate-confirmation-modal.svelte';
import CancelConfirmationModal from '../components/workflow/client-actions/cancel-confirmation-modal.svelte';
import TerminateConfirmationModal from '../components/workflow/client-actions/terminate-confirmation-modal.svelte';
import ConfigurableTableHeadersDrawer from '../components/workflow/configurable-table-headers-drawer/index.svelte';
import WorkflowSearchAttributeFilter from '../components/workflow/search-attribute-filter/index.svelte';
import WorkflowCountRefresh from '../components/workflow/workflow-count-refresh.svelte';
import WorkflowCounts from '../components/workflow/workflow-counts.svelte';
import WorkflowsSummaryConfigurableTable from '../components/workflow/workflows-summary-configurable-table.svelte';
import Button from '../holocene/button.svelte';
import { translate } from '../i18n/translate';
import Translate from '../i18n/translate.svelte';
import { supportsAdvancedVisibility } from '../stores/advanced-visibility';
import { groupByCountEnabled } from '../stores/capability-enablement';
import { availableWorkflowSystemSearchAttributeColumns } from '../stores/configurable-table-columns';
import { workflowFilters } from '../stores/filters';
import { lastUsedNamespace } from '../stores/namespaces';
import { searchAttributes } from '../stores/search-attributes';
import { refresh, updating, workflowCount, workflowsQuery, workflowsSearchParams, } from '../stores/workflows';
import { toListWorkflowFilters } from '../utilities/query/to-list-workflow-filters';
import { routeForWorkflowStart } from '../utilities/route-for';
import { workflowCreateDisabled } from '../utilities/workflow-create-disabled';
$: query = $page.url.searchParams.get('query');
$: query, ($workflowsQuery = query);
$: namespace = $page.params.namespace;
// For returning to page from 'Back to Workflows' with previous search
$: searchParams = $page.url.searchParams.toString();
$: searchParams, ($workflowsSearchParams = searchParams);
$: availableColumns = availableWorkflowSystemSearchAttributeColumns(namespace, $page.data.settings);
onMount(() => {
    $lastUsedNamespace = $page.params.namespace;
    if (query) {
        // Set filters from inital page load query if it exists
        $workflowFilters = toListWorkflowFilters(query, $searchAttributes);
    }
});
const resetSelection = () => {
    $allSelected = false;
    $pageSelected = false;
    $selectedWorkflows = [];
};
let batchTerminateConfirmationModalOpen = false;
let batchCancelConfirmationModalOpen = false;
let batchResetConfirmationModalOpen = false;
let terminateConfirmationModalOpen = false;
let cancelConfirmationModalOpen = false;
const allSelected = writable(false);
const pageSelected = writable(false);
const selectedWorkflows = writable([]);
const batchActionsVisible = derived(selectedWorkflows, (workflows) => workflows.length > 0);
const terminableWorkflows = derived(selectedWorkflows, (workflows) => workflows.filter((workflow) => workflow.canBeTerminated));
const cancelableWorkflows = derived(selectedWorkflows, (workflows) => workflows.filter((workflow) => workflow.status === 'Running'));
const openBatchCancelConfirmationModal = () => {
    $selectedWorkflows.length > 1
        ? (batchCancelConfirmationModalOpen = true)
        : (cancelConfirmationModalOpen = true);
};
const openBatchTerminateConfirmationModal = () => {
    $selectedWorkflows.length > 1
        ? (batchTerminateConfirmationModalOpen = true)
        : (terminateConfirmationModalOpen = true);
};
const openBatchResetConfirmationModal = () => {
    batchResetConfirmationModalOpen = true;
};
const handleSelectAll = (workflows) => {
    allSelected.set(true);
    selectedWorkflows.set([...workflows]);
};
const handleSelectPage = (checked, workflows) => {
    pageSelected.set(checked);
    if (allSelected)
        allSelected.set(false);
    if (checked) {
        selectedWorkflows.set([...workflows]);
    }
    else {
        selectedWorkflows.set([]);
    }
};
setContext(BATCH_OPERATION_CONTEXT, {
    allSelected,
    pageSelected,
    terminableWorkflows,
    cancelableWorkflows,
    selectedWorkflows,
    batchActionsVisible,
    openBatchCancelConfirmationModal,
    openBatchTerminateConfirmationModal,
    openBatchResetConfirmationModal,
    handleSelectAll,
    handleSelectPage,
});
$: {
    if ($updating) {
        resetSelection();
    }
}
let customizationDrawerOpen = false;
const openCustomizationDrawer = () => {
    customizationDrawerOpen = true;
};
</script>

<BatchTerminateConfirmationModal
  {namespace}
  bind:open={batchTerminateConfirmationModalOpen}
/>

<BatchCancelConfirmationModal
  {namespace}
  bind:open={batchCancelConfirmationModalOpen}
/>

<BatchResetConfirmationModal
  {namespace}
  bind:open={batchResetConfirmationModalOpen}
/>

<TerminateConfirmationModal
  {refresh}
  {namespace}
  workflow={$selectedWorkflows[0]}
  bind:open={terminateConfirmationModalOpen}
/>

<CancelConfirmationModal
  {refresh}
  {namespace}
  workflow={$selectedWorkflows[0]}
  bind:open={cancelConfirmationModalOpen}
/>

<header class="flex flex-col gap-2">
  <div class="flex flex-col justify-between gap-2 md:flex-row">
    <h1 class="flex items-center gap-2" data-cy="workflows-title">
      {#if $supportsAdvancedVisibility}
        <span data-testid="workflow-count"
          >{$workflowCount.count.toLocaleString()}</span
        >
        <Translate key="common.workflows-plural" count={$workflowCount.count} />
      {:else}
        <Translate key="workflows.recent-workflows" />
      {/if}
      <WorkflowCountRefresh count={$workflowCount.newCount} />
    </h1>
    {#if !workflowCreateDisabled($page)}
      <Button
        leadingIcon="lightning-bolt"
        href={routeForWorkflowStart({ namespace })}
        >{translate('workflows.start-workflow')}</Button
      >
    {/if}
  </div>
  {#if $groupByCountEnabled}
    <WorkflowCounts />
  {/if}
</header>

<WorkflowSearchAttributeFilter />
<WorkflowsSummaryConfigurableTable onClickConfigure={openCustomizationDrawer}>
  <slot name="cloud" slot="cloud" />
</WorkflowsSummaryConfigurableTable>

<ConfigurableTableHeadersDrawer
  {availableColumns}
  bind:open={customizationDrawerOpen}
  type={translate('common.columns')}
  title={translate('common.workflows-table')}
/>
