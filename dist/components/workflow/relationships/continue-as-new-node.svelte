<script>import Icon from '../../../holocene/icon/icon.svelte';
import Link from '../../../holocene/link.svelte';
export let label;
export let value;
export let href = undefined;
export let icon = undefined;
export let current = false;
</script>

<div
  class="flex w-full flex-col items-center gap-2 border border-subtle px-1 py-4 text-center text-xs transition-all lg:text-base {current &&
    'bg-subtle'} max-w-md"
>
  {#if icon}
    <Icon name={icon} />
  {/if}
  <p class="font-mono">{label}</p>
  <div class="px-1 lg:px-2">
    {#if href}
      <Link {href}>
        {value}
      </Link>
    {:else}
      <p>{value}</p>
    {/if}
  </div>
</div>
