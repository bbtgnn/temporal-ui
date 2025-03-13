<script>var _a;
import { getContext } from 'svelte';
import { Menu, MenuButton, MenuContainer, MenuItem, } from '../../holocene/menu';
import { translate } from '../../i18n/translate';
import { isNullConditional } from '../../utilities/is';
import { FILTER_CONTEXT } from './index.svelte';
const { filter, focusedElementId, handleSubmit } = getContext(FILTER_CONTEXT);
const defaultConditionOptions = [
    { value: '>' },
    { value: '>=' },
    { value: '=' },
    { value: '!=' },
    { value: '<=' },
    { value: '<' },
];
export let options = defaultConditionOptions;
export let disabled = false;
export let inputId;
export let noBorderLeft = false;
export let noBorderRight = false;
let conditionalOptions = [
    ...options,
    { value: 'is', label: translate('common.is-null') },
    { value: 'is not', label: translate('common.is-not-null') },
];
$: filterConditionalOption = conditionalOptions.find((o) => o.value === $filter.conditional);
$: filterConditionalOption, updateFilterConditional();
$: isNullFilter = isNullConditional($filter.conditional);
$: selectedOption = filterConditionalOption !== null && filterConditionalOption !== void 0 ? filterConditionalOption : conditionalOptions[0];
$: selectedLabel = (_a = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) !== null && _a !== void 0 ? _a : selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value;
function handleNullFilter() {
    $filter.value = null;
    handleSubmit();
}
function updateFilterConditional() {
    if (!filterConditionalOption)
        $filter.conditional = conditionalOptions[0].value;
}
</script>

<MenuContainer>
  <MenuButton
    class="{noBorderRight ? '!border-r-0' : ''} {noBorderLeft
      ? '!border-l-0'
      : ''} whitespace-nowrap"
    id="conditional-menu-button"
    controls="conditional-menu"
    {disabled}
  >
    {selectedLabel}
  </MenuButton>
  <Menu id="conditional-menu" class="whitespace-nowrap">
    {#each conditionalOptions as { value, label }}
      <MenuItem
        on:click={() => {
          $filter.conditional = value;
          $focusedElementId = inputId;
          if (isNullConditional(value)) handleNullFilter();
        }}
      >
        {label ?? value}
      </MenuItem>
    {/each}
  </Menu>
</MenuContainer>
{#if !isNullFilter}
  <slot />
{/if}
