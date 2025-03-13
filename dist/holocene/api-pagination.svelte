<script>import debounce from 'just-debounce';
import { onMount } from 'svelte';
import Alert from './alert.svelte';
import Input from './input/input.svelte';
import FilterSelect from './select/filter-select.svelte';
import SkeletonTable from './skeleton/table.svelte';
import { createPaginationStore, } from '../stores/api-pagination';
import { options } from '../stores/pagination';
import { isError } from '../utilities/is';
export let onError = undefined;
export let onFetch;
export let onShiftUp = undefined;
export let onShiftDown = undefined;
export let onSpace = undefined;
export let pageSizeOptions = options;
export let defaultPageSize = undefined;
export let total = '';
export let pageSizeSelectLabel;
export let emptyStateMessage;
export let fallbackErrorMessage;
export let itemsKeyname = 'items';
export let previousButtonLabel;
export let nextButtonLabel;
export let filterable = false;
export let filterInputPlaceholder = undefined;
export let filterDebounceInMilliseconds = 1000;
let query = '';
let store = createPaginationStore(pageSizeOptions, defaultPageSize);
let error;
function clearError() {
    if (error)
        error = undefined;
}
$: isEmpty = $store.visibleItems.length === 0 && !$store.loading;
$: pageSizeChange =
    !$store.loading && $store.pageSize !== $store.previousPageSize;
onMount(() => {
    initalDataFetch();
});
$: {
    if (pageSizeChange) {
        store.resetPageSize($store.pageSize);
        initalDataFetch();
    }
}
async function initalDataFetch() {
    const fetchData = await onFetch();
    try {
        const response = await fetchData($store.pageSize, '');
        const { nextPageToken } = response;
        const items = response[itemsKeyname] || [];
        store.nextPageWithItems(nextPageToken, items);
    }
    catch (err) {
        error = err;
        if (onError)
            onError(error);
    }
}
async function fetchIndexData() {
    clearError();
    store.setUpdating();
    if (!$store.hasNextIndexData) {
        try {
            const fetchData = await onFetch();
            const response = await fetchData($store.pageSize, $store.indexData[$store.index].nextToken);
            const { nextPageToken } = response;
            const items = response[itemsKeyname] || [];
            store.nextPageWithItems(nextPageToken, items);
        }
        catch (error) {
            if (isError(error) && onError) {
                onError(error);
            }
        }
    }
    else {
        store.nextPage();
    }
}
async function handleKeydown(event) {
    const shifted = event.shiftKey;
    switch (event.code) {
        case 'ArrowRight':
        case 'KeyL':
            if ($store.hasNext && !$store.updating) {
                fetchIndexData();
            }
            break;
        case 'ArrowLeft':
        case 'KeyH':
            if ($store.hasPrevious && !$store.updating) {
                store.previousPage();
            }
            break;
        case 'ArrowUp':
        case 'KeyK':
            if (shifted && onShiftUp) {
                onShiftUp(event);
                store.reset();
                initalDataFetch();
            }
            else {
                store.previousRow();
            }
            break;
        case 'ArrowDown':
        case 'KeyJ':
            if (shifted && onShiftDown) {
                onShiftDown(event);
                store.reset();
                initalDataFetch();
            }
            else {
                store.nextRow();
            }
            break;
        case 'Space':
            if (onSpace) {
                onSpace(event);
            }
            break;
    }
}
const handleFilter = async () => {
    clearError();
    store.reset();
    store.setUpdating();
    try {
        const fetchItems = await onFetch();
        const response = await fetchItems($store.pageSize, '', query);
        const { nextPageToken } = response;
        const items = response[itemsKeyname] || [];
        store.nextPageWithItems(nextPageToken, items);
    }
    catch (err) {
        error = err;
        if (onError)
            onError(error);
    }
};
const debouncedHandleFilter = debounce(handleFilter, filterDebounceInMilliseconds);
</script>

<svelte:window on:keydown={handleKeydown} />

{#if error && $$slots.error}
  <slot name="error" />
{:else if error}
  <Alert
    intent="error"
    class="mb-10"
    title={error?.message ?? fallbackErrorMessage}
  />
{/if}

<slot name="header" visibleItems={$store.visibleItems} />
<div class="relative mb-8 flex flex-col gap-4">
  <div
    class="flex flex-row flex-wrap items-center gap-4 {$$slots[
      'action-top-left'
    ]
      ? 'justify-between'
      : 'justify-end'}"
  >
    <slot name="action-top-left" visibleItems={$store.visibleItems} />
    {#if filterable && filterInputPlaceholder}
      <Input
        icon="search"
        id="api-pagination-search-input"
        class="grow"
        bind:value={query}
        label={filterInputPlaceholder}
        labelHidden
        placeholder={filterInputPlaceholder}
        on:input={debouncedHandleFilter}
        on:clear={handleFilter}
        clearable
      />
    {/if}
    <nav
      class="flex flex-row flex-wrap justify-center gap-4"
      aria-label="{$$restProps['aria-label']} 1"
    >
      <slot name="action-top-center" />
      {#if $store.visibleItems.length}
        {#if pageSizeOptions.length}
          <FilterSelect
            label={pageSizeSelectLabel}
            parameter={$store.key}
            value={String($store.pageSize)}
            options={pageSizeOptions}
          />
        {/if}
        <div class="flex items-center justify-center gap-3">
          <button
            class="caret"
            disabled={!$store.hasPrevious}
            on:click={store.previousPage}
            aria-label={previousButtonLabel}
          >
            <span class="arrow arrow-left" />
          </button>
          <div class="flex gap-1">
            <p>
              {$store.indexStart}–{$store.indexEnd}
            </p>
            {#if total}
              <p>
                of {total}
              </p>
            {/if}
          </div>
          <button
            class="caret"
            disabled={!$store.hasNext}
            on:click={fetchIndexData}
            aria-label={nextButtonLabel}
          >
            <span class="arrow arrow-right" />
          </button>
        </div>
      {/if}
      <slot name="action-top-right" />
    </nav>
  </div>
  {#if $store.loading}
    {#if $$slots.loading}
      <slot name="loading" />
    {:else}
      <SkeletonTable rows={15} />
    {/if}
  {:else if isEmpty}
    <slot name="empty" {query}>{emptyStateMessage}</slot>
  {:else}
    <slot
      updating={$store.updating}
      visibleItems={$store.visibleItems}
      activeIndex={$store.activeIndex}
      setActiveIndex={store.setActiveIndex}
    />
  {/if}
  <nav
    class="flex {$$slots['action-bottom-left']
      ? 'justify-between'
      : 'justify-end'}"
    aria-label="{$$restProps['aria-label']} 2"
  >
    <slot name="action-bottom-left" />
    <div class="flex gap-4">
      {#if $store.visibleItems.length}
        {#if pageSizeOptions.length}
          <FilterSelect
            label={pageSizeSelectLabel}
            parameter={$store.key}
            value={String($store.pageSize)}
            options={pageSizeOptions}
          />
        {/if}
        <div class="flex items-center justify-center gap-3">
          <button
            class="caret"
            disabled={!$store.hasPrevious}
            on:click={store.previousPage}
            aria-label={previousButtonLabel}
          >
            <span class="arrow arrow-left" />
          </button>
          <div class="flex gap-1">
            <p>
              {$store.indexStart}–{$store.indexEnd}
            </p>
            {#if total}
              <p>
                of {total}
              </p>
            {/if}
          </div>
          <button
            class="caret"
            disabled={!$store.hasNext}
            on:click={fetchIndexData}
            aria-label={nextButtonLabel}
          >
            <span class="arrow arrow-right" />
          </button>
        </div>
      {/if}
      <slot name="action-bottom-right" />
    </div>
  </nav>
</div>

<style>
  .arrow {

    position: absolute;

    left: 0px;

    top: 0px;

    height: 0px;

    width: 0px;

    border-style: solid;
    border-width: 6px 12px 6px 0;
}

  .arrow-left {
    border-width: 6px 12px 6px 0;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: rgb(var(--color-border-primary));
    border-top-color: transparent;
  }

  .arrow-right {
    border-width: 6px 0 6px 12px;
    border-bottom-color: transparent;
    border-left-color: rgb(var(--color-border-primary));
    border-right-color: transparent;
    border-top-color: transparent;
  }

  .caret {

    position: relative;

    width: 12px;
    height: 12px;
}

  .caret:disabled {

    cursor: not-allowed;

    opacity: 0.5;
}</style>
