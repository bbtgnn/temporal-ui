<script>import { createEventDispatcher } from 'svelte';
import { twMerge as merge } from 'tailwind-merge';
import Icon from '../icon/icon.svelte';
import Label from '../label.svelte';
import { copyToClipboard } from '../../utilities/copy-to-clipboard';
import IconButton from '../icon-button.svelte';
export let id;
export let value;
export let label;
export let labelHidden = false;
export let icon = null;
export let placeholder = '';
export let suffix = '';
export let name = id;
export let copyable = false;
export let disabled = false;
export let clearable = false;
export let autocomplete = 'off';
export let valid = true;
export let hintText = '';
export let maxLength = 0;
export let hideCount = false;
export let spellcheck = null;
export let noBorder = false;
export let autoFocus = false;
export let error = false;
export let required = false;
export let copyButtonLabel = '';
export let clearButtonLabel = '';
let className = '';
export { className as class };
let testId = $$props['data-testid'] || id;
function callFocus(input) {
    if (autoFocus && input)
        input.focus();
}
const dispatch = createEventDispatcher();
function onClear() {
    value = '';
    dispatch('clear', {});
}
const { copy, copied } = copyToClipboard();
$: disabled = disabled || copyable;
</script>

<div class={merge('flex flex-col gap-1', className)}>
  <Label {required} {label} hidden={labelHidden} for={id} />
  <div class="input-group flex">
    <slot name="before-input" {disabled} />
    <div
      class={merge(
        'input-container',
        'surface-primary relative box-border inline-flex h-10 w-full items-center border border-subtle text-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-primary/70',
      )}
      class:disabled
      class:error
      class:noBorder
      class:invalid={!valid}
    >
      {#if icon}
        <span class="icon-container">
          <Icon name={icon} />
        </span>
      {/if}
      <input
        class="input"
        class:disabled
        {disabled}
        data-lpignore="true"
        data-1p-ignore="true"
        maxlength={maxLength > 0 ? maxLength : undefined}
        {placeholder}
        {id}
        {name}
        {spellcheck}
        {required}
        {autocomplete}
        bind:value
        on:click|stopPropagation
        on:input
        on:keydown|stopPropagation
        on:change
        on:focus
        on:blur
        use:callFocus
        data-testid={testId}
        {...$$restProps}
      />
      {#if copyable}
        <div class="copy-icon-container">
          <button aria-label={copyButtonLabel} on:click={(e) => copy(e, value)}>
            {#if $copied}
              <Icon name="checkmark" />
            {:else}
              <Icon name="copy" />
            {/if}
          </button>
        </div>
      {:else if disabled}
        <div class="disabled-icon-container">
          <Icon name="lock" />
        </div>
      {:else if clearable && value}
        <div class="clear-icon-container" data-testid="clear-input">
          <IconButton
            label={clearButtonLabel}
            on:click={onClear}
            icon="close"
          />
        </div>
      {/if}
      {#if maxLength && !disabled && !hideCount}
        <span class="count">
          <span
            class:ok={maxLength - value.length > 5}
            class:warn={maxLength - value.length <= 5}
            class:error={maxLength === value.length}>{value.length}</span
          >/{maxLength}
        </span>
      {/if}
      {#if suffix}
        <div class="suffix">
          {suffix}
        </div>
      {/if}
    </div>
    <slot name="after-input" {disabled} />
  </div>

  <span
    class="hint-text inline-block"
    class:invalid={!valid}
    class:error
    class:hidden={!hintText}
    role={error ? 'alert' : null}
  >
    {hintText}
  </span>
</div>

<style>
  /* Base styles */
  .input-container.error,
    .input-container.invalid {
    border-color: rgb(var(--color-border-danger))
}
  .input-container.error:focus-within,
    .input-container.invalid:focus-within {
    --tw-ring-color: rgb(var(--color-border-focus-danger) / 0.7)
}
  .input-container.error > .input, .input-container.invalid > .input {
    caret-color: rgb(var(--color-text-danger))
}
  .input-container.disabled {
    opacity: 0.5
}

  .input {
    margin: 0.5rem;
    width: 100%;
    background-color: transparent
}

  .input::-moz-placeholder {
    color: rgb(var(--color-text-secondary))
}

  .input::placeholder {
    color: rgb(var(--color-text-secondary))
}

  .input:focus {
    outline: 2px solid transparent;
    outline-offset: 2px
}

  .suffix {
    display: block;
    height: 100%;
    width: -moz-fit-content;
    width: fit-content;
    border-left-width: 1px;
    border-color: rgb(var(--color-border-subtle));
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem
}

  .noBorder {
    border-style: none
}

  .icon-container {
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center
}

  .copy-icon-container {
    display: flex;
    height: 100%;
    width: 2.25rem;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-left-width: 1px;
    border-color: rgb(var(--color-border-subtle))
}

  .disabled-icon-container {
    display: flex;
    height: 100%;
    width: 2.25rem;
    align-items: center;
    justify-content: center;
    padding-left: 0.25rem;
    padding-right: 0.25rem
}

  .clear-icon-container {
    margin-right: 0.5rem;
    display: flex;
    width: 1.5rem;
    cursor: pointer;
    align-items: center;
    justify-content: center
}

  .count {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    display: none;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.1em
}

  .count > .ok {
    color: rgb(var(--color-text-success))
}

  .count > .warn {
    color: rgb(var(--color-text-warning))
}

  .count > .error {
    color: rgb(var(--color-text-danger))
}

  .input:focus ~ .count {
    display: block
}

  .hint-text {
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgb(var(--color-text-primary))
}

  .hint-text.error,
    .hint-text.invalid {
    color: rgb(var(--color-text-danger))
}

  input[type='search']::-webkit-search-cancel-button {
    display: none
}</style>
