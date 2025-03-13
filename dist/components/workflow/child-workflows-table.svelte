<script>import Link from '../../holocene/link.svelte';
import Pagination from '../../holocene/pagination.svelte';
import TableHeaderRow from '../../holocene/table/table-header-row.svelte';
import TableRow from '../../holocene/table/table-row.svelte';
import Table from '../../holocene/table/table.svelte';
import { translate } from '../../i18n/translate';
import { routeForEventHistory } from '../../utilities/route-for';
import WorkflowStatus from '../workflow-status.svelte';
export let children = [];
export let pendingChildren = [];
export let namespace;
$: formattedPending = pendingChildren.map((c) => {
    return {
        runId: c.runId,
        workflowId: c.workflowId,
        status: 'Running',
        type: c.workflowTypeName,
        namespace,
    };
});
$: formattedCompleted = children.map((c) => {
    var _a;
    return {
        runId: c.attributes.workflowExecution.runId,
        workflowId: c.attributes.workflowExecution.workflowId,
        type: c.attributes.workflowType,
        status: c.classification,
        namespace: ((_a = c.attributes) === null || _a === void 0 ? void 0 : _a.namespace) || namespace,
    };
});
$: formattedAll = [...formattedPending, ...formattedCompleted];
</script>

<Pagination
  items={formattedAll}
  let:visibleItems
  aria-label={translate('workflows.child-workflows')}
  pageSizeSelectLabel={translate('common.per-page')}
  previousButtonLabel={translate('common.previous')}
  nextButtonLabel={translate('common.next')}
>
  <div slot="pagination-top" />
  <Table class="w-full">
    <caption class="sr-only" slot="caption"
      >{translate('workflows.child-workflows')}</caption
    >
    <TableHeaderRow slot="headers">
      <th class="max-md:hidden">{translate('common.status')}</th>
      <th class="max-lg:hidden">{translate('common.type')}</th>
      <th>{translate('workflows.child-id')}</th>
      <th>{translate('workflows.child-run-id')}</th>
    </TableHeaderRow>
    {#each visibleItems as child}
      <TableRow>
        <td class="max-md:hidden">
          <WorkflowStatus status={child.status} />
        </td>
        <td class="max-lg:hidden">
          {child.type}
        </td>
        <td class="hover:text-blue-700 hover:underline">
          <Link
            href={routeForEventHistory({
              namespace: child.namespace,
              workflow: child.workflowId,
              run: child.runId,
            })}
          >
            {child.workflowId}
          </Link>
        </td>
        <td class="hover:text-blue-700 hover:underline">
          <Link
            href={routeForEventHistory({
              namespace: child.namespace,
              workflow: child.workflowId,
              run: child.runId,
            })}
          >
            {child.runId}
          </Link>
        </td>
      </TableRow>
    {/each}
  </Table>
</Pagination>
