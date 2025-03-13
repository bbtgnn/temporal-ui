<script>import Button from '../../holocene/button.svelte';
import { translate } from '../../i18n/translate';
import { customSearchAttributes, } from '../../stores/search-attributes';
import { SEARCH_ATTRIBUTE_TYPE } from '../../types/workflows';
import SearchAttributeInput from './search-attribute-input/index.svelte';
let className = '';
export { className as class };
export let attributesToAdd = [];
const addSearchAttribute = () => {
    attributesToAdd = [
        ...attributesToAdd,
        { label: null, value: null, type: SEARCH_ATTRIBUTE_TYPE.UNSPECIFIED },
    ];
};
$: searchAttributes = Object.keys($customSearchAttributes);
const onRemove = (attribute) => {
    attributesToAdd = attributesToAdd.filter((a) => a.label !== attribute);
};
</script>

<div class="flex flex-col gap-4 {className}">
  {#each attributesToAdd as attribute}
    <SearchAttributeInput {attributesToAdd} bind:attribute {onRemove} />
  {/each}
  <Button
    variant="ghost"
    leadingIcon="add"
    class="max-sm:w-full"
    on:click={addSearchAttribute}
    disabled={!searchAttributes.length ||
      attributesToAdd.length === searchAttributes.length ||
      attributesToAdd.filter(
        (a) =>
          a.value === '' ||
          a.value === null ||
          (Array.isArray(a.value) && a.value.length === 0),
      ).length > 0}>{translate('workflows.add-search-attribute')}</Button
  >
</div>
