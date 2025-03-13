<script>var _a;
import { onMount } from 'svelte';
import { page } from '$app/stores';
import FilterSelect from './select/filter-select.svelte';
import Skeleton from './skeleton/index.svelte';
import { defaultItemsPerPage, MAX_PAGE_SIZE, options, pagination, perPageFromSearchParameter, perPageKey, } from '../stores/pagination';
import { getFloatStyle } from '../utilities/get-float-style';
import { updateQueryParameters } from '../utilities/update-query-parameters';
export let items;
export let floatId = undefined;
export let startingIndex = 0;
export let currentPageKey = 'page';
export let itemsPerPage = null;
export let updating = false;
export let pageSizeSelectLabel;
export let previousButtonLabel;
export let nextButtonLabel;
$: perPage =
    itemsPerPage !== null
        ? String(itemsPerPage)
        : String(perPageFromSearchParameter($page.url.searchParams.get(perPageKey))).toString();
$: {
    if (parseInt(perPage, 10) > parseInt(MAX_PAGE_SIZE, 10)) {
        updateQueryParameters({
            parameter: perPageKey,
            value: MAX_PAGE_SIZE,
            url: $page.url,
        });
    }
    else if (!options.includes(perPage)) {
        updateQueryParameters({
            parameter: perPageKey,
            value: defaultItemsPerPage,
            url: $page.url,
        });
    }
}
$: store = pagination(items, perPage, startingIndex);
$: currentPage =
    (_a = $page.url.searchParams.get(currentPageKey)) !== null && _a !== void 0 ? _a : $store.currentPage;
$: store.jumpToPage(currentPage);
let screenWidth;
let width;
let height;
onMount(() => {
    updateWidth();
    if (Number(startingIndex) > 0) {
        handlePageChange();
    }
});
const handlePageChange = () => {
    updateQueryParameters({
        parameter: currentPageKey,
        value: $store.currentPage,
        url: $page.url,
    });
};
const updateWidth = () => {
    var _a;
    if (floatId) {
        width = (_a = document.getElementById(floatId)) === null || _a === void 0 ? void 0 : _a.clientWidth;
    }
};
$: floatStyle = getFloatStyle({ width, height, screenWidth });
async function handleKeydown(event) {
    switch (event.code) {
        case 'ArrowRight':
        case 'KeyL':
            if ($store.hasNext && !event.metaKey) {
                store.next();
                handlePageChange();
            }
            break;
        case 'ArrowLeft':
        case 'KeyH':
            if ($store.hasPrevious && !event.metaKey) {
                store.previous();
                handlePageChange();
            }
            break;
        case 'ArrowUp':
        case 'KeyK':
            store.previousRow();
            break;
        case 'ArrowDown':
        case 'KeyJ':
            store.nextRow();
            break;
        default:
            break;
    }
}
</script>

<svelte:window
  bind:innerWidth={screenWidth}
  on:resize={updateWidth}
  on:keydown={handleKeydown}
/>

<div class="pagination relative mb-8 flex flex-col gap-4">
  <div
    class="flex flex-col items-center justify-between gap-2 md:flex-row md:items-start"
  >
    <div class="w-full">
      <slot name="action-top-left" />
    </div>
    <nav
      style={floatStyle}
      bind:clientHeight={height}
      class="flex min-w-fit flex-col items-end gap-4 md:flex-row"
      aria-label="{$$restProps['aria-label']} 1"
    >
      <slot name="action-top-center" />
      <div class="flex gap-4">
        {#if !itemsPerPage}
          <FilterSelect
            label={pageSizeSelectLabel}
            parameter={perPageKey}
            value={perPage}
            {options}
            position="top"
          />
        {/if}
        <slot name="pagination-top">
          <div class="flex items-center justify-center gap-3">
            <button
              class="caret"
              disabled={!$store.hasPrevious}
              on:click={() => {
                store.previous();
                handlePageChange();
              }}
              aria-label={previousButtonLabel}
            >
              <span class="arrow arrow-left" />
            </button>
            <p>
              {#if updating}
                <Skeleton class="block h-5 w-24" />
              {:else}
                {$store.length
                  ? $store.startingIndex + 1
                  : 0}–{$store.endingIndex + 1} of {$store.length}
              {/if}
            </p>
            <button
              class="caret"
              disabled={!$store.hasNext}
              on:click={() => {
                store.next();
                handlePageChange();
              }}
              aria-label={nextButtonLabel}
            >
              <span class="arrow arrow-right" />
            </button>
          </div>
        </slot>
      </div>
      <slot name="action-top-right" />
    </nav>
  </div>
  <slot
    visibleItems={$store.items}
    initialItem={$store.initialItem}
    activeRowIndex={$store.activeRowIndex}
    setActiveRowIndex={store.setActiveRowIndex}
  />
  <nav
    class={`flex ${
      $$slots['action-bottom-left'] ? 'justify-between' : 'justify-end'
    }`}
    aria-label="{$$restProps['aria-label']} 2"
  >
    <slot name="action-bottom-left" />
    <div class="flex gap-4">
      {#if !itemsPerPage}
        <FilterSelect
          label={pageSizeSelectLabel}
          parameter={perPageKey}
          value={perPage}
          {options}
          position="bottom"
        />
      {/if}
      <div class="flex items-center justify-center gap-3">
        <button
          class="caret"
          disabled={!$store.hasPrevious}
          on:click={() => {
            store.previous();
            handlePageChange();
          }}
          aria-label={previousButtonLabel}
        >
          <span class="arrow arrow-left" />
        </button>
        <p>
          {#if updating}
            <Skeleton class="block h-5 w-24" />
          {:else}
            {$store.length ? $store.startingIndex + 1 : 0}–{$store.endingIndex +
              1} of {$store.length}
          {/if}
        </p>
        <button
          class="caret"
          disabled={!$store.hasNext}
          on:click={() => {
            store.next();
            handlePageChange();
          }}
          aria-label={nextButtonLabel}
        >
          <span class="arrow arrow-right" />
        </button>
      </div>
      <slot name="action-bottom-right" />
    </div>
  </nav>
</div>

<style>
  .caret {

    position: relative;

    width: 12px;
    height: 12px;
}

  .caret:disabled {

    cursor: not-allowed;

    opacity: 0.5;
}

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
  }</style>
