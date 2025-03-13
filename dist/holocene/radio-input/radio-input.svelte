<script>var _a;
import { writable } from 'svelte/store';
import { getContext } from 'svelte';
import Label from '../label.svelte';
import { RADIO_GROUP_CONTEXT } from './radio-group.svelte';
export let value;
export let id;
export let label;
export let description = undefined;
export let labelHidden = false;
export let disabled = false;
let internalGroup = writable(value);
let internalName = '';
export { internalGroup as group };
export { internalName as name };
const ctx = (_a = getContext(RADIO_GROUP_CONTEXT)) !== null && _a !== void 0 ? _a : {
    name: internalName,
    group: internalGroup,
};
const { name, group } = ctx;
</script>

<div class="flex flex-col gap-1">
  <Label {disabled}>
    <input
      bind:group={$group}
      type="radio"
      class="surface-primary"
      aria-describedby={description ? `${id}-description` : null}
      {name}
      {value}
      {id}
      {disabled}
      {...$$restProps}
    />
    <span class="label" class:hidden={labelHidden}>
      {label}
    </span>
  </Label>
  {#if description}
    <p class="description" id="{id}-description">
      {description}
    </p>
  {/if}
</div>

<style>
  .description {

    margin-left: 1.75rem;

    font-size: 0.75rem;

    line-height: 1rem;

    font-weight: 400;

    color: rgb(var(--color-text-primary))
}

  input[type='radio'] {

    box-sizing: border-box;

    height: 1.25rem;

    width: 1.25rem;

    cursor: pointer;

    -webkit-appearance: none;

       -moz-appearance: none;

            appearance: none;

    border-radius: 9999px;

    border-width: 1px;

    border-color: rgb(var(--color-border-secondary));

    outline: 2px solid transparent;

    outline-offset: 2px
}

  input[type='radio']:checked {

    background-color: rgb(var(--color-interactive-surface))
}

  input[type='radio']:enabled:focus-visible,
      input[type='radio']:enabled:hover {

    background-color: rgb(var(--color-interactive-active));

    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);

    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

    --tw-ring-color: rgb(var(--color-border-focus-info) / 0.7)
}

  input[type='radio']:enabled:focus-visible:checked:not(:active), input[type='radio']:enabled:hover:checked:not(:active) {

    --tw-shadow: 0 0 #0000;

    --tw-shadow-colored: 0 0 #0000;

    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

  input[type='radio']:enabled:focus-visible:not(:active), input[type='radio']:enabled:hover:not(:active) {

    border-color: rgb(var(--color-border-inverse))
}

  input[type='radio']:checked,
    input[type='radio']:active {

    --tw-shadow: inset 0 0 0 1px;

    --tw-shadow-colored: inset 0 0 0 1px var(--tw-shadow-color);

    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    --tw-shadow-color: #FFFFFF;

    --tw-shadow: var(--tw-shadow-colored)
}

  input[type='radio']:checked:where([data-theme="dark"], [data-theme="dark"] *),
    input[type='radio']:active:where([data-theme="dark"], [data-theme="dark"] *) {

    --tw-shadow-color: #000000;

    --tw-shadow: var(--tw-shadow-colored)
}

  input[type='radio']:disabled {

    cursor: not-allowed;

    opacity: 0.5
}</style>
