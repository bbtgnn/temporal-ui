<script>import { page } from '$app/stores';
import FilterOrCopyButtons from '../../../holocene/filter-or-copy-buttons.svelte';
import Link from '../../../holocene/link.svelte';
import { translate } from '../../../i18n/translate';
import { searchAttributeToWorkflowKey, } from '../../../models/workflow-filters';
import { workflowFilters } from '../../../stores/filters';
import { SEARCH_ATTRIBUTE_TYPE, } from '../../../types/workflows';
import { updateQueryParamsFromFilter } from '../../../utilities/query/to-list-workflow-filters';
import { routeForEventHistory } from '../../../utilities/route-for';
export let attribute;
export let workflow;
export let filterOrCopyButtonsVisible = false;
$: value = workflow[searchAttributeToWorkflowKey[attribute]];
$: namespace = $page.params.namespace;
$: href = routeForEventHistory({
    namespace,
    workflow: workflow.id,
    run: workflow.runId,
});
const onRowFilterClick = () => {
    const filter = $workflowFilters.find((f) => f.attribute === attribute);
    const getOtherFilters = () => $workflowFilters.filter((f) => f.attribute !== attribute);
    if (!filter || filter.value !== value) {
        const newFilter = {
            attribute,
            type: SEARCH_ATTRIBUTE_TYPE.KEYWORD,
            value,
            conditional: '=',
            operator: '',
            parenthesis: '',
        };
        $workflowFilters = [...getOtherFilters(), newFilter];
    }
    else {
        $workflowFilters = [...getOtherFilters()];
    }
    updateQueryParamsFromFilter($page.url, $workflowFilters);
};
</script>

<Link {href}>{value}</Link>
<FilterOrCopyButtons
  copyIconTitle={translate('common.copy-icon-title')}
  copySuccessIconTitle={translate('common.copy-success-icon-title')}
  filterIconTitle={translate('common.filter-workflows')}
  show={filterOrCopyButtonsVisible}
  content={value}
  onFilter={onRowFilterClick}
  filtered={$workflowFilters.some(
    (filter) => filter.attribute === attribute && filter.value === value,
  )}
/>
