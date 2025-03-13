<script>import Badge, {} from '../../holocene/badge.svelte';
import EmptyState from '../../holocene/empty-state.svelte';
import Link from '../../holocene/link.svelte';
import TableHeaderRow from '../../holocene/table/table-header-row.svelte';
import TableRow from '../../holocene/table/table-row.svelte';
import Table from '../../holocene/table/table.svelte';
import { translate } from '../../i18n/translate';
import { relativeTime, timeFormat } from '../../stores/time-format';
import { formatDate } from '../../utilities/format-date';
import { routeForBatchOperation } from '../../utilities/route-for';
export let namespace;
export let operations;
const jobStateToBadgeType = {
    Completed: 'success',
    Running: 'primary',
    Failed: 'danger',
    Unspecified: undefined,
};
</script>

<Table class="w-full table-fixed">
  <caption class="sr-only" slot="caption">
    {translate('batch.list-page-title')}
  </caption>
  <TableHeaderRow slot="headers">
    <th class="w-28">{translate('common.status')}</th>
    <th class="w-auto">{translate('common.job-id')}</th>
    <th class="max-sm:hidden lg:w-56">{translate('common.start-time')}</th>
    <th class="max-sm:hidden lg:w-56">{translate('common.close-time')}</th>
  </TableHeaderRow>
  {#each operations as { state, jobId, startTime, closeTime }}
    <TableRow>
      <td>
        <Badge type={jobStateToBadgeType[state]}>
          {state}
        </Badge>
      </td>
      <td
        ><Link href={routeForBatchOperation({ namespace, jobId })}>{jobId}</Link
        ></td
      >
      <td class="max-sm:hidden"
        >{formatDate(startTime, $timeFormat, {
          relative: $relativeTime,
        })}</td
      >
      <td class="max-sm:hidden"
        >{formatDate(closeTime, $timeFormat, {
          relative: $relativeTime,
        })}</td
      >
    </TableRow>
  {:else}
    <TableRow>
      <td class="max-sm:hidden" colspan="4">
        <EmptyState title={translate('batch.empty-state-title')}></EmptyState>
      </td>
    </TableRow>
  {/each}
</Table>
