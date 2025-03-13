<script>import { fly } from 'svelte/transition';
import { getContext } from 'svelte';
import { twMerge as merge } from 'tailwind-merge';
import { getFocusableElements } from '../../utilities/focus-trap';
import { MENU_CONTEXT } from './menu-container.svelte';
let className = '';
let height = 0;
export { className as class };
export let id;
export let keepOpen = false;
export let position = 'left';
export let menuElement = null;
export let maxHeight = 'max-h-[20rem]';
const { keepOpen: keepOpenCtx, menuElement: menuElementCtx, open, } = getContext(MENU_CONTEXT);
$: $keepOpenCtx = keepOpen;
$: $menuElementCtx = menuElement;
$: menuItems = menuElement ? getFocusableElements(menuElement) : [];
$: lastMenuItem = menuItems[menuItems.length - 1];
const handleFocusOut = (e) => {
    if (!$keepOpenCtx && e.target === lastMenuItem)
        $open = false;
};
</script>

<ul
  in:fly={{ duration: 100 }}
  role="menu"
  class={merge('menu', maxHeight, position, className)}
  class:hidden={!$open}
  aria-labelledby={id}
  tabindex={-1}
  style={position === 'top-right' || position === 'top-left'
    ? `top: -${height + 16}px;`
    : ''}
  {id}
  bind:this={menuElement}
  bind:clientHeight={height}
  on:focusout={handleFocusOut}
  on:click|stopPropagation
  {...$$restProps}
>
  <slot />
</ul>

<style>
  .menu {

    background-color: rgb(var(--color-surface-primary));

    position: absolute;

    z-index: 20;

    margin-top: 0.25rem;

    min-width: -moz-fit-content;

    min-width: fit-content;

    list-style-type: none;

    overflow: auto;

    border-width: 1px;

    border-color: rgb(var(--color-border-subtle));

    color: rgb(var(--color-text-primary));

    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);

    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

    .menu.left,
    .menu.top-left {

    left: 0px;

    transform-origin: top left
}

    .menu.right,
    .menu.top-right {

    right: 0px;

    transform-origin: top right
}</style>
