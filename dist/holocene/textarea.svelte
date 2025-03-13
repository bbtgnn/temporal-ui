<script>import { twMerge as merge } from 'tailwind-merge';
import Label from './label.svelte';
export let disabled = false;
export let error = '';
export let isValid = true;
export let placeholder = '';
export let rows = 5;
export let spellcheck = null;
export let value;
export let label;
export let labelHidden = false;
export let id;
export let required = false;
export let description = '';
export let maxLength = 0;
let className = 'text-primary';
export { className as class };
</script>

<div class={merge('group flex flex-col gap-1', className)}>
  <Label {required} hidden={labelHidden} {label} for={id} />
  {#if description}
    <p class="-mt-1 text-sm">{description}</p>
  {/if}
  <div
    class={merge(
      'relative box-border inline-flex w-full border border-subtle focus-within:border-information focus-within:ring-2 focus-within:ring-primary/70',
      !isValid && 'error',
      !disabled && 'hover:border-information',
    )}
  >
    <textarea
      bind:value
      class={merge(
        'surface-primary min-h-fit w-full px-3 py-2 text-sm placeholder:text-secondary focus-visible:outline-none',
        disabled && 'cursor-not-allowed opacity-50',
      )}
      {id}
      {disabled}
      {placeholder}
      {rows}
      {spellcheck}
      on:input
      on:change
      on:focus
      on:blur
      on:keydown|stopPropagation
      maxlength={maxLength > 0 ? maxLength : undefined}
      {...$$restProps}
    />
  </div>
  <div class="flex justify-between gap-2">
    <div
      class="error-msg"
      class:min-width={maxLength}
      aria-live={isValid ? 'off' : 'assertive'}
    >
      {#if !isValid}
        {#if error}
          <p>{error}</p>
        {/if}
        <slot name="error" />
      {/if}
    </div>
    {#if maxLength && !disabled}
      <span class="count">
        <span
          class="text-information"
          class:warn={maxLength - value?.length <= 5}
          class:error={maxLength === value?.length}>{value?.length ?? 0}</span
        >&nbsp;/&nbsp;{maxLength}
      </span>
    {/if}
  </div>
</div>

<style>
  .error {

    border-color: rgb(var(--color-border-danger))
}

.error:focus-within {

    border-color: rgb(var(--color-border-danger));

    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);

    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

    --tw-ring-color: rgb(var(--color-border-focus-danger) / 0.7)
}

  .error-msg {

    min-height: 1.25rem;

    overflow-wrap: break-word;

    border-color: rgb(var(--color-border-danger));

    font-size: 0.875rem;

    line-height: 1.25rem;

    font-weight: 400;

    color: rgb(var(--color-text-danger))
}

  .error-msg.min-width {

    width: calc(100% - 6rem)
}

  .count {

    visibility: hidden;

    text-align: right;

    font-size: 0.875rem;

    line-height: 1.25rem;

    font-weight: 500;

    color: rgb(var(--color-text-primary))
}

  .group:focus-within .count {

    visibility: visible
}

  .count > .warn {

    color: rgb(var(--color-text-warning))
}

  .count > .error {

    color: rgb(var(--color-text-danger))
}

  textarea {

    background-color: rgb(var(--color-surface-primary));

    color: rgb(var(--color-text-primary))
}

  textarea:where([data-theme="dark"], [data-theme="dark"] *) {

    background-color: transparent
}</style>
