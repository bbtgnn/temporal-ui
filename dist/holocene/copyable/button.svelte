<script>import { twMerge as merge } from 'tailwind-merge';
import Icon from '../icon/icon.svelte';
export let copyIconTitle;
export let copySuccessIconTitle;
export let copied;
let className = '';
export { className as class };
</script>

<button
  class={merge(
    'surface-interactive-secondary m-1 border border-[transparent] bg-transparent p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70',
    className,
  )}
  on:click
  {...$$restProps}
>
  <Icon
    title={copied ? copySuccessIconTitle : copyIconTitle}
    name={copied ? 'checkmark' : 'copy'}
  />
</button>
