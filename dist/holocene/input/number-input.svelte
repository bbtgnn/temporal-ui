<script>import { twMerge as merge } from 'tailwind-merge';
import Icon from '../icon/icon.svelte';
import Label from '../label.svelte';
export let icon = null;
export let id;
export let value;
export let label;
export let labelHidden = false;
export let units = '';
export let placeholder = '';
export let name = id;
export let disabled = false;
export let required = false;
export let hintText = '';
export let max = undefined;
export let min = undefined;
export let search = false;
let valid = true;
const validate = (val) => {
    if ((min !== undefined && val < min) || (max !== undefined && val > max)) {
        valid = false;
    }
    else {
        valid = true;
    }
};
$: {
    validate(value);
}
</script>

<div class={merge('flex flex-col gap-1', $$props.class)}>
  <Label {required} {label} hidden={labelHidden} for={id} />
  <div class="flex items-center gap-2">
    <div
      class="surface-primary relative box-border flex h-10 w-16 items-center border border-subtle text-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-primary/70"
      class:opacity-50={disabled}
      class:search
      class:invalid={!valid}
    >
      {#if icon}
        <span class="icon-container">
          <Icon name={icon} />
        </span>
      {/if}
      <input
        class="m-2 block w-full bg-transparent text-center text-primary focus:outline-none"
        type="number"
        {max}
        {min}
        {disabled}
        data-lpignore="true"
        data-1p-ignore="true"
        {placeholder}
        {id}
        {name}
        autocomplete="off"
        spellcheck="false"
        bind:value
        on:input
        on:change
        on:focus
        on:blur
        on:keydown
      />
    </div>
    <div class="units">{units}</div>
  </div>
</div>
{#if !valid && hintText}
  <span class="mt-1 text-xs text-danger">{hintText}</span>
{/if}

<style>
  .units {

    font-size: 0.875rem;

    line-height: 1.25rem;

    font-weight: 500;

    color: rgb(var(--color-text-primary))
}

  .search {

    width: -moz-fit-content;

    width: fit-content
}

  .search input {

    text-align: left
}

  .icon-container {

    margin-left: 0.5rem;

    display: flex;

    align-items: center;

    justify-content: center
}

  .invalid {

    border-color: rgb(var(--color-border-danger))
}

  .invalid:focus-within {

    --tw-ring-color: rgb(var(--color-border-focus-danger) / 0.7)
}</style>
