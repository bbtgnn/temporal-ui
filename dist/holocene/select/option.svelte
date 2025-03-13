<script context="module">export const EMPTY_OPTION = {
    label: '',
    value: '',
};
</script>

<script>import { createEventDispatcher, getContext, onDestroy, onMount, } from 'svelte';
import { MenuItem } from '../menu';
import { SELECT_CONTEXT } from './select.svelte';
const { selectValue, handleChange, options } = getContext(SELECT_CONTEXT);
const dispatch = createEventDispatcher();
export let value;
export let description = '';
export let disabled = false;
let className = '';
export { className as class };
let selected = false;
let _value;
let slotWrapper;
let optionElement;
let label;
$: {
    if (slotWrapper) {
        _value = value !== null && value !== void 0 ? value : slotWrapper.textContent;
        selected = $selectValue === _value;
        label = slotWrapper.textContent;
    }
}
onMount(() => {
    if (slotWrapper) {
        label = slotWrapper.textContent;
        $options.push({ value, label, nativeElement: optionElement });
    }
});
onDestroy(() => {
    // Remove options from the optionContext if it no longer exists
    let theIndex = $options.findIndex((option) => option.value === value);
    if (theIndex !== undefined) {
        $options.splice(theIndex, 1);
    }
});
const handleOptionClick = () => {
    handleChange(_value);
    dispatch('click', { value: _value });
};
</script>

<MenuItem
  on:click={handleOptionClick}
  role="option"
  {selected}
  {description}
  {disabled}
  class={className}
  data-testid={$$restProps['data-testid'] ?? ''}
>
  <slot name="leading" slot="leading" />
  <span bind:this={slotWrapper}>
    <slot />
  </span>
  <slot name="trailing" slot="trailing" />
</MenuItem>
