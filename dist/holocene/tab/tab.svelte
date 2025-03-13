<script>import { getContext } from 'svelte';
import { isNull } from '../../utilities/is';
import { TABS } from './tabs.svelte';
export let label;
export let id;
export let href = null;
export let panelId = null;
export let disabled = false;
export let active = null;
export let onClick = () => { };
const { registerTab, selectTab, activeTab } = getContext(TABS);
registerTab(id);
$: isActive = isNull(active) ? $activeTab === id : active;
const handleClick = () => {
    if (disabled)
        return;
    selectTab(id);
    onClick && onClick();
};
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  role="tab"
  class="tab"
  aria-selected={isActive}
  aria-controls={panelId}
  tabindex={isActive ? 0 : -1}
  {id}
  {href}
  class:active={isActive}
  class:disabled
  data-testid={id ?? $$props['data-testid']}
  on:click={handleClick}
  {...$$restProps}
>
  {label}
  <slot />
</svelte:element>

<style>
  .tab {

    display: flex;

    cursor: pointer;

    align-items: center;

    gap: 0.25rem;

    white-space: nowrap;

    border-bottom-width: 1px;

    border-color: transparent;

    font-size: 0.875rem;

    line-height: 1.25rem;

    font-weight: 500;

    outline: 2px solid transparent;

    outline-offset: 2px
}

.tab:focus-visible {

    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);

    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

    --tw-ring-color: rgb(var(--color-border-focus-info) / 0.7)
}

    .tab:not(.disabled):hover {

    color: rgb(var(--color-text-brand))
}

  .tab.active {

    border-color: rgb(var(--color-surface-brand))
}

  .tab.disabled {

    cursor: not-allowed;

    opacity: 0.5
}</style>
