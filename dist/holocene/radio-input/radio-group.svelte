<script context="module">export const RADIO_GROUP_CONTEXT = 'radio-group-ctx';
</script>

<script>import { setContext } from 'svelte';
import { twMerge as merge } from 'tailwind-merge';
let className = '';
export { className as class };
export let name;
export let group;
export let description = '';
setContext(RADIO_GROUP_CONTEXT, {
    name,
    group,
});
</script>

<div class={merge('flex flex-col gap-2 p-1', className)} {...$$restProps}>
  {#if description}
    <p class="text-sm font-medium">{description}</p>
  {/if}
  <slot />
</div>
