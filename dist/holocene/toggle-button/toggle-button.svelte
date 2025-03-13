<script>import { twMerge as merge } from 'tailwind-merge';
import { page } from '$app/stores';
import Icon from '../icon/icon.svelte';
import { getAppContext } from '../../utilities/get-context';
import Tooltip from '../tooltip.svelte';
let className = '';
export { className as class };
export let icon = null;
export let group = getAppContext('group');
export let href = '';
export let base = href;
export let active = false;
export let tooltip = '';
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  class={merge('toggle-button', className)}
  class:group
  class:active={href ? $page.url.pathname.includes(base) : active}
  href={href ? href + $page.url.search : null}
  class:disabled={$$restProps.disabled}
  on:click
  role="button"
  tabindex="0"
  {...$$restProps}
>
  <Tooltip hide={!tooltip} text={tooltip} top>
    {#if icon}
      <div class="flex items-center gap-2">
        <Icon name={icon} />
        {#if $$slots.default}
          <span class="hidden md:block"><slot /></span>
        {/if}
      </div>
    {:else}
      <slot />
    {/if}
  </Tooltip>
</svelte:element>

<style>
  .toggle-button {

    background-color: rgb(var(--color-surface-primary));

    display: flex;

    align-items: center;

    justify-content: center;

    border-width: 1px;

    border-color: rgb(var(--color-border-subtle));

    padding-left: 1rem;

    padding-right: 1rem;

    padding-top: 0.5rem;

    padding-bottom: 0.5rem;

    font-size: 0.875rem;

    line-height: 1rem;

    color: rgb(var(--color-text-primary));
}

.toggle-button:focus-visible {

    outline: 2px solid transparent;

    outline-offset: 2px;
}

    .toggle-button:not(.disabled):hover {

    background-color: rgb(var(--color-interactive-secondary-surface));

    color: rgb(var(--color-text-primary));
}

    .toggle-button:not(.disabled):hover:focus-visible {

    background-color: rgb(var(--color-interactive-secondary-hover));
}

    .toggle-button:not(.disabled):hover:hover {

    background-color: rgb(var(--color-interactive-secondary-hover));
}

    .toggle-button:not(.disabled):hover:active {

    background-color: rgb(var(--color-interactive-secondary-active));
}

    .toggle-button:not(.disabled):focus-visible {

    background-color: rgb(var(--color-interactive-secondary-surface));

    color: rgb(var(--color-text-primary));
}

    .toggle-button:not(.disabled):focus-visible:focus-visible {

    background-color: rgb(var(--color-interactive-secondary-hover));
}

    .toggle-button:not(.disabled):focus-visible:hover {

    background-color: rgb(var(--color-interactive-secondary-hover));
}

    .toggle-button:not(.disabled):focus-visible:active {

    background-color: rgb(var(--color-interactive-secondary-active));
}

    .toggle-button:not(.disabled):focus-visible {

    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);

    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

    --tw-ring-color: rgb(var(--color-border-focus-info) / 0.7);
}

  .toggle-button.active {

    background-color: rgb(var(--color-interactive-secondary-active));
}

  .toggle-button.disabled {

    cursor: not-allowed;

    opacity: 0.5;
}

  .group:not(:last-child) {

    border-right-width: 0px;
}</style>
