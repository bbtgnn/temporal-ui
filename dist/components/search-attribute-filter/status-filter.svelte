<script>import { writable } from 'svelte/store';
import { getContext } from 'svelte';
import { page } from '$app/stores';
import WorkflowStatus from '../workflow-status.svelte';
import Checkbox from '../../holocene/checkbox.svelte';
import { Menu, MenuButton, MenuContainer, MenuDivider, MenuItem, } from '../../holocene/menu';
import Translate from '../../i18n/translate.svelte';
import { workflowStatusFilters } from '../../models/workflow-status';
import { isStatusFilter } from '../../utilities/query/search-attribute-filter';
import { updateQueryParamsFromFilter } from '../../utilities/query/to-list-workflow-filters';
import { FILTER_CONTEXT } from './index.svelte';
export let filters;
const { filter, resetFilter } = getContext(FILTER_CONTEXT);
const open = writable(true);
$: _filters = [...filters];
$: statusFilters = _filters.filter((filter) => isStatusFilter(filter));
function apply() {
    filters = _filters;
    updateQueryParamsFromFilter($page.url, filters);
}
function mapStatusToFilter(value) {
    return {
        ...$filter,
        value,
    };
}
function mapStatusesToFilters(_filters) {
    if (_filters.length === 1) {
        return [mapStatusToFilter(_filters[0].value)];
    }
    else {
        return _filters.map((filter, i) => {
            const operator = i === _filters.length - 1 ? '' : 'OR';
            return {
                ...filter,
                operator,
            };
        });
    }
}
const onStatusClick = (status) => {
    if (status === 'All') {
        _filters = filters.filter((f) => f.attribute !== 'ExecutionStatus');
    }
    else if (statusFilters.find((s) => s.value === status)) {
        const nonStatusFilters = filters.filter((f) => !isStatusFilter(f));
        _filters = [
            ...nonStatusFilters,
            ...mapStatusesToFilters(statusFilters.filter((s) => s.value !== status)),
        ];
    }
    else {
        if (!statusFilters.length) {
            _filters = [..._filters, mapStatusToFilter(status)];
        }
        else {
            const nonStatusFilters = _filters.filter((f) => !isStatusFilter(f));
            _filters = [
                ...nonStatusFilters,
                ...mapStatusesToFilters([
                    ...statusFilters,
                    mapStatusToFilter(status),
                ]),
            ];
        }
    }
    apply();
};
</script>

<MenuContainer {open} on:close={resetFilter}>
  <MenuButton
    controls="status-menu"
    on:click={() => {
      if ($open) resetFilter();
    }}
  >
    {$filter.attribute}
  </MenuButton>
  <Menu id="status-menu" keepOpen>
    {#each workflowStatusFilters as status (status)}
      {@const checked =
        statusFilters.some((filter) => filter.value === status) ||
        (!statusFilters.length && status === 'All')}
      <MenuItem
        data-testid={status}
        on:click={() => {
          onStatusClick(status);
        }}
      >
        <Checkbox
          on:click={() => onStatusClick(status)}
          slot="leading"
          {checked}
          label={status}
          labelHidden
        />
        {#if status === 'All'}
          <Translate key="workflows.all-statuses" />
        {:else}
          <WorkflowStatus {status} />
        {/if}
      </MenuItem>
    {/each}
    <MenuDivider />
  </Menu>
</MenuContainer>
