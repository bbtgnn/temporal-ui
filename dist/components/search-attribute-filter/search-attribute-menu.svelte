<script>var _a;
import { getContext } from 'svelte';
import Icon from '../../holocene/icon/icon.svelte';
import Input from '../../holocene/input/input.svelte';
import { Menu, MenuButton, MenuContainer, MenuItem, } from '../../holocene/menu';
import { translate } from '../../i18n/translate';
import { hideChildWorkflows, searchInputViewOpen } from '../../stores/filters';
import { SEARCH_ATTRIBUTE_TYPE, } from '../../types/workflows';
import { workflowRoutePattern } from '../../utilities/namespace-url-pattern';
import { getFocusedElementId } from '../../utilities/query/search-attribute-filter';
import { emptyFilter } from '../../utilities/query/to-list-workflow-filters';
import IsTemporalServerVersionGuard from '../is-temporal-server-version-guard.svelte';
import { FILTER_CONTEXT } from './index.svelte';
export let filters;
export let options;
const { filter, activeQueryIndex, focusedElementId } = getContext(FILTER_CONTEXT);
function isOptionDisabled(value, filters) {
    return filters.some((filter) => ['=', '!=', 'is', 'is not'].includes(filter.conditional) &&
        filter.attribute === value);
}
function handleNewQuery(value, type) {
    searchAttributeValue = '';
    const conditional = type === SEARCH_ATTRIBUTE_TYPE.KEYWORDLIST ? 'in' : '=';
    filter.set({ ...emptyFilter(), attribute: value, conditional, type });
    $focusedElementId = getFocusedElementId($filter);
}
let searchAttributeValue = '';
$: filteredOptions = !searchAttributeValue
    ? options
    : options.filter((option) => option.value.toLowerCase().includes(searchAttributeValue.toLowerCase()));
$: workflowsPage = workflowRoutePattern.match((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.pathname);
</script>

<MenuContainer>
  <MenuButton
    id="search-attribute-filter-button"
    controls="search-attribute-menu"
    disabled={$activeQueryIndex !== null}
    count={$filter.attribute ? 0 : filters.length}
    on:click={() => (searchAttributeValue = '')}
    class="text-nowrap"
  >
    <svelte:fragment slot="leading">
      {#if !$filter.attribute}
        <Icon name="filter" />
      {/if}
    </svelte:fragment>
    {$filter.attribute || translate('workflows.filter')}
  </MenuButton>
  <Menu id="search-attribute-menu" keepOpen>
    <MenuItem
      class="p-0"
      hoverable={false}
      on:click={() => {
        document.getElementById('filter-search')?.focus();
      }}
    >
      <Input
        label={translate('common.search')}
        labelHidden
        id="filter-search"
        noBorder
        bind:value={searchAttributeValue}
        icon="search"
        placeholder={translate('common.search')}
        class="w-full"
      />
    </MenuItem>
    {#if workflowsPage}
      <MenuItem
        class="min-w-56"
        data-testid="manual-search-toggle"
        on:click={() => ($searchInputViewOpen = !$searchInputViewOpen)}
        description={translate('workflows.view-search-description')}
        >{translate('workflows.view-search-input')}</MenuItem
      >
      <IsTemporalServerVersionGuard minimumVersion="1.23.0">
        <MenuItem
          on:click={() => ($hideChildWorkflows = !$hideChildWorkflows)}
          description={$hideChildWorkflows
            ? 'Child Workflows hidden by default when no filter applied'
            : ''}
        >
          <div class="flex items-center gap-1">
            {#if $hideChildWorkflows}
              <Icon name="eye-hide" />{translate('workflows.hide-children')}
            {:else}
              <Icon name="eye-show" />{translate('workflows.show-children')}
            {/if}
          </div>
        </MenuItem>
      </IsTemporalServerVersionGuard>
    {/if}
    <hr class="border-subtle" />

    {#each filteredOptions as { value, label, type }}
      {@const disabled = isOptionDisabled(value, filters)}
      <MenuItem
        on:click={() => {
          handleNewQuery(value, type);
        }}
        {disabled}
      >
        {label}
      </MenuItem>
    {:else}
      <MenuItem class="whitespace-nowrap" disabled
        >{translate('common.no-results')}</MenuItem
      >
    {/each}
  </Menu>
</MenuContainer>
