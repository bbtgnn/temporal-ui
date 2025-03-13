<script>import { twMerge as merge } from 'tailwind-merge';
import Icon from './icon/icon.svelte';
export let intent;
export let title = '';
export let icon = intent;
export let hidden = false;
let className = '';
export { className as class };
$: role = getRole(intent);
function getRole(alertIntent) {
    if (alertIntent === 'error') {
        return 'alert';
    }
    if (alertIntent === 'success' || alertIntent === 'warning') {
        return 'status';
    }
    return null;
}
</script>

<div
  class={merge('alert flex', intent, className)}
  class:hidden
  {role}
  {...$$restProps}
>
  <Icon name={icon} class="mt-0.5 shrink-0" />
  <div class="w-full min-w-0 gap-1">
    <p class="font-medium">
      {title}
    </p>
    {#if $$slots.default}
      <div class="content">
        <slot />
      </div>
    {/if}
  </div>
</div>

<style>
  .alert {

    align-items: flex-start;

    gap: 0.5rem;

    overflow-wrap: break-word;

    border-width: 1px;

    padding: 1.25rem;

    font-size: 0.875rem;

    line-height: 1.25rem;

    color: rgb(var(--color-text-primary))
}

  .alert.success {

    border-color: rgb(var(--color-border-success));

    background-color: rgb(var(--color-surface-success))
}

  .alert.info {

    border-color: rgb(var(--color-border-information));

    background-color: rgb(var(--color-surface-information))
}

  .alert.error {

    border-color: rgb(var(--color-border-danger));

    background-color: rgb(var(--color-surface-danger))
}

  .alert.warning {

    border-color: rgb(var(--color-border-warning));

    background-color: rgb(var(--color-surface-warning))
}

  .content :global(> *) {

    font-size: 0.875rem;

    line-height: 1.25rem;

    font-weight: 400
}</style>
