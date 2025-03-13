<script>import EmptyState from '../holocene/empty-state.svelte';
import TableHeaderRow from '../holocene/table/table-header-row.svelte';
import TableRow from '../holocene/table/table-row.svelte';
import Table from '../holocene/table/table.svelte';
import { translate } from '../i18n/translate';
import {} from '../services/pollers-service';
import { timeFormat } from '../stores/time-format';
import { formatDate } from '../utilities/format-date';
export let rules;
let showAll = false;
$: ({ assignmentRules = [], compatibleRedirectRules = [] } = rules);
$: catchAllRule = assignmentRules.find((rule) => getPercentage(rule) === 100);
$: catchAllIndex = assignmentRules.indexOf(catchAllRule);
$: activeRules = assignmentRules.filter((_, i) => i <= catchAllIndex);
$: inactiveRules = assignmentRules.filter((_, i) => i > catchAllIndex);
$: visibleRules = showAll ? [...activeRules, ...inactiveRules] : activeRules;
const getPercentage = (rule) => {
    var _a, _b, _c;
    if (!((_a = rule.rule) === null || _a === void 0 ? void 0 : _a.percentageRamp))
        return 100;
    if (!((_c = (_b = rule.rule) === null || _b === void 0 ? void 0 : _b.percentageRamp) === null || _c === void 0 ? void 0 : _c.rampPercentage))
        return 0;
    return rule.rule.percentageRamp.rampPercentage;
};
</script>

<h2 data-testid="worker-rules">
  {translate('workers.assignment-rules')}
</h2>
<Table class="mb-6 w-full table-fixed">
  <TableHeaderRow slot="headers">
    <th class="w-20">Index</th>
    <th class="grow">Target Build ID</th>
    <th class="w-20">Ramp</th>
    <th class="text-right">Create Time</th>
  </TableHeaderRow>
  {#each visibleRules as rule, index (index)}
    <TableRow data-testid="version-row">
      <td class="text-left" data-testid="index">{index}</td>
      <td class="break-all text-left" data-testid="target-build-id"
        >{rule.rule?.targetBuildId}</td
      >
      <td class="text-right" data-testid="target-ramp"
        >{getPercentage(rule).toFixed(0)}%</td
      >
      <td
        class="justfiy-between flex w-full items-center text-right"
        data-testid="target-create-time"
      >
        <p>{formatDate(rule.createTime, $timeFormat)}</p>
      </td>
    </TableRow>
  {:else}
    <tr class="w-full">
      <td colspan="4">
        <EmptyState title={translate('workers.no-assignment-rules-found')} />
      </td>
    </tr>
  {/each}
  {#if !showAll && inactiveRules?.length}
    <TableRow
      data-testid="view-all"
      class="surface-subtle cursor-pointer"
      on:click={() => (showAll = !showAll)}
    >
      <td></td>
      <td class="break-all text-left text-blue-700 underline"
        >{translate('workers.show-inactive-assignment-rules')}</td
      >
      <td />
      <td />
    </TableRow>
  {/if}
</Table>

<h2 data-testid="worker-rules">
  {translate('workers.redirect-rules')}
</h2>
<Table class="mb-6 w-full table-fixed">
  <TableHeaderRow slot="headers">
    <th class="w-1/3">Source Build ID</th>
    <th class="w-1/3">Target Build ID</th>
    <th class="w-1/3">Create Time</th>
  </TableHeaderRow>
  {#each compatibleRedirectRules as rule, index (index)}
    <TableRow data-testid="version-row">
      <td class="text-left" data-testid="target-source"
        >{rule.rule.sourceBuildId}</td
      >
      <td class="text-left" data-testid="target-source"
        >{rule.rule.targetBuildId}</td
      >
      <td class="text-left" data-testid="target-source"
        >{formatDate(rule.createTime, $timeFormat)}</td
      >
    </TableRow>
  {:else}
    <tr class="w-full">
      <td colspan="3">
        <EmptyState title={translate('workers.no-redirect-rules-found')} />
      </td>
    </tr>
  {/each}
</Table>
