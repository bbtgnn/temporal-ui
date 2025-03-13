<script>import { createEventDispatcher, getContext } from 'svelte';
import { twMerge as merge } from 'tailwind-merge';
import Badge from '../badge.svelte';
import Button, {} from '../button.svelte';
import Icon from '../icon/icon.svelte';
import { MENU_CONTEXT, } from './menu-container.svelte';
import { MENU_ITEM_SELECTORS } from './menu-item.svelte';
let className = '';
export { className as class };
export let controls;
export let count = 0;
export let disabled = false;
export let hasIndicator = false;
export let id = null;
export let label = null;
export let variant = 'secondary';
const dispatch = createEventDispatcher();
const { open, menuElement } = getContext(MENU_CONTEXT);
const handleClick = () => {
    open.update((previousState) => {
        let newState = previousState;
        if (!disabled) {
            newState = !previousState;
        }
        dispatch('click', { open: newState });
        return newState;
    });
};
const handleKeyDown = (event) => {
    switch (event.key) {
        case 'Escape':
            $open = false;
            break;
        case 'ArrowDown':
            event.preventDefault();
            if ($open) {
                focusFirstMenuItem();
            }
            else {
                $open = true;
            }
            break;
        default:
            break;
    }
};
const focusFirstMenuItem = () => {
    const focusable = Array.from($menuElement.querySelectorAll(MENU_ITEM_SELECTORS));
    if (focusable && focusable[0]) {
        requestAnimationFrame(() => focusable[0].focus());
    }
};
</script>

<Button
  {id}
  {disabled}
  type="button"
  on:click={handleClick}
  on:keydown={handleKeyDown}
  aria-haspopup={!disabled}
  aria-controls={controls}
  aria-expanded={$open}
  aria-label={label}
  {variant}
  class={merge(className)}
  {...$$restProps}
>
  <slot name="leading" />
  <div class="flex grow items-center" class:hidden={!$$slots.default}>
    <slot />
  </div>
  {#if hasIndicator}
    <div class="flex">
      <Icon name={$open ? 'chevron-up' : 'chevron-down'} />
    </div>
  {/if}
  <slot name="trailing" />
  {#if count > 0}
    <Badge
      class="absolute right-0 top-0 origin-bottom-left translate-x-[10px] translate-y-[-10px]"
      type="count">{count}</Badge
    >
  {/if}
</Button>
