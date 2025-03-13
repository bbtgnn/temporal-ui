<script context="module">export {};
</script>

<script>import { onMount } from 'svelte';
import Alert from '../../alert.svelte';
import EmptyState from '../../empty-state.svelte';
import IconButton from '../../icon-button.svelte';
import Loading from '../../loading.svelte';
import FilterSelect from '../../select/filter-select.svelte';
import { createPaginationStore, } from '../../../stores/api-pagination';
import { options } from '../../../stores/pagination';
import { isError } from '../../../utilities/is';
import PaginatedTable from './index.svelte';
export let id = null;
export let maxHeight = '';
export let onError = undefined;
export let onFetch;
export let onShiftUp = undefined;
export let onShiftDown = undefined;
export let onSpace = undefined;
export let total = '';
export let pageSizeSelectLabel;
export let emptyStateTitle = '';
export let emptyStateMessage = '';
export let errorTitle = '';
export let errorMessage = '';
export let itemsKeyname = 'items';
export let previousButtonLabel;
export let nextButtonLabel;
export let pageSizeOptions = options;
let store = createPaginationStore(pageSizeOptions, pageSizeOptions[0]);
let error;
function clearError() {
    if (error)
        error = undefined;
}
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
</script>

<svelte:window on:keydown={handleKeydown} />

<slot name="header" visibleItems={$store.visibleItems} />

<PaginatedTable
  updating={$store.updating}
  visibleItems={$store.visibleItems}
  {maxHeight}
  {id}
>
  <slot name="caption" slot="caption" />
  <slot name="headers" slot="headers" visibleItems={$store.visibleItems} />

  <slot visibleItems={$store.visibleItems} />

  <svelte:fragment slot="empty">
    {#if $store.loading}
      <slot name="loading">
        <Loading />
      </slot>
    {:else if error}
      <slot name="error">
        <EmptyState title={errorTitle}>
          <Alert intent="error" title={error?.message ?? errorMessage} />
        </EmptyState>
      </slot>
    {:else}
      <slot name="empty">
        <EmptyState title={emptyStateTitle} content={emptyStateMessage} />
      </slot>
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="actions-start">
    <FilterSelect
      label={pageSizeSelectLabel}
      parameter={$store.key}
      value={String($store.pageSize)}
      options={pageSizeOptions}
    />
  </svelte:fragment>

  <nav
    class="flex shrink-0 items-center gap-2"
    aria-label={$$restProps['aria-label']}
    slot="actions-end"
  >
    <slot name="actions-end-additional" />
    <IconButton
      label={previousButtonLabel}
      disabled={!$store.hasPrevious}
      on:click={store.previousPage}
      icon="arrow-left"
    />
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
    <IconButton
      label={nextButtonLabel}
      disabled={!$store.hasNext}
      on:click={fetchIndexData}
      icon="arrow-right"
    />
  </nav>
</PaginatedTable>
