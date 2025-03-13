<script>import { getContext } from 'svelte';
import Button from '../../holocene/button.svelte';
import ChipInput from '../../holocene/input/chip-input.svelte';
import Input from '../../holocene/input/input.svelte';
import { translate } from '../../i18n/translate';
import { isInConditional } from '../../utilities/is';
import { formatListFilterValue } from '../../utilities/query/search-attribute-filter';
import ConditionalMenu from './conditional-menu.svelte';
import { FILTER_CONTEXT } from './index.svelte';
const { filter, handleSubmit } = getContext(FILTER_CONTEXT);
$: ({ value, conditional } = $filter);
$: _value = value;
$: chips = formatListFilterValue(_value);
$: options = [
    { value: 'in', label: 'In' },
    { value: '=', label: translate('common.equal-to') },
    { value: '!=', label: translate('common.not-equal-to') },
];
function onSubmit() {
    $filter.value = `(${chips.map((item) => `"${item}"`).join(', ')})`;
    handleSubmit();
}
function handleKeydown(e) {
    if (e.key === 'Enter' && _value !== '') {
        e.preventDefault();
        $filter.value = _value;
        handleSubmit();
    }
}
</script>

<form class="flex grow" on:submit|preventDefault={onSubmit}>
  <ConditionalMenu inputId="list-filter" noBorderLeft {options}>
    {#if isInConditional(conditional)}
      <ChipInput
        label={$filter.attribute}
        labelHidden
        id="list-filter"
        bind:chips
        class="w-full [&_*]:border-l-0 [&_*]:border-r-0"
        removeChipButtonLabel={(chip) =>
          translate('workflows.remove-keyword-label', { keyword: chip })}
        placeholder="{translate('common.enter')} {$filter.attribute}"
        external
      />
      <div class="flex h-fit items-center">
        <Button disabled={!chips.length} type="submit">
          {translate('common.search')}
        </Button>
        <slot />
      </div>
    {:else}
      <Input
        label={$filter.attribute}
        labelHidden
        id="list-filter"
        type="search"
        placeholder={`${translate('common.enter')} ${$filter.attribute}`}
        icon="search"
        class="w-full [&_*]:border-l-0"
        bind:value={_value}
        on:keydown={handleKeydown}
      />
      <slot />
    {/if}
  </ConditionalMenu>
</form>
