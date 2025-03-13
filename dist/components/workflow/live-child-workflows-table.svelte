<script>import { page } from '$app/stores';
import Link from '../../holocene/link.svelte';
import Pagination from '../../holocene/pagination.svelte';
import TableHeaderRow from '../../holocene/table/table-header-row.svelte';
import TableRow from '../../holocene/table/table-row.svelte';
import Table from '../../holocene/table/table.svelte';
import { translate } from '../../i18n/translate';
import { routeForEventHistory } from '../../utilities/route-for';
import WorkflowStatus from '../workflow-status.svelte';
export let children = [];
$: ({ namespace } = $page.params);
</script>

<Pagination
  items={children}
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
          {child.name}
        </td>
        <td class="hover:text-blue-700 hover:underline">
          <Link
            href={routeForEventHistory({
              namespace,
              workflow: child.id,
              run: child.runId,
            })}
          >
            {child.id}
          </Link>
        </td>
        <td class="hover:text-blue-700 hover:underline">
          <Link
            href={routeForEventHistory({
              namespace,
              workflow: child.id,
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
