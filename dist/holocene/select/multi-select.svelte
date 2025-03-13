<script>import { writable } from 'svelte/store';
import Checkbox from '../checkbox.svelte';
import { Menu, MenuButton, MenuContainer, MenuDivider, MenuItem, } from '../menu';
import Icon from '../icon/icon.svelte';
export let options = [];
export let initialSelected = [];
export let onChange;
export let label;
export let id;
export let variant = 'secondary';
export let icon = undefined;
export let selectAllLabel;
export let clearAllLabel;
export let active = false;
export let disabled = false;
export let position = 'left';
export let initialSelectedAll = true;
let selectedOptions = initialSelected.length
    ? initialSelected
    : initialSelectedAll
        ? options
        : [];
const open = writable(false);
const onOptionClick = (option) => {
    if (selectedOptions.some((s) => s.value === option.value)) {
        selectedOptions = selectedOptions.filter((s) => s.value !== option.value);
    }
    else {
        selectedOptions = [...selectedOptions, option];
    }
    onChange(selectedOptions);
};
const onSelectAllOptionClick = () => {
    selectedOptions = options;
    onChange(selectedOptions);
};
const onRemoveAllOptionClick = () => {
    selectedOptions = [];
    onChange(selectedOptions);
};
</script>

<MenuContainer {open}>
  <MenuButton hasIndicator controls={id} {variant} {active} {disabled}>
    {#if icon}<Icon class="md:hidden" name={icon} />{/if}
    <span class="max-md:hidden">{label}</span>
  </MenuButton>
  <Menu {id} keepOpen {position}>
    {#each options as option (option)}
      {@const checked = Boolean(
        selectedOptions.find((s) => s.value === option.value),
      )}
      <MenuItem
        data-testid={option.label}
        on:click={() => {
          onOptionClick(option);
        }}
      >
        <Checkbox
          on:click={() => onOptionClick(option)}
          slot="leading"
          {checked}
          label={option.label}
          labelHidden
        />
        <div class="flex items-center gap-2">
          {#if option.icon}
            <Icon slot="trailing" name={option.icon} />
          {/if}
          {option.label}
        </div>
      </MenuItem>
    {/each}
    <MenuDivider />
    <MenuItem
      data-testid="multiselect-select-all"
      on:click={onSelectAllOptionClick}
    >
      {selectAllLabel}
    </MenuItem>
    <MenuItem
      data-testid="multiselect-remove-all"
      on:click={onRemoveAllOptionClick}
    >
      {clearAllLabel}
    </MenuItem>
  </Menu>
</MenuContainer>
