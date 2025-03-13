<script>import { fade } from 'svelte/transition';
import { getContext } from 'svelte';
import { page } from '$app/stores';
import WorkflowStatus from '../workflow-status.svelte';
import Button from '../../holocene/button.svelte';
import Chip from '../../holocene/chip.svelte';
import { translate } from '../../i18n/translate';
import { isWorkflowStatusType } from '../../models/workflow-status';
import { relativeTime, timeFormat, } from '../../stores/time-format';
import { formatDate } from '../../utilities/format-date';
import { isNullConditional, isStartsWith } from '../../utilities/is';
import { isDateTimeFilter, isTextFilter, } from '../../utilities/query/search-attribute-filter';
import { emptyFilter } from '../../utilities/query/to-list-workflow-filters';
import { updateQueryParamsFromFilter } from '../../utilities/query/to-list-workflow-filters';
import { FILTER_CONTEXT } from './index.svelte';
export let filters;
const { filter, activeQueryIndex } = getContext(FILTER_CONTEXT);
const removeQuery = (index) => {
    filters.splice(index, 1);
    filters = filters;
    updateQueryParamsFromFilter($page.url, filters);
    if (index === filters.length) {
        const previousQuery = filters[filters.length - 1];
        if (previousQuery) {
            previousQuery.operator = '';
        }
    }
    if (index === $activeQueryIndex) {
        $activeQueryIndex = null;
        $filter = emptyFilter();
    }
    else if (index < $activeQueryIndex) {
        $activeQueryIndex -= 1;
    }
};
let totalFiltersInView = 5;
$: visibleFilters = filters.slice(0, totalFiltersInView);
$: hasMoreFilters = totalFiltersInView < filters.length;
const viewMoreFilters = () => {
    if (hasMoreFilters) {
        totalFiltersInView += 5;
    }
};
const getDateTimeConditonal = (conditional) => {
    if (['<', '<='].includes(conditional))
        return translate('common.before').toLowerCase();
    if (['>', '>='].includes(conditional))
        return translate('common.after').toLowerCase();
    return conditional;
};
const formatDateTimeRange = (value, format, relative) => {
    const [conditon, start, operator, end] = value.split(' ');
    return `${conditon.toLowerCase()} ${formatDate(start, format, {
        relative,
        abbrFormat: true,
    })} ${operator.toLowerCase()} ${formatDate(end, format, {
        relative,
        abbrFormat: true,
    })}`;
};
</script>

<div class="flex flex-wrap gap-2" class:pt-2={visibleFilters.length}>
  {#each visibleFilters as workflowFilter, i (`${workflowFilter.attribute}-${i}`)}
    {@const { attribute, value, conditional, customDate } = workflowFilter}
    {#if attribute}
      <div in:fade data-testid="{workflowFilter.attribute}-{i}">
        <Chip
          removeButtonLabel={translate('workflows.remove-filter-label', {
            attribute,
          })}
          on:remove={() => removeQuery(i)}
          on:click={() => {
            $activeQueryIndex = i;
            $filter = { ...workflowFilter };
          }}
          intent="default"
          button
        >
          {#if attribute === 'ExecutionStatus' && isWorkflowStatusType(value)}
            <span class="flex">
              {attribute}
              {conditional}
              <span class="-py-1 ml-1">
                <WorkflowStatus status={value} />
              </span>
            </span>
          {:else}
            <span class="max-w-xs truncate md:max-w-lg xl:max-w-2xl">
              {attribute}
              {#if isNullConditional(conditional)}
                {conditional}
                {value}
              {:else if isDateTimeFilter(workflowFilter)}
                {#if customDate}
                  {formatDateTimeRange(value, $timeFormat, $relativeTime)}
                {:else}
                  {getDateTimeConditonal(conditional)}
                  {formatDate(value, $timeFormat, {
                    relative: $relativeTime,
                    abbrFormat: true,
                  })}
                {/if}
              {:else}
                {isStartsWith(conditional)
                  ? translate('common.starts-with').toLocaleLowerCase()
                  : conditional}
                {isTextFilter(workflowFilter) ? `"${value}"` : value}
              {/if}
            </span>
          {/if}
        </Chip>
      </div>
    {/if}
  {/each}
  {#if hasMoreFilters}
    <Button variant="secondary" size="xs" on:click={viewMoreFilters}
      >{translate('common.view-more')}</Button
    >
  {/if}
</div>
