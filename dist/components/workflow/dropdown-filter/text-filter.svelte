<script>import { page } from '$app/stores';
import Icon from '../../../holocene/icon/icon.svelte';
import Input from '../../../holocene/input/input.svelte';
import { Menu, MenuButton, MenuContainer } from '../../../holocene/menu';
import { translate } from '../../../i18n/translate';
import { attributeToHumanReadable, attributeToId, } from '../../../models/workflow-filters';
import { workflowFilters } from '../../../stores/filters';
import { SEARCH_ATTRIBUTE_TYPE } from '../../../types/workflows';
import { updateQueryParamsFromFilter } from '../../../utilities/query/to-list-workflow-filters';
let value = '';
export let attribute;
const getOtherFilters = () => $workflowFilters.filter((f) => f.attribute !== attribute);
$: idFilter = $workflowFilters.find((f) => f.attribute === attribute);
const onInput = (e) => {
    const { value } = e.target;
    if (value) {
        const filter = {
            attribute,
            type: SEARCH_ATTRIBUTE_TYPE.KEYWORD,
            value,
            conditional: '=',
            operator: '',
            parenthesis: '',
        };
        $workflowFilters = [...getOtherFilters(), filter];
    }
    else {
        $workflowFilters = [...getOtherFilters()];
    }
    updateQueryParamsFromFilter($page.url, $workflowFilters, true);
};
function handleShowInput(event) {
    const { open } = event.detail;
    if (open && (idFilter === null || idFilter === void 0 ? void 0 : idFilter.value)) {
        value = idFilter.value;
    }
    else if (open && !idFilter && value) {
        value = '';
    }
}
function handleClearInput() {
    $workflowFilters = [...getOtherFilters()];
    updateQueryParamsFromFilter($page.url, $workflowFilters, true);
}
</script>

<MenuContainer>
  <MenuButton
    data-testid="{attributeToId[attribute]}-filter-button"
    variant="table-header"
    controls="{attributeToId[attribute]}-filter-menu"
    on:click={handleShowInput}
  >
    {attributeToHumanReadable[attribute]}
    <Icon name="filter" slot="trailing" />
  </MenuButton>
  <Menu keepOpen id="{attributeToId[attribute]}-filter-menu" class="w-[500px]">
    <Input
      icon="search"
      type="search"
      label={translate('common.search')}
      labelHidden
      id={attributeToId[attribute]}
      placeholder={attributeToHumanReadable[attribute]}
      class="flex items-center p-2 transition-all hover:cursor-pointer"
      autoFocus
      clearable
      clearButtonLabel={translate('common.clear-input-button-label')}
      on:input={onInput}
      on:clear={handleClearInput}
      bind:value
    />
  </Menu>
</MenuContainer>
