<script>import { twMerge as merge } from 'tailwind-merge';
export let label;
let className = '';
export { className as class };
</script>

<div
  class={merge('tab-list', className)}
  role="tablist"
  aria-label={label}
  {...$$restProps}
>
  <slot />
</div>

<style>
  .tab-list {
    display: flex;
    flex-direction: row;
    gap: 1rem
}</style>
