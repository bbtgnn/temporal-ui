<script>var _a;
import { tick } from 'svelte';
import { page } from '$app/stores';
import Button from '../../button.svelte';
import IconButton from '../../icon-button.svelte';
import FilterSelect from '../../select/filter-select.svelte';
import { currentPageKey, defaultItemsPerPage, MAX_PAGE_SIZE, options, pagination, perPageKey, } from '../../../stores/pagination';
import { updateQueryParameters } from '../../../utilities/update-query-parameters';
import PaginatedTable from './index.svelte';
export let id = null;
export let items;
export let variant = 'primary';
export let updating = false;
export let perPageLabel;
export let pageButtonLabel;
export let nextPageButtonLabel;
export let previousPageButtonLabel;
export let maxHeight = '';
export let pageSizeOptions = options;
export let fixed = false;
export let hashField = '';
$: url = $page.url;
$: perPageParam = (_a = url.searchParams.get(perPageKey)) !== null && _a !== void 0 ? _a : pageSizeOptions[0];
$: currentPageParam = url.searchParams.get(currentPageKey) || '1';
$: hash = $page.url.hash;
$: store = pagination(items, perPageParam, currentPageParam);
// keep the 'page-size' url search param within the supported options
$: {
    if (parseInt(perPageParam, 10) > parseInt(MAX_PAGE_SIZE, 10)) {
        updateQueryParameters({
            parameter: perPageKey,
            value: MAX_PAGE_SIZE,
            url,
        });
    }
    else if (!pageSizeOptions.includes(perPageParam)) {
        updateQueryParameters({
            parameter: perPageKey,
            value: defaultItemsPerPage,
            url,
        });
    }
}
// Keep the 'page' url search param within 1 and the total number of pages
$: {
    if ($store.totalPages &&
        parseInt(currentPageParam, 10) > $store.totalPages) {
        updateQueryParameters({
            parameter: currentPageKey,
            value: $store.totalPages,
            url,
        });
    }
    else if (currentPageParam === null ||
        parseInt(currentPageParam, 10) < 0) {
        updateQueryParameters({
            parameter: currentPageKey,
            value: '1',
            url,
        });
    }
}
const handlePageChange = (page) => {
    updateQueryParameters({
        parameter: currentPageKey,
        value: page,
        url,
    });
};
const scrollToHashEvent = async () => {
    store.jumpToHashPage(hash);
    await tick();
    let id = hash.slice(1);
    const row = document === null || document === void 0 ? void 0 : document.querySelector(`[data-${hashField}="${id}"]`);
    if (row) {
        setTimeout(() => {
            row === null || row === void 0 ? void 0 : row.scrollIntoView({ behavior: 'smooth' });
        }, 500);
    }
};
$: {
    if (currentPageParam && !hash)
        store.jumpToPage(currentPageParam);
    if (hash && hashField && !url.searchParams.get(currentPageKey))
        scrollToHashEvent();
    if (perPageParam)
        store.adjustPageSize(perPageParam);
}
</script>

<PaginatedTable
  {updating}
  {variant}
  {maxHeight}
  visibleItems={$store.items}
  {fixed}
  {id}
>
  <slot name="caption" slot="caption" />
  <slot name="headers" slot="headers" visibleItems={$store.items} />
  <slot visibleItems={$store.items} />

  <svelte:fragment slot="actions-start">
    <FilterSelect
      label={perPageLabel}
      parameter={perPageKey}
      value={perPageParam}
      options={pageSizeOptions}
    />
  </svelte:fragment>

  <div class="hidden items-center gap-2 md:flex" slot="actions-center">
    {#each $store.pageShortcuts as page}
      {#if isNaN(page)}
        <span class="text-primary">...</span>
      {:else}
        <Button
          variant="ghost"
          size="sm"
          class={page === $store.currentPage
            ? 'bg-interactive-secondary-active'
            : ''}
          aria-label={pageButtonLabel(page)}
          on:click={() => handlePageChange(page)}>{page}</Button
        >
      {/if}
    {/each}
  </div>

  <nav
    class="flex shrink-0 items-center gap-2"
    aria-label={$$restProps['aria-label']}
    slot="actions-end"
  >
    <slot name="actions-end-additional" />
    <IconButton
      label={previousPageButtonLabel}
      disabled={!$store.hasPrevious}
      icon="arrow-left"
      on:click={() => handlePageChange($store.currentPage - 1)}
    />
    <IconButton
      label={nextPageButtonLabel}
      disabled={!$store.hasNext}
      on:click={() => handlePageChange($store.currentPage + 1)}
      icon="arrow-right"
    />
  </nav>

  <slot name="empty" slot="empty" {updating} />
</PaginatedTable>
