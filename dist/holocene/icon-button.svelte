<script>import { twMerge as merge } from 'tailwind-merge';
import Button from './button.svelte';
let className = '';
export { className as class };
export let icon;
export let label;
export let variant = 'ghost';
</script>

<Button
  {variant}
  leadingIcon={icon}
  class={merge('h-9 w-9 shrink-0 rounded-full p-0', className)}
  aria-label={label}
  on:click
  {...$$restProps}
/>
