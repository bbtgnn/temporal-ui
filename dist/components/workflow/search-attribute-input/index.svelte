<script>import Button from '../../../holocene/button.svelte';
import ChipInput from '../../../holocene/input/chip-input.svelte';
import Input from '../../../holocene/input/input.svelte';
import NumberInput from '../../../holocene/input/number-input.svelte';
import Option from '../../../holocene/select/option.svelte';
import Select from '../../../holocene/select/select.svelte';
import { translate } from '../../../i18n/translate';
import { customSearchAttributeOptions, customSearchAttributes, } from '../../../stores/search-attributes';
import { SEARCH_ATTRIBUTE_TYPE } from '../../../types/workflows';
import DatetimeInput from './datetime-input.svelte';
export let attributesToAdd = [];
export let attribute;
export let onRemove;
$: isDisabled = (value) => {
    return !!attributesToAdd.find((a) => a.label === value);
};
const getType = (attr) => $customSearchAttributes[attr];
const handleAttributeChange = (attr) => {
    const type = getType(attr);
    if (type === SEARCH_ATTRIBUTE_TYPE.KEYWORDLIST) {
        attribute.value = [];
    }
    else if (attribute.type !== type) {
        attribute.value = null;
    }
    attribute.type = type;
};
</script>

<div
  class="flex flex-col gap-2 border-b border-subtle pb-4 sm:flex-row sm:gap-4"
>
  <div class="flex min-w-fit justify-between gap-2 sm:gap-4">
    <div class="grow [&_button]:w-full">
      <Select
        id="search-attribute"
        label={translate('workflows.custom-search-attribute')}
        placeholder={translate('workflows.select-attribute')}
        bind:value={attribute.label}
        onChange={handleAttributeChange}
      >
        {#each $customSearchAttributeOptions as { value, label, type }}
          <Option disabled={isDisabled(value)} {value} description={type}
            >{label}</Option
          >
        {/each}
      </Select>
    </div>
    <Button
      variant="ghost"
      leadingIcon="close"
      class="mt-6 w-10 rounded-full sm:hidden"
      on:click={() => onRemove(attribute.label)}
    />
  </div>
  {#if attribute.type === SEARCH_ATTRIBUTE_TYPE.BOOL}
    <Select
      label={translate('common.value')}
      id="attribute-value"
      bind:value={attribute.value}
    >
      <Option value={true}>{translate('common.true')}</Option>
      <Option value={false}>{translate('common.false')}</Option>
    </Select>
  {:else if attribute.type === SEARCH_ATTRIBUTE_TYPE.DATETIME}
    <DatetimeInput bind:value={attribute.value} />
  {:else if attribute.type === SEARCH_ATTRIBUTE_TYPE.INT || attribute.type === SEARCH_ATTRIBUTE_TYPE.DOUBLE}
    <NumberInput
      label={translate('common.value')}
      id="attribute-value"
      bind:value={attribute.value}
    />
  {:else if attribute.type === SEARCH_ATTRIBUTE_TYPE.KEYWORDLIST}
    <ChipInput
      label={translate('common.value')}
      id="attribute-value"
      bind:chips={attribute.value}
      class="w-full"
      removeChipButtonLabel={(chip) =>
        translate('workflows.remove-keyword-label', { keyword: chip })}
    />
  {:else if attribute.type === SEARCH_ATTRIBUTE_TYPE.TEXT || attribute.type === SEARCH_ATTRIBUTE_TYPE.KEYWORD || attribute.type === SEARCH_ATTRIBUTE_TYPE.UNSPECIFIED}
    <Input
      label={translate('common.value')}
      id="attribute-value"
      class="grow"
      bind:value={attribute.value}
    />
  {:else}
    <Input
      label={translate('common.value')}
      id="attribute-value"
      class="grow"
      placeholder={translate('workflows.unsupported-attribute')}
      error
      disabled
      value=""
    />
  {/if}
  <Button
    variant="ghost"
    leadingIcon="close"
    class="mt-6 w-10 rounded-full max-sm:hidden"
    on:click={() => onRemove(attribute.label)}
  />
</div>
