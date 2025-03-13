<script>import { twMerge as merge } from 'tailwind-merge';
import Icon from './icon/icon.svelte';
export let defaultVersion = false;
export let active = false;
export let buildId;
</script>

<p class="flex select-all gap-2 font-mono">
  {#if defaultVersion && buildId}
    <span
      class={merge(
        'flex items-center gap-1 rounded-sm border border-subtle px-1 text-sm text-primary',
        active && 'border-green-200 bg-green-200 text-black',
      )}
    >
      <Icon name="merge" />{buildId}
      <slot name="overall-default-worker" />
      <slot name="default-worker" />
    </span>
  {:else if buildId}
    <span
      class="flex items-center gap-1 rounded-sm border border-subtle px-1 text-sm text-primary"
    >
      <Icon name="merge" />{buildId}
    </span>
  {/if}
</p>
