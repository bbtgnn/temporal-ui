<script context="module">import { cva } from 'class-variance-authority';
import { persistStore } from '../../stores/persist-store';
export const dismissedBanners = persistStore('dismissed-banners', {});
const type = {
    default: 'bg-indigo-200 text-indigo-900',
    danger: 'surface-danger',
};
const types = cva([
    'w-full',
    'md:sticky md:top-12',
    'max-md:fixed max-md:bottom-16',
    'z-[39]',
    'flex items-center justify-between gap-2',
    'px-4 py-2',
], {
    variants: {
        type,
    },
    defaultVariants: {
        type: 'default',
    },
});
</script>

<script>import { twMerge as merge } from 'tailwind-merge';
import Button from '../button.svelte';
import Icon from '../icon/icon.svelte';
export let id;
export let message;
export let dismissLabel = '';
export let dismissable = false;
export let icon = null;
export let type = 'default';
let className = '';
export { className as class };
$: show = message && !$dismissedBanners[id];
const dismissBanner = () => {
    $dismissedBanners[id] = true;
};
</script>

{#if show}
  <section class={merge(types({ type }), className)} {...$$restProps}>
    <span class="flex items-center gap-2">
      {#if icon}
        <Icon name={icon} />
      {/if}
      {message}
    </span>
    {#if dismissable}
      <Button
        on:click={dismissBanner}
        leadingIcon="close"
        variant="ghost"
        size="xs"
      >
        <span class="sr-only">{dismissLabel}</span>
      </Button>
    {/if}
  </section>
{/if}
