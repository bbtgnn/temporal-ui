<script>import { createEventDispatcher } from 'svelte';
import { twMerge as merge } from 'tailwind-merge';
import Icon from './icon/icon.svelte';
export let intent = 'default';
export let button = false;
export let removeButtonLabel;
export let disabled = false;
const dispatch = createEventDispatcher();
const handleRemove = (e) => {
    e.preventDefault();
    dispatch('remove');
};
</script>

<span class={merge('chip', intent)}>
  {#if button}
    <button class="flex items-center gap-1" on:click>
      <slot />
    </button>
  {:else}
    <slot />
  {/if}
  <button
    aria-label={removeButtonLabel}
    class:hidden={disabled}
    on:click={handleRemove}
  >
    <Icon name="close" />
  </button>
</span>

<style>
  .chip {

    background-color: rgb(var(--color-surface-subtle));

    color: rgb(var(--color-text-primary));

    display: flex;

    height: 2rem;

    width: -moz-fit-content;

    width: fit-content;

    min-width: -moz-fit-content;

    min-width: fit-content;

    flex-direction: row;

    align-items: center;

    justify-content: space-between;

    gap: 0.25rem;

    white-space: nowrap;

    word-break: break-all;

    border-radius: 0.125rem;

    padding: 0.25rem;

    font-size: 0.875rem;

    line-height: 1.25rem
}

    .chip :global(.icon-button) {

    margin-left: 0.25rem;

    height: auto;

    width: -moz-fit-content;

    width: fit-content
}

  .warning {

    background-color: rgb(var(--color-surface-danger))
}</style>
