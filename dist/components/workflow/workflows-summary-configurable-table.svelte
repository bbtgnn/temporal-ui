<script>var _a, _b;
import { page } from '$app/stores';
import TableEmptyState from './workflows-summary-configurable-table/table-empty-state.svelte';
import Button from '../../holocene/button.svelte';
import Icon from '../../holocene/icon/icon.svelte';
import PaginatedTable from '../../holocene/table/paginated-table/paginated.svelte';
import Tooltip from '../../holocene/tooltip.svelte';
import { translate } from '../../i18n/translate';
import { fetchAllChildWorkflows } from '../../services/workflow-service';
import { configurableTableColumns } from '../../stores/configurable-table-columns';
import { hideChildWorkflows } from '../../stores/filters';
import { refresh, updating, workflows, workflowsQuery, } from '../../stores/workflows';
import { exportWorkflows } from '../../utilities/export-workflows';
import TableBodyCell from './workflows-summary-configurable-table/table-body-cell.svelte';
import TableHeaderCell from './workflows-summary-configurable-table/table-header-cell.svelte';
import TableHeaderRow from './workflows-summary-configurable-table/table-header-row.svelte';
import TableRow from './workflows-summary-configurable-table/table-row.svelte';
export let onClickConfigure;
$: ({ namespace } = $page.params);
$: columns = (_b = (_a = $configurableTableColumns === null || $configurableTableColumns === void 0 ? void 0 : $configurableTableColumns[namespace]) === null || _a === void 0 ? void 0 : _a.workflows) !== null && _b !== void 0 ? _b : [];
$: empty = $workflows.length === 0;
let childrenIds = [];
const clearChildren = () => {
    childrenIds = [];
};
$: $hideChildWorkflows, $refresh, $workflowsQuery, clearChildren();
const viewChildren = async (workflow) => {
    if (childrenActive(workflow)) {
        childrenIds = childrenIds.filter((id) => id.workflowId !== workflow.id && id.runId !== workflow.runId);
    }
    else {
        const children = await fetchAllChildWorkflows(namespace, workflow.id, workflow.runId);
        childrenIds = [
            { workflowId: workflow.id, runId: workflow.runId, children },
            ...childrenIds,
        ];
    }
};
$: childrenActive = (workflow) => {
    return childrenIds.find((id) => id.workflowId === workflow.id && id.runId === workflow.runId);
};
</script>

<PaginatedTable
  aria-label={translate('common.workflows')}
  perPageLabel={translate('common.per-page')}
  nextPageButtonLabel={translate('common.next-page')}
  previousPageButtonLabel={translate('common.previous-page')}
  pageButtonLabel={(page) => translate('common.go-to-page', { page })}
  updating={$updating}
  items={$workflows}
  let:visibleItems
>
  <caption class="sr-only" slot="caption">
    {translate('common.workflows')}
  </caption>
  <TableHeaderRow
    columnsCount={columns.length}
    {empty}
    slot="headers"
    let:visibleItems
    workflows={visibleItems}
  >
    {#each columns as column}
      <TableHeaderCell {column} />
    {/each}
  </TableHeaderRow>
  {#each visibleItems as workflow}
    <TableRow
      {workflow}
      {viewChildren}
      childCount={childrenActive(workflow)?.children.length}
    >
      {#each columns as column}
        <TableBodyCell {workflow} {column} />
      {/each}
    </TableRow>
    {#if childrenActive(workflow)}
      {#each childrenActive(workflow).children as child}
        <TableRow workflow={child} child>
          {#each columns as column}
            <TableBodyCell workflow={child} {column} />
          {/each}
        </TableRow>
      {/each}
    {/if}
  {/each}
  <svelte:fragment slot="empty" let:updating>
    <TableEmptyState {updating}>
      <slot name="cloud" slot="cloud" />
    </TableEmptyState>
  </svelte:fragment>
  <svelte:fragment slot="actions-end-additional">
    <Tooltip text={translate('common.download-json')} top>
      <Button
        on:click={() => exportWorkflows($workflows)}
        data-testid="export-history-button"
        size="xs"
        variant="ghost"
      >
        <Icon name="download" />
      </Button>
    </Tooltip>
    <Tooltip text="Configure Columns" top>
      <Button
        on:click={onClickConfigure}
        data-testid="workflows-summary-table-configuration-button"
        size="xs"
        variant="ghost"
      >
        <Icon name="settings" />
      </Button>
    </Tooltip>
  </svelte:fragment>
</PaginatedTable>
