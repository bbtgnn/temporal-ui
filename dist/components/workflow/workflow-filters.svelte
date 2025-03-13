<script>import debounce from 'just-debounce';
import { createEventDispatcher } from 'svelte';
import { page } from '$app/stores';
import Search from '../search.svelte';
import Input from '../../holocene/input/input.svelte';
import Link from '../../holocene/link.svelte';
import Option from '../../holocene/select/simple-option.svelte';
import Select from '../../holocene/select/simple-select.svelte';
import { translate } from '../../i18n/translate';
import { timeFormat } from '../../stores/time-format';
import { toListWorkflowQuery } from '../../utilities/query/list-workflow-query';
import { toListWorkflowParameters } from '../../utilities/query/to-list-workflow-parameters';
import { durations } from '../../utilities/to-duration';
import { updateQueryParameters } from '../../utilities/update-query-parameters';
const dispatch = createEventDispatcher();
export let searchType;
const defaultQuery = toListWorkflowQuery({ timeRange: 'All' });
$: query = $page.url.searchParams.get('query');
$: parameters = toListWorkflowParameters(query !== null && query !== void 0 ? query : defaultQuery);
const statuses = {
    All: null,
    Running: 'Running',
    'Timed Out': 'TimedOut',
    Completed: 'Completed',
    Failed: 'Failed',
    'Continued as New': 'ContinuedAsNew',
    Canceled: 'Canceled',
    Terminated: 'Terminated',
};
const updateSearchType = (newSearchType) => () => {
    searchType = newSearchType;
};
const updateQuery = (event) => {
    dispatch('search');
    const data = new FormData(event.target);
    query = String(data.get('query'));
    parameters = toListWorkflowParameters(query);
    updateQueryParameters({
        url: $page.url,
        parameter: 'query',
        value: query,
    });
};
const handleParameterChange = debounce(() => {
    dispatch('search');
    query = toListWorkflowQuery(parameters);
    updateQueryParameters({
        url: $page.url,
        parameter: 'query',
        value: query,
        allowEmpty: true,
    });
}, 300);
</script>

<div class="flex flex-col">
  <p class="pb-2 text-right text-xs">
    {#if searchType === 'advanced'}
      <Link
        href="{$page.url.pathname}?search=basic"
        on:click={updateSearchType('basic')}
      >
        {translate('workflows.basic-search')}
      </Link>
    {:else}
      <Link
        href="{$page.url.pathname}?search=advanced"
        on:click={updateSearchType('advanced')}
      >
        {translate('workflows.advanced-search')}
      </Link>
    {/if}
  </p>

  {#if searchType === 'advanced'}
    <Search
      icon
      id="advanced-search"
      placeholder={translate('common.query')}
      value={query}
      on:submit={updateQuery}
    />
  {:else}
    <div
      role="search"
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5"
    >
      <Input
        icon="search"
        type="search"
        id="workflow-id-filter"
        placeholder={translate('common.workflow-id')}
        label={translate('common.workflow-id')}
        labelHidden
        bind:value={parameters.workflowId}
        on:input={handleParameterChange}
      />
      <Input
        icon="search"
        type="search"
        id="workflow-type-filter"
        placeholder={translate('common.workflow-type')}
        label={translate('common.workflow-type')}
        labelHidden
        bind:value={parameters.workflowType}
        on:input={handleParameterChange}
      />
      <Select
        id="time-range-filter"
        label={translate('common.time-range')}
        bind:value={parameters.timeRange}
        on:change={handleParameterChange}
      >
        <Option value={null}>All</Option>
        {#if parameters.timeRange && !durations.includes(parameters.timeRange)}
          <Option value={parameters.timeRange}>{parameters.timeRange}</Option>
        {/if}
        {#each durations as value}
          <Option {value}>{value}</Option>
        {/each}
      </Select>
      <Select
        id="execution-status-filter"
        label={translate('common.status')}
        bind:value={parameters.executionStatus}
        on:change={handleParameterChange}
      >
        {#each Object.entries(statuses) as [label, value] (label)}
          <Option {value}>{label}</Option>
        {/each}
      </Select>
      <Select
        id="filter-by-relative-time"
        bind:value={$timeFormat}
        label={translate('common.time-format')}
      >
        <Option value={'relative'}>{translate('common.relative')}</Option>
        <Option value={'UTC'}>{translate('common.utc')}</Option>
        <Option value={'local'}>{translate('common.local')}</Option>
      </Select>
    </div>
  {/if}
</div>
