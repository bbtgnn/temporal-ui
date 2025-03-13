<script>import Copyable from '../../holocene/copyable/index.svelte';
import Link from '../../holocene/link.svelte';
import TableHeaderRow from '../../holocene/table/table-header-row.svelte';
import TableRow from '../../holocene/table/table-row.svelte';
import Table from '../../holocene/table/table.svelte';
import { translate } from '../../i18n/translate';
import { routeForEventHistory } from '../../utilities/route-for';
export let workflow;
export let namespace;
export let first;
export let next;
export let previous;
</script>

<Table class="w-full">
  <caption class="sr-only" slot="caption"
    >{translate('workflows.relationships')}</caption
  >
  <TableHeaderRow slot="headers">
    <th>{translate('workflows.first-execution')}</th>
    <th>{translate('workflows.previous-execution')}</th>
    <th>{translate('workflows.next-execution')}</th>
  </TableHeaderRow>
  <TableRow>
    <td class="w-1/3">
      {#if first}
        <Link
          href={routeForEventHistory({
            namespace,
            workflow: workflow,
            run: first,
          })}
        >
          <Copyable
            copyIconTitle={translate('common.copy-icon-title')}
            copySuccessIconTitle={translate('common.copy-success-icon-title')}
            content={first}
            visible
          />
        </Link>
      {/if}
    </td>
    <td class="w-1/3">
      {#if previous}
        <Link
          href={routeForEventHistory({
            namespace,
            workflow: workflow,
            run: previous,
          })}
        >
          <Copyable
            copyIconTitle={translate('common.copy-icon-title')}
            copySuccessIconTitle={translate('common.copy-success-icon-title')}
            content={previous}
            visible
          />
        </Link>
      {/if}
    </td>
    <td class="w-1/3">
      {#if next}
        <Link
          href={routeForEventHistory({
            namespace,
            workflow: workflow,
            run: next,
          })}
        >
          <Copyable
            copyIconTitle={translate('common.copy-icon-title')}
            copySuccessIconTitle={translate('common.copy-success-icon-title')}
            content={next}
            visible
          />
        </Link>
      {/if}
    </td>
  </TableRow>
</Table>
