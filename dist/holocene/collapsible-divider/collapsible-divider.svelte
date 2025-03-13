<script>import { twMerge as merge } from 'tailwind-merge';
import Icon from '../icon/icon.svelte';
let className = undefined;
export let label;
export let open = false;
export { className as class };
const toggleOpen = () => (open = !open);
</script>

<div
  class={merge(
    'flex w-full flex-row items-center justify-evenly gap-4',
    className,
  )}
  {...$$restProps}
>
  <div class="w-full border border-subtle" />
  <button
    class="flex grow items-center gap-2 whitespace-nowrap"
    on:click={toggleOpen}
  >
    {label}
    <Icon name={open ? 'chevron-up' : 'chevron-down'} />
  </button>
  <div class="w-full border border-subtle" />
</div>

<div class:hidden={!open}>
  <slot />
</div>
