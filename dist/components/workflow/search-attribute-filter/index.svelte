<script>var _a;
import SearchAttributeFilter from '../../search-attribute-filter/index.svelte';
import WorkflowAdvancedSearch from '../workflow-advanced-search.svelte';
import Button from '../../../holocene/button.svelte';
import Tooltip from '../../../holocene/tooltip.svelte';
import { translate } from '../../../i18n/translate';
import { workflowFilters } from '../../../stores/filters';
import { searchInputViewOpen } from '../../../stores/filters';
import { refresh } from '../../../stores/workflows';
import { workflowRoutePattern } from '../../../utilities/namespace-url-pattern';
$: workflowsPage = workflowRoutePattern.match((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.pathname);
</script>

<div class="flex w-full items-start gap-1">
  {#if $searchInputViewOpen && workflowsPage}
    <Tooltip text={translate('workflows.close-search-input')} topLeft>
      <Button
        data-testid="manual-search-toggle"
        id="close-search-input"
        variant="ghost"
        class="mt-1"
        leadingIcon="filter"
        size="xs"
        on:click={() => ($searchInputViewOpen = false)}
      />
    </Tooltip>
  {/if}
  <SearchAttributeFilter
    showFilter={!$searchInputViewOpen}
    bind:filters={$workflowFilters}
    refresh={() => {
      $refresh = Date.now();
    }}
  >
    {#if $searchInputViewOpen}
      <WorkflowAdvancedSearch />
    {/if}
  </SearchAttributeFilter>
</div>
