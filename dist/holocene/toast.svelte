<script>import { fly } from 'svelte/transition';
import { createEventDispatcher } from 'svelte';
import { twMerge as merge } from 'tailwind-merge';
import Icon from './icon/icon.svelte';
const dispatch = createEventDispatcher();
const variants = {
    primary: 'bg-slate-800 text-white',
    success: 'bg-success',
    error: 'bg-danger',
    info: 'bg-information',
    warning: 'bg-warning',
};
export let id;
export let variant;
export let closeButtonLabel;
const handleDismiss = () => {
    dispatch('dismiss', { id });
};
</script>

<div
  {id}
  class={merge(
    'flex grow-0 items-center justify-between gap-4 rounded-md px-3 py-2.5 shadow',
    variants[variant],
  )}
  transition:fly={{ x: 250 }}
>
  <p class="text-sm">
    <slot />
  </p>
  <button
    type="button"
    on:click|stopPropagation={handleDismiss}
    aria-label={closeButtonLabel}
  >
    <Icon name="close" />
  </button>
</div>
