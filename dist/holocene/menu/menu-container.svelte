<script context="module">import { writable } from 'svelte/store';
import { createEventDispatcher, setContext } from 'svelte';
import { twMerge as merge } from 'tailwind-merge';
import { clickoutside } from '../outside-click';
export const MENU_CONTEXT = 'menu-context';
</script>

<script>let className = '';
export { className as class };
export let open = writable(false);
const keepOpen = writable(false);
const menuElement = writable(null);
const dispatch = createEventDispatcher();
const closeMenu = () => {
    if ($open) {
        dispatch('close');
        $open = false;
    }
};
setContext(MENU_CONTEXT, {
    open,
    keepOpen,
    menuElement,
});
</script>

<div
  use:clickoutside={closeMenu}
  class={merge('relative', className)}
  {...$$restProps}
>
  <slot {open} />
</div>
