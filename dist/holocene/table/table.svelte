<script>import { twMerge as merge } from 'tailwind-merge';
import ProgressBar from '../progress-bar.svelte';
let className = '';
export { className as class };
export let variant = 'fancy';
export let updating = false;
</script>

<table class={merge(variant, className)} {...$$restProps}>
  <slot name="caption" />
  <thead>
    <slot name="headers" />
    {#if updating}
      <ProgressBar />
    {/if}
  </thead>
  <tbody>
    <slot />
  </tbody>
</table>

<style>
  table {

    position: relative
}

    table thead :global(th) {

    text-align: left;

    font-size: 0.875rem;

    line-height: 1.25rem;

    font-weight: 500
}

    table tbody :global(td) {

    text-align: left;

    font-size: 0.875rem;

    line-height: 1.25rem
}

  table.fancy {

    background-color: rgb(var(--color-surface-primary));

    color: rgb(var(--color-text-primary));

    border-collapse: separate;

    --tw-border-spacing-x: 0px;

    --tw-border-spacing-y: 0px;

    border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);

    border-width: 1px;

    border-color: rgb(var(--color-border-table))
}

  table.fancy thead {

    background-color: rgb(var(--color-surface-table));

    color: rgb(var(--color-text-inverse))
}

  table.fancy thead :global(th) {

    border-top-width: 1px;

    border-color: rgb(var(--color-border-table));

    padding: 0.5rem;

    --tw-text-opacity: 1;

    color: rgb(248 250 252 / var(--tw-text-opacity))
}

  table.fancy thead :global(td) {

    border-top-width: 1px;

    border-color: rgb(var(--color-border-table));

    padding: 0.5rem
}

  table.fancy thead :global(td):first-child {

    border-left-width: 1px;

    border-color: rgb(var(--color-border-table))
}

  table.fancy thead :global(td):last-child {

    border-right-width: 1px;

    border-color: rgb(var(--color-border-table))
}

  table.fancy tbody :global(td) {

    border-top-width: 1px;

    border-color: rgb(var(--color-border-table));

    padding: 0.5rem;

    font-size: 0.875rem;

    line-height: 1.25rem
}

  table.fancy tbody :global(td:first-child:is(.expanded-cell)) {

    padding-left: 0px;

    padding-right: 0px
}

  table.simple thead :global(td),
    table.simple thead :global(th) {

    border-bottom-width: 1px;

    border-color: rgb(var(--color-border-primary));

    padding: 0.5rem
}

  table.simple tbody :global(td) {

    border-bottom-width: 1px;

    padding: 0.5rem
}

  table.simple:last-child {

    border-bottom-width: 0px
}</style>
