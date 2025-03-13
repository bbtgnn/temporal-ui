<script context="module">export const MENU_ITEM_SELECTORS = 'input, li[role="option"]:not([aria-disabled="true"]), li[role="menuitem"]:not([aria-disabled="true"])';
</script>

<script>import { createEventDispatcher, getContext } from 'svelte';
import { twMerge as merge } from 'tailwind-merge';
import Icon from '../icon/icon.svelte';
import { MENU_CONTEXT } from './menu-container.svelte';
let className = '';
export { className as class };
export let selected = undefined;
export let destructive = false;
export let disabled = false;
export let href = null;
export let description = null;
export let centered = false;
export let hoverable = true;
export let newTab = false;
const { keepOpen, open } = getContext(MENU_CONTEXT);
const dispatch = createEventDispatcher();
const handleKeydown = (event) => {
    switch (event.key) {
        case 'Escape':
            $open = false;
            break;
        case 'ArrowDown':
        case 'ArrowRight':
            focusNextMenuItem(event.currentTarget);
            break;
        case 'ArrowUp':
        case 'ArrowLeft':
            focusPreviousMenuItem(event.currentTarget);
            break;
        case ' ':
        case 'Enter':
            dispatch('click');
            if (!$keepOpen)
                $open = false;
            break;
        default:
            break;
    }
};
const focusNextMenuItem = (element) => {
    let nextElement = element.nextElementSibling;
    while (nextElement) {
        if (nextElement.matches(MENU_ITEM_SELECTORS))
            break;
        nextElement = nextElement.nextElementSibling;
    }
    if (nextElement && nextElement instanceof HTMLLIElement) {
        nextElement.focus();
    }
};
const focusPreviousMenuItem = (element) => {
    let previousElement = element.previousElementSibling;
    while (previousElement) {
        if (previousElement.matches(MENU_ITEM_SELECTORS))
            break;
        previousElement = previousElement.previousElementSibling;
    }
    if (previousElement && previousElement instanceof HTMLLIElement) {
        previousElement.focus();
    }
};
const handleClick = () => {
    if (!$keepOpen)
        $open = false;
    dispatch('click');
};
</script>

{#if href}
  <a
    {href}
    target={newTab ? '_blank' : null}
    rel={newTab ? 'noreferrer' : null}
    role="menuitem"
    class={merge(
      'menu-item',
      'm-1 px-3 py-2',
      'flex items-center gap-2',
      className,
    )}
    class:disabled
    class:hoverable
    class:justify-center={centered}
    aria-hidden={disabled ? 'true' : 'false'}
    aria-disabled={disabled}
    tabindex={disabled ? -1 : 0}
    on:keydown|stopPropagation={handleKeydown}
    {...$$restProps}
  >
    <slot />
  </a>
{:else}
  <li
    role="menuitem"
    class={merge(
      'menu-item',
      'm-1 px-3 py-2',
      'flex items-center gap-2',
      className,
    )}
    class:destructive
    class:disabled
    class:selected
    class:hoverable
    aria-hidden={disabled ? 'true' : 'false'}
    aria-disabled={disabled}
    tabindex={disabled ? -1 : 0}
    on:click={handleClick}
    on:keydown|stopPropagation={handleKeydown}
    {...$$restProps}
  >
    <slot name="leading" />
    <div class="grow">
      <div class:centered class="menu-item-wrapper">
        <slot />
        {#if selected}
          <Icon name="checkmark" class="shrink-0" />
        {/if}
      </div>
      {#if description}
        <div class="menu-item-description" class:text-center={centered}>
          {description}
        </div>
      {/if}
    </div>
    <slot name="trailing" />
  </li>
{/if}

<style>
  .menu-item {

    cursor: pointer;

    border-width: 1px;

    border-color: transparent;

    font-size: 0.875rem;

    line-height: 1.25rem;

    font-weight: 500;
}

.menu-item:focus-visible {

    border-color: rgb(var(--color-border-inverse));

    outline: 2px solid transparent;

    outline-offset: 2px;

    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);

    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

    --tw-ring-color: rgb(var(--color-border-focus-info) / 0.7);
}

.menu-item:focus-visible:where([data-theme="dark"], [data-theme="dark"] *) {

    border-color: rgb(var(--color-interactive-surface));
}

    .menu-item.hoverable:hover {

    background-color: rgb(var(--color-interactive-secondary-surface));

    color: rgb(var(--color-text-primary));
}

    .menu-item.hoverable:hover:focus-visible {

    background-color: rgb(var(--color-interactive-secondary-hover));
}

    .menu-item.hoverable:hover:hover {

    background-color: rgb(var(--color-interactive-secondary-hover));
}

    .menu-item.hoverable:hover:active {

    background-color: rgb(var(--color-interactive-secondary-active));
}

    .menu-item.hoverable:focus-visible {

    background-color: rgb(var(--color-interactive-secondary-surface));

    color: rgb(var(--color-text-primary));
}

    .menu-item.hoverable:focus-visible:focus-visible {

    background-color: rgb(var(--color-interactive-secondary-hover));
}

    .menu-item.hoverable:focus-visible:hover {

    background-color: rgb(var(--color-interactive-secondary-hover));
}

    .menu-item.hoverable:focus-visible:active {

    background-color: rgb(var(--color-interactive-secondary-active));
}

    .menu-item.selected {

    background-color: rgb(var(--color-surface-brand) / 0.1);

    color: rgb(var(--color-text-brand));
}

    .menu-item.destructive {

    color: rgb(var(--color-text-danger));
}

    .menu-item.disabled {

    pointer-events: none;

    cursor: not-allowed;

    opacity: 0.5;
}

  .menu-item-wrapper {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 0.5rem;
}

  .menu-item-wrapper.centered {

    justify-content: center;
}

  .menu-item-description {

    margin-right: 1.5rem;

    font-size: 0.75rem;

    line-height: 1rem;

    font-weight: 400;

    color: rgb(var(--color-text-subtle));
}</style>
