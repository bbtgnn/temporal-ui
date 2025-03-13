<script>import Copyable from '../../holocene/copyable/index.svelte';
import Link from '../../holocene/link.svelte';
import TableHeaderRow from '../../holocene/table/table-header-row.svelte';
import TableRow from '../../holocene/table/table-row.svelte';
import Table from '../../holocene/table/table.svelte';
import { translate } from '../../i18n/translate';
import { routeForSchedule } from '../../utilities/route-for';
export let scheduleId;
export let namespace;
</script>

<Table class="w-full">
  <caption class="sr-only" slot="caption"
    >{translate('schedules.schedule')}</caption
  >
  <TableHeaderRow slot="headers">
    <th>{translate('schedules.schedule')}</th>
  </TableHeaderRow>
  <TableRow class="hover:text-blue-700 hover:underline">
    <td>
      <Link
        href={routeForSchedule({
          namespace: namespace,
          scheduleId,
        })}
      >
        <Copyable
          copyIconTitle={translate('common.copy-icon-title')}
          copySuccessIconTitle={translate('common.copy-success-icon-title')}
          content={scheduleId}
          visible
        />
      </Link>
    </td>
  </TableRow>
</Table>
