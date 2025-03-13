<script>import ProgressBar from '../../progress-bar.svelte';
export let visibleItems;
export let variant = 'primary';
export let updating = false;
export let maxHeight = '';
export let fixed = false;
let tableContainer;
$: tableOffset = (tableContainer === null || tableContainer === void 0 ? void 0 : tableContainer.offsetTop)
    ? (tableContainer === null || tableContainer === void 0 ? void 0 : tableContainer.offsetTop) + 32
    : 0;
</script>

<div
  class="paginated-table-wrapper {variant}"
  bind:this={tableContainer}
  style="max-height: {maxHeight || `calc(100vh - ${tableOffset}px)`}"
>
  <table
    class="paginated-table"
    class:table-fixed={fixed}
    class:table-auto={!fixed}
    {...$$restProps}
  >
    <slot name="caption" />
    <thead class="paginated-table-header">
      <slot name="headers" {visibleItems} />
      {#if updating}
        <ProgressBar />
      {/if}
    </thead>
    <tbody class="paginated-table-body">
      <slot />
    </tbody>
  </table>
  {#if visibleItems.length}
    <div class="paginated-table-controls">
      <slot name="actions-start" />
      <slot name="actions-center" />
      <slot name="actions-end" />
    </div>
  {:else}
    <slot name="empty" />
  {/if}
</div>

<style>
  .paginated-table-wrapper {

    background-color: rgb(var(--color-surface-primary));

    color: rgb(var(--color-text-primary));

    min-height: 154px;

    overflow: auto
}

  .primary {

    border-width: 1px;

    border-color: rgb(var(--color-border-table))
}

  .split {

    border-top-width: 1px;

    border-color: rgb(var(--color-border-subtle))
}

  .paginated-table {

    width: 100%
}

  .paginated-table-header {

    position: sticky;

    top: 0px;

    z-index: 10
}

  .paginated-table-header :global(tr) {

    background-color: rgb(var(--color-surface-table));

    color: rgb(var(--color-text-inverse));

    height: 2.5rem;

    --tw-text-opacity: 1;

    color: rgb(248 250 252 / var(--tw-text-opacity))
}

  .paginated-table-header :global(tr > th) {

    white-space: nowrap;

    padding: 0.5rem;

    text-align: left;

    font-weight: 500
}

  .paginated-table-body :global(tr.primary) {

    border-bottom-width: 1px;

    border-color: rgb(var(--color-border-table))
}

  .paginated-table-body :global(tr.primary):last-of-type {

    border-width: 0px
}

  .paginated-table-body :global(tr.primary):hover {

    background-color: rgb(var(--color-interactive-table-hover));

    background-attachment: fixed
}

  .paginated-table-body :global(tr.dense) {

    height: 2rem
}

  .paginated-table-body :global(tr.dense):hover {

    cursor: pointer;

    background-color: rgb(var(--color-interactive-table-hover));

    background-attachment: fixed
}

  .paginated-table-body :global(tr.expanded) {

    width: 100%
}

  .paginated-table-body :global(tr.expanded):hover {

    background-color: rgb(var(--color-surface-primary))
}

  .paginated-table-body :global(tr.dense:nth-of-type(odd)) {

    background-color: rgb(var(--color-surface-background));

    color: rgb(var(--color-text-primary))
}

  .paginated-table-body :global(tr.dense:nth-of-type(odd)):hover {

    background-color: rgb(var(--color-interactive-table-hover))
}

  .paginated-table-body :global(tr.dense.expanded) {

    background-color: rgb(var(--color-interactive-secondary-active))
}

  .paginated-table-body :global(tr.dense.active) {

    background-color: rgb(var(--color-interactive-table-hover))
}

  .paginated-table-body :global(tr > td) {

    white-space: nowrap;

    padding: 0.5rem
}

  .paginated-table-body :global(tr > td > .table-link):hover {

    --tw-text-opacity: 1;

    color: rgb(29 100 216 / var(--tw-text-opacity));

    text-decoration-line: underline;

    text-decoration-color: #1D64D8
}

  .primary .paginated-table-body :global(tr:not(.empty)) {

    height: 3rem;

    border-bottom-width: 1px;

    border-color: rgb(var(--color-border-table))
}

  .primary .paginated-table-body :global(tr:not(.empty)):last-of-type {

    border-width: 0px
}

  .primary .paginated-table-body :global(tr:not(.empty)):hover {

    background-color: rgb(var(--color-interactive-table-hover));

    background-attachment: fixed
}

  .split .paginated-table-body {

    display: flex
}

  .split .paginated-table-body :global(tr > td) {

    padding-left: 0px;

    padding-right: 0px
}

  .paginated-table-controls {

    background-color: rgb(var(--color-surface-primary));

    color: rgb(var(--color-text-primary));

    position: sticky;

    bottom: 0px;

    left: 0px;

    display: flex;

    width: 100%;

    flex-grow: 1;

    align-items: center;

    justify-content: space-between;

    gap: 0.5rem;

    border-top-width: 1px;

    border-color: rgb(var(--color-border-table));

    padding-left: 1rem;

    padding-right: 1rem;

    padding-top: 0.5rem;

    padding-bottom: 0.5rem
}</style>
