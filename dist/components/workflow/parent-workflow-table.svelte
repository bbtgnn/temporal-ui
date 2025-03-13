<script>import Copyable from '../../holocene/copyable/index.svelte';
import Link from '../../holocene/link.svelte';
import TableHeaderRow from '../../holocene/table/table-header-row.svelte';
import TableRow from '../../holocene/table/table-row.svelte';
import Table from '../../holocene/table/table.svelte';
import { translate } from '../../i18n/translate';
import { routeForEventHistory } from '../../utilities/route-for';
export let parent;
export let parentNamespaceName;
export let namespace;
</script>

<Table class="w-full">
  <caption class="sr-only" slot="caption"
    >{translate('workflows.parent-workflow')}</caption
  >
  <TableHeaderRow slot="headers">
    <th>{translate('workflows.parent-id')}</th>
    <th>{translate('workflows.parent-run-id')}</th>
  </TableHeaderRow>
  <TableRow class="hover:text-blue-700 hover:underline">
    <td>
      <Link
        href={routeForEventHistory({
          namespace: parentNamespaceName ?? namespace,
          workflow: parent.workflowId,
          run: parent.runId,
        })}
      >
        <Copyable
          copyIconTitle={translate('common.copy-icon-title')}
          copySuccessIconTitle={translate('common.copy-success-icon-title')}
          content={parent.workflowId}
          visible
        />
      </Link>
    </td>
    <td>
      <Link
        href={routeForEventHistory({
          namespace: parentNamespaceName ?? namespace,
          workflow: parent.workflowId,
          run: parent.runId,
        })}
      >
        <Copyable
          copyIconTitle={translate('common.copy-icon-title')}
          copySuccessIconTitle={translate('common.copy-success-icon-title')}
          content={parent.runId}
          visible
        />
      </Link>
    </td>
  </TableRow>
</Table>
