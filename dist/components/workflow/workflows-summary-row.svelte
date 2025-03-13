<script>import { page } from '$app/stores';
import WorkflowStatus from '../workflow-status.svelte';
import FilterOrCopyButtons from '../../holocene/filter-or-copy-buttons.svelte';
import Link from '../../holocene/link.svelte';
import TableRow from '../../holocene/table/table-row.svelte';
import { translate } from '../../i18n/translate';
import { relativeTime, timeFormat } from '../../stores/time-format';
import { formatDate } from '../../utilities/format-date';
import { getMilliseconds } from '../../utilities/format-time';
import { toListWorkflowQuery } from '../../utilities/query/list-workflow-query';
import { toListWorkflowParameters } from '../../utilities/query/to-list-workflow-parameters';
import { routeForEventHistory } from '../../utilities/route-for';
import { updateQueryParameters } from '../../utilities/update-query-parameters';
export let namespace;
export let workflow;
$: href = routeForEventHistory({
    namespace,
    workflow: workflow.id,
    run: workflow.runId,
});
let showFilterCopy = false;
const onTypeClick = (type) => {
    const defaultQuery = toListWorkflowQuery({ timeRange: 'All' });
    const query = $page.url.searchParams.get('query');
    const parameters = toListWorkflowParameters(query !== null && query !== void 0 ? query : defaultQuery);
    const workflowType = (parameters === null || parameters === void 0 ? void 0 : parameters.workflowType) === type ? '' : type;
    const value = toListWorkflowQuery({
        ...parameters,
        workflowType,
    });
    updateQueryParameters({
        url: $page.url,
        parameter: 'query',
        value,
        allowEmpty: true,
    });
};
</script>

<TableRow class="hover:bg-interactive-table-hover">
  <td>
    <WorkflowStatus
      status={workflow.status}
      delay={getMilliseconds(workflow.startTime)}
    />
  </td>
  <td
    class="relative break-words pr-4"
    on:mouseover={() => (showFilterCopy = true)}
    on:focus={() => (showFilterCopy = true)}
    on:mouseleave={() => (showFilterCopy = false)}
    on:blur={() => (showFilterCopy = false)}
  >
    <Link {href}>
      {workflow.id}
    </Link>
    <FilterOrCopyButtons
      copyIconTitle={translate('common.copy-icon-title')}
      copySuccessIconTitle={translate('common.copy-success-icon-title')}
      filterIconTitle={translate('common.filter-workflows')}
      show={showFilterCopy}
      content={workflow.id}
      filterable={false}
    />
    <p class="inline-time-cell">
      {formatDate(workflow.startTime, $timeFormat, { relative: $relativeTime })}
    </p>
  </td>
  <td
    class="relative truncate"
    on:mouseover={() => (showFilterCopy = true)}
    on:focus={() => (showFilterCopy = true)}
    on:mouseleave={() => (showFilterCopy = false)}
    on:blur={() => (showFilterCopy = false)}
  >
    <h3 class="md:hidden">{translate('workflows.workflow-name')}:</h3>
    <button
      class="table-link"
      on:click|preventDefault|stopPropagation={() => onTypeClick(workflow.name)}
      aria-label={translate('workflows.filter-by', {
        workflowName: workflow.name,
      })}
    >
      {workflow.name}
    </button>
    <FilterOrCopyButtons
      copyIconTitle={translate('common.copy-icon-title')}
      copySuccessIconTitle={translate('common.copy-success-icon-title')}
      filterIconTitle={translate('common.filter-workflows')}
      show={showFilterCopy}
      content={workflow.name}
      onFilter={() => onTypeClick(workflow.name)}
      filtered={$page.url?.searchParams?.get('query')?.includes(workflow.name)}
    />
    <p class="inline-time-cell">
      {formatDate(workflow.endTime, $timeFormat, { relative: $relativeTime })}
    </p>
  </td>
  <td class="time-cell">
    <p>
      {formatDate(workflow.startTime, $timeFormat, { relative: $relativeTime })}
    </p>
  </td>
  <td class="time-cell">
    <p>
      {formatDate(workflow.endTime, $timeFormat, { relative: $relativeTime })}
    </p>
  </td>
</TableRow>

<style>
  @media not all and (min-width: 1280px) {

    .time-cell {

        display: none
    }
}

  .inline-time-cell {

    display: none
}

  @media (min-width: 768px) {

    .inline-time-cell {

        display: block
    }
}

  @media (min-width: 1280px) {

    .inline-time-cell {

        display: none
    }
}</style>
