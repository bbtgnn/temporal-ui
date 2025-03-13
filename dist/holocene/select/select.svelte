<script context="module">export const SELECT_CONTEXT = 'select-context';
</script>

<script>import { writable } from 'svelte/store';
import { onMount, setContext } from 'svelte';
import Icon from '../icon/icon.svelte';
import Label from '../label.svelte';
import { Menu, MenuButton, MenuContainer } from '../menu';
export let label;
export let labelHidden = false;
export let id;
export let value = undefined;
export let placeholder = '';
export let disabled = false;
export let leadingIcon = null;
export let onChange = () => { };
export let menuClass = undefined;
export let variant = 'secondary';
export let required = false;
// We get the "true" value of this further down but before the mount happens we should have some kind of value
const valueCtx = writable(value);
const optionsCtx = writable([]);
const labelCtx = writable(value === null || value === void 0 ? void 0 : value.toString());
const open = writable(false);
$: value, updateContext();
function updateContext() {
    $valueCtx = value;
    $labelCtx = getLabelFromOptions(value);
}
const handleChange = (newValue) => {
    value = newValue;
    onChange(value);
};
function getLabelFromOptions(value) {
    const selectedOption = $optionsCtx.find((option) => option.value === value);
    if (selectedOption !== undefined) {
        return selectedOption.label;
    }
    return '';
}
setContext(SELECT_CONTEXT, {
    selectValue: valueCtx,
    selectLabel: labelCtx,
    options: optionsCtx,
    open,
    handleChange,
});
onMount(() => {
    // After all the Options are mounted use context to read the label assocaited with the value
    $labelCtx = getLabelFromOptions(value);
});
</script>

<MenuContainer {open}>
  <Label class="pb-1" {label} hidden={labelHidden} for={id} {required} />
  {#key $labelCtx}
    <MenuButton
      hasIndicator={!disabled}
      {disabled}
      controls="{id}-select"
      {variant}
      data-testid={`${$$restProps['data-testid'] ?? ''}-button`}
    >
      <slot name="leading" slot="leading">
        {#if leadingIcon}
          <Icon name={leadingIcon} />
        {/if}
      </slot>
      <input
        {id}
        value={!value && placeholder !== '' ? placeholder : $labelCtx}
        tabindex="-1"
        disabled
        class:disabled
        {required}
        aria-required={required}
        {...$$restProps}
      />
      {#if disabled}
        <Icon slot="trailing" name="lock" />
      {/if}
    </MenuButton>
  {/key}
  <Menu role="listbox" id="{id}-select" class={menuClass}>
    <slot />
  </Menu>
</MenuContainer>

<style>
  input {
    pointer-events: none;
    width: 100%;
    background-color: transparent;
    font-size: 0.875rem;
    line-height: 1.25rem
}</style>
