<script>import Tooltip from '../tooltip.svelte';
import ArrowDown from './arrow-down.svelte';
import ArrowLeft from './arrow-left.svelte';
import ArrowRight from './arrow-right.svelte';
import ArrowUp from './arrow-up.svelte';
export let tooltipText = '';
export let arrow = undefined;
export let title;
const ArrowComponents = {
    up: ArrowUp,
    down: ArrowDown,
    left: ArrowLeft,
    right: ArrowRight,
};
</script>

<Tooltip text={tooltipText} hide={!tooltipText} top>
  <kbd class="shortcut">
    {#if arrow}
      <svelte:component this={ArrowComponents[arrow]} {title} />
    {:else}
      <slot />
    {/if}
  </kbd>
</Tooltip>

<style>
  .shortcut {
    display: inline-flex;
    width: auto;
    min-width: 32px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    --tw-border-opacity: 1;
    border-color: rgb(201 217 240 / var(--tw-border-opacity));
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 600;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
.shortcut:where([data-theme="dark"], [data-theme="dark"] *) {
    --tw-border-opacity: 1;
    border-color: rgb(102 124 161 / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(87 110 143 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(201 217 240 / var(--tw-text-opacity))
}</style>
