<script>import { writable } from 'svelte/store';
import { createEventDispatcher } from 'svelte';
import { twMerge as merge } from 'tailwind-merge';
import ComboboxOption from './combobox-option.svelte';
import Label from '../label.svelte';
import MenuContainer from '../menu/menu-container.svelte';
import Menu from '../menu/menu.svelte';
import Badge from '../badge.svelte';
import Button from '../button.svelte';
import Chip from '../chip.svelte';
import Icon from '../icon/icon.svelte';
import MenuDivider from '../menu/menu-divider.svelte';
import Tooltip from '../tooltip.svelte';
const dispatch = createEventDispatcher();
let className = '';
export { className as class };
export let id;
export let label;
export let multiselect = false;
export let value = multiselect ? [] : undefined;
export let noResultsText;
export let disabled = false;
export let labelHidden = false;
export let options;
export let placeholder = null;
export let readonly = false;
export let required = false;
export let leadingIcon = null;
export let optionValueKey = null;
export let optionLabelKey = optionValueKey;
export let minSize = 0;
export let maxSize = 120;
export let error = '';
export let valid = true;
export let displayChips = true;
export let chipLimit = 5;
export let selectAllLabel = 'Select All';
export let deselectAllLabel = 'Deselect All';
export let removeChipLabel = 'Remove Option';
export let actionTooltip = '';
export let href = '';
export let hrefDisabled = false;
export let loading = false;
export let loadingText = 'Loading more results';
export let numberOfItemsSelectedLabel = (count) => `${count} option${count > 1 ? 's' : ''} selected`;
let displayValue = '';
// Filter value and display value are close but different in a few cases
// primary difference is when opening a select box display value is filled
// and filter value should be blank
let filterValue = '';
let selectedOption;
let menuElement;
let inputElement;
export let open = writable(false);
export let maxMenuHeight = 'max-h-[20rem]';
// We need this piece of code to focus the element when externally modifying the
// open store. Specifically we use this behaviour in bottom nav to focus the combobox
// after the bottom nav is clicked
$: {
    if ($open && inputElement && document.activeElement !== inputElement) {
        inputElement.focus();
        inputElement.select();
    }
}
// We want this to react to external changes to the options prop to support async use cases
$: list = filterOptions(filterValue, options);
$: {
    if (inputElement && displayValue) {
        if (displayValue.length < minSize) {
            inputElement.size = minSize;
        }
        else if (displayValue.length > maxSize) {
            inputElement.size = maxSize;
        }
        else {
            inputElement.size = displayValue.length;
        }
    }
}
$: if (!multiselect) {
    selectedOption = options.find((option) => {
        if (isStringOption(option)) {
            return option === value;
        }
        if (isObjectOption(option) && canRenderCustomOption(option)) {
            return option[optionValueKey] === value;
        }
    });
    displayValue = getDisplayValue(selectedOption);
}
const openList = () => {
    $open = true;
    filterValue = '';
    inputElement.focus();
    inputElement.select();
};
const closeList = () => {
    if (!$open)
        return;
    $open = false;
    dispatch('close', { selectedOption });
    resetValueAndOptions();
};
const handleMenuClose = () => {
    dispatch('close', { selectedOption });
    resetValueAndOptions();
};
const resetValueAndOptions = () => {
    displayValue = getDisplayValue(selectedOption);
    list = options;
};
const isArrayValue = (value) => {
    return Array.isArray(value);
};
const isStringOption = (option) => {
    return typeof option === 'string';
};
const isObjectOption = (option) => {
    return typeof option === 'object';
};
const canRenderCustomOption = (option) => {
    if (option === null)
        return false;
    if (typeof option !== 'object')
        return false;
    return (optionValueKey !== null &&
        optionLabelKey !== null &&
        optionValueKey in option &&
        optionLabelKey in option);
};
const getDisplayValue = (option) => {
    if (!option) {
        if (isArrayValue(value)) {
            return '';
        }
        return value !== null && value !== void 0 ? value : '';
    }
    if (isStringOption(option)) {
        return option;
    }
    if (isObjectOption(option) && canRenderCustomOption(option)) {
        return String(option[optionLabelKey]);
    }
};
/**
 * Given an option that could be an object of type T set internal value in the component to string/string[]
 * or cast it to a string
 * @param option
 */
const setValue = (option) => {
    if (isStringOption(option)) {
        if (isArrayValue(value)) {
            if (value.includes(option)) {
                value = value.filter((o) => o !== option);
            }
            else {
                value = [...value, option];
            }
        }
        else {
            value = option;
        }
    }
    if (isObjectOption(option) && canRenderCustomOption(option)) {
        const opt = String(option[optionValueKey]);
        if (isArrayValue(value)) {
            if (value.includes(opt)) {
                value = value.filter((o) => o !== opt);
            }
            else {
                value = [...value, opt];
            }
        }
        else {
            value = opt;
        }
    }
};
const handleSelectOption = (option) => {
    setValue(option);
    dispatch('change', { value: option });
    if (!multiselect) {
        resetValueAndOptions();
    }
};
const removeOption = (option) => {
    if (isArrayValue(value)) {
        value = value.filter((o) => o !== option);
    }
};
const selectAll = () => {
    if (!multiselect || !isArrayValue(value))
        return;
    value = list.map((option) => {
        if (isObjectOption(option) && canRenderCustomOption(option)) {
            return String(option[optionValueKey]);
        }
        else if (isStringOption(option)) {
            return option;
        }
    });
};
const deselectAll = () => {
    value = [];
};
const focusFirstOption = () => {
    const listItemElement = menuElement.querySelector('li[role="option"]:not([aria-disabled="true"])');
    if (listItemElement) {
        requestAnimationFrame(() => listItemElement.focus());
    }
};
const handleInputKeydown = (event) => {
    switch (event.key) {
        case 'Escape':
            closeList();
            break;
        case 'ArrowDown':
            openList();
            focusFirstOption();
            break;
        case 'Enter':
            openList();
            focusFirstOption();
            break;
        case 'ArrowUp':
        case 'ArrowRight':
        case 'ArrowLeft':
            break;
        default:
            break;
    }
};
const handleInput = (event) => {
    if (!$open)
        $open = true;
    // Reactive statement at top makes this work, not my favorite tho
    displayValue = event.currentTarget.value;
    filterValue = displayValue;
    dispatch('input', displayValue);
};
function filterOptions(value, options) {
    dispatch('filter', displayValue);
    return options.filter((option) => {
        if (isStringOption(option)) {
            return option.toLowerCase().includes(value.toLowerCase());
        }
        if (isObjectOption(option) && canRenderCustomOption(option)) {
            return String(option[optionLabelKey])
                .toLowerCase()
                .includes(value.toLowerCase());
        }
    });
}
const handleInputClick = () => {
    if (!$open)
        openList();
};
const isSelected = (option, value) => {
    if (isObjectOption(option)) {
        const o = String(option[optionValueKey]);
        return isArrayValue(value) ? value.includes(o) : value === o;
    }
    else if (isStringOption(option)) {
        return isArrayValue(value) ? value.includes(option) : value === option;
    }
    return false;
};
</script>

<MenuContainer {open} on:close={handleMenuClose}>
  <Label class="pb-1" hidden={labelHidden} {required} {label} for={id} />

  <div class="combobox-wrapper" class:disabled class:invalid={!valid}>
    {#if leadingIcon}
      <Icon class="ml-2 shrink-0" name={leadingIcon} />
    {/if}
    <div
      class="input-wrapper"
      class:gap-1={multiselect}
      class:p-1={multiselect && displayChips}
    >
      {#if multiselect && isArrayValue(value) && value.length > 0}
        {#if displayChips}
          {#each value.slice(0, chipLimit) as v}
            <Chip
              on:remove={() => removeOption(v)}
              removeButtonLabel={removeChipLabel}>{v}</Chip
            >
          {/each}
          {#if value.length > chipLimit}
            <p>+{value.slice(chipLimit).length}</p>
          {/if}
        {:else}
          <Badge>{numberOfItemsSelectedLabel(value.length)}</Badge>
        {/if}
      {/if}
      <input
        {id}
        {placeholder}
        {required}
        {readonly}
        {disabled}
        type="text"
        value={displayValue}
        class:disabled
        class={merge('combobox-input', className)}
        role="combobox"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
        data-lpignore="true"
        data-1p-ignore="true"
        aria-controls="{id}-listbox"
        aria-expanded={$open}
        aria-required={required}
        aria-autocomplete="list"
        on:focus|stopPropagation={openList}
        on:input|stopPropagation={handleInput}
        on:keydown|stopPropagation={handleInputKeydown}
        on:click|stopPropagation={handleInputClick}
        data-testid={$$props['data-testid'] ?? id}
        bind:this={inputElement}
        {...$$restProps}
      />
    </div>
    {#if $$slots.action}
      <div class="ml-1 flex h-full items-start border-l border-subtle p-0.5">
        {#if actionTooltip}
          <Tooltip text={actionTooltip} right>
            <slot name="action" />
          </Tooltip>
        {:else}
          <slot name="action" />
        {/if}
      </div>
    {:else if href}
      <div class="ml-1 flex h-full items-center border-l border-subtle p-0.5">
        {#if actionTooltip}
          <Tooltip text={actionTooltip} right>
            <Button
              variant="ghost"
              size="xs"
              {href}
              disabled={hrefDisabled}
              leadingIcon="external-link"
            />
          </Tooltip>
        {:else}
          <Button
            variant="ghost"
            size="xs"
            {href}
            disabled={hrefDisabled}
            leadingIcon="external-link"
          />
        {/if}
      </div>
    {/if}
  </div>

  <Menu
    keepOpen={multiselect}
    bind:menuElement
    id="{id}-listbox"
    role="listbox"
    class="w-full"
    maxHeight={maxMenuHeight}
  >
    {#if multiselect && isArrayValue(value)}
      <ComboboxOption
        disabled={value.length === options.length}
        on:click={selectAll}
        label={selectAllLabel}
      />
      <ComboboxOption
        disabled={value.length === 0}
        on:click={deselectAll}
        label={deselectAllLabel}
      />
      <MenuDivider />
    {/if}

    {#each list as option}
      <ComboboxOption
        on:click={() => handleSelectOption(option)}
        selected={isSelected(option, value)}
        label={getDisplayValue(option)}
      />
    {:else}
      {#if loading === false}
        <ComboboxOption disabled label={noResultsText} />
      {/if}
    {/each}

    {#if loading}
      <ComboboxOption disabled label={loadingText}>
        <Icon slot="leading" name="spinner" class="animate-spin" />
      </ComboboxOption>
    {/if}
  </Menu>

  {#if error && !valid}
    <span class="error">{error}</span>
  {/if}
</MenuContainer>

<style>
  .combobox-wrapper {

    background-color: rgb(var(--color-surface-primary));

    color: rgb(var(--color-text-primary));

    display: flex;

    max-height: 7rem;

    min-height: 2.5rem;

    width: 100%;

    flex-direction: row;

    align-items: center;

    overflow: auto;

    border-width: 1px;

    border-color: rgb(var(--color-border-subtle));

    font-size: 0.875rem;

    line-height: 1.25rem
}

.combobox-wrapper:focus-within:where([data-theme="dark"], [data-theme="dark"] *) {

    background-color: rgb(var(--color-surface-primary));

    color: rgb(var(--color-text-primary))
}

.combobox-wrapper:focus-within {

    border-color: rgb(var(--color-interactive-surface));

    outline: 2px solid transparent;

    outline-offset: 2px;

    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);

    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

    --tw-ring-color: rgb(var(--color-border-focus-info) / 0.7)
}

    .combobox-wrapper.invalid {

    border-width: 1px;

    border-color: rgb(var(--color-border-danger));

    color: rgb(var(--color-text-danger))
}

    .combobox-wrapper.invalid:focus-within {

    --tw-ring-color: rgb(var(--color-border-focus-danger) / 0.7)
}

    .combobox-wrapper.disabled {

    opacity: 0.5
}

  .error {

    font-size: 0.75rem;

    line-height: 1rem;

    color: rgb(var(--color-text-danger))
}

  .input-wrapper {

    display: flex;

    width: 100%;

    flex-wrap: wrap;

    align-items: center
}

  .input-wrapper input {

    text-indent: 0.5rem
}

  .combobox-input {

    display: flex;

    flex-grow: 1;

    background-color: transparent;

    color: rgb(var(--color-text-primary))
}

  .combobox-input::-moz-placeholder {

    color: rgb(var(--color-text-secondary))
}

  .combobox-input::placeholder {

    color: rgb(var(--color-text-secondary))
}

  .combobox-input:focus {

    outline: 2px solid transparent;

    outline-offset: 2px
}</style>
