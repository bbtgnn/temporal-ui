<script>var _a;
import { getContext } from 'svelte';
import { Menu, MenuButton, MenuContainer, MenuItem, } from '../../holocene/menu';
import { translate } from '../../i18n/translate';
import { isNullConditional } from '../../utilities/is';
import { FILTER_CONTEXT } from './index.svelte';
const { filter, handleSubmit } = getContext(FILTER_CONTEXT);
const options = [
    { value: 'true', label: translate('common.true') },
    { value: 'false', label: translate('common.false') },
    { value: 'is', label: translate('common.is-null') },
    { value: 'is not', label: translate('common.is-not-null') },
];
$: selectedOption =
    (_a = options.find((o) => o.value === $filter.value || o.value === $filter.conditional)) !== null && _a !== void 0 ? _a : options[0];
$: selectedLabel = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label;
</script>

<MenuContainer>
  <MenuButton
    class="!border-l-0"
    id="boolean-filter"
    controls="boolean-filter-menu"
  >
    {selectedLabel}
  </MenuButton>
  <Menu id="boolean-filter-menu">
    {#each options as { value, label }}
      <MenuItem
        on:click={() => {
          if (isNullConditional(value)) {
            $filter.conditional = value;
            $filter.value = null;
          } else {
            $filter.conditional = '=';
            $filter.value = value;
          }
          handleSubmit();
        }}
        class="text-nowrap"
      >
        {label}
      </MenuItem>
    {/each}
  </Menu>
</MenuContainer>
