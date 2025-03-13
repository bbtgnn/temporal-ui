<script>import { writable } from 'svelte/store';
import { afterUpdate, onDestroy } from 'svelte';
import { twMerge as merge } from 'tailwind-merge';
import Chip from '../chip.svelte';
import Label from '../label.svelte';
export let id;
export let chips;
export let label;
export let labelHidden = false;
export let placeholder = '';
export let name = id;
export let disabled = false;
export let required = false;
export let hintText = '';
export let validator = () => true;
export let removeChipButtonLabel;
export let external = false;
const values = writable(chips);
let displayValue = '';
let shouldScrollToInput = false;
let inputContainer;
let input;
$: chips, ($values = chips);
$: invalid = $values.some((chip) => !validator(chip));
let className = '';
export { className as class };
const scrollToInput = () => {
    let rect = input.getBoundingClientRect();
    inputContainer.scrollTo(rect.x, rect.y);
    shouldScrollToInput = false;
};
const unsubscribe = values.subscribe((updatedChips) => {
    shouldScrollToInput = updatedChips.length > chips.length;
    chips = updatedChips;
});
afterUpdate(() => {
    if (shouldScrollToInput) {
        scrollToInput();
    }
});
onDestroy(() => {
    unsubscribe();
});
const handleKeydown = (e) => {
    const value = displayValue.trim();
    if ((e.key === ',' || e.key === 'Enter') && value !== '') {
        e.preventDefault();
        values.update((previous) => [...previous, value]);
        displayValue = '';
    }
    const eventTarget = e.target;
    if (e.key === 'Backspace' &&
        eventTarget &&
        eventTarget.value === '' &&
        $values.length > 0) {
        values.update((previous) => previous.slice(0, -1));
    }
};
const handlePaste = (e) => {
    e.preventDefault();
    const clipboardContents = e.clipboardData.getData('text/plain');
    values.update((previous) => [
        ...previous,
        ...clipboardContents.split(',').map((content) => content.trim()),
    ]);
};
const handleBlur = () => {
    const value = displayValue.trim();
    if (value !== '') {
        values.update((previous) => [...previous, value]);
        displayValue = '';
    }
};
const removeChip = (index) => {
    values.update((previous) => {
        previous.splice(index, 1);
        return previous;
    });
};
</script>

<div class={merge(disabled && 'cursor-not-allowed', className)}>
  <Label
    class="pb-1"
    {required}
    {label}
    {disabled}
    hidden={labelHidden}
    for={id}
  />
  <div
    bind:this={inputContainer}
    class={merge(
      'surface-primary flex max-h-20 min-h-[2.5rem] w-full flex-row flex-wrap gap-1 overflow-y-scroll border border-subtle p-2 text-sm text-primary focus-within:border-interactive focus-within:ring-2 focus-within:ring-primary/70',
      disabled && 'cursor-not-allowed opacity-65',
      invalid && 'invalid',
    )}
  >
    {#if $values.length > 0 && !external}
      {#each $values as chip, i (`${chip}-${i}`)}
        {@const valid = validator(chip)}
        <Chip
          removeButtonLabel={typeof removeChipButtonLabel === 'string'
            ? removeChipButtonLabel
            : removeChipButtonLabel(chip)}
          on:remove={() => removeChip(i)}
          intent={valid ? 'default' : 'warning'}
          {disabled}>{chip}</Chip
        >
      {/each}
    {/if}
    <input
      data-lpignore="true"
      data-1p-ignore="true"
      autocomplete="off"
      class:cursor-not-allowed={disabled}
      {disabled}
      {placeholder}
      {id}
      {name}
      {required}
      multiple
      data-testid={id}
      bind:this={input}
      bind:value={displayValue}
      on:blur={handleBlur}
      on:keydown|stopPropagation={handleKeydown}
      on:paste={handlePaste}
    />
  </div>
  {#if invalid && hintText}
    <span class="hint">
      {hintText}
    </span>
  {/if}
  {#if $values.length > 0 && external}
    <div class="mt-1 flex flex-row flex-wrap gap-1">
      {#each $values as chip, i (`${chip}-${i}`)}
        {@const valid = validator(chip)}
        <Chip
          removeButtonLabel={typeof removeChipButtonLabel === 'string'
            ? removeChipButtonLabel
            : removeChipButtonLabel(chip)}
          on:remove={() => removeChip(i)}
          intent={valid ? 'default' : 'warning'}
          {disabled}>{chip}</Chip
        >
      {/each}
    </div>
  {/if}
</div>

<style>
  .invalid {

    border-color: rgb(var(--color-border-danger))
}

.invalid:focus-within {

    border-color: rgb(var(--color-border-danger));

    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);

    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

    --tw-ring-color: rgb(var(--color-border-focus-danger) / 0.7)
}

  input {

    background-color: rgb(var(--color-surface-primary));

    color: rgb(var(--color-text-primary));

    display: inline-block;

    width: 100%
}

  input:focus {

    outline: 2px solid transparent;

    outline-offset: 2px
}

  .hint {

    font-size: 0.75rem;

    line-height: 1rem;

    color: rgb(var(--color-text-danger))
}</style>
