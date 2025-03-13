<script>import { getContext } from 'svelte';
import Input from '../../holocene/input/input.svelte';
import { translate } from '../../i18n/translate';
import { prefixSearchEnabled } from '../../stores/capability-enablement';
import { SEARCH_ATTRIBUTE_TYPE } from '../../types/workflows';
import ConditionalMenu from './conditional-menu.svelte';
import { FILTER_CONTEXT } from './index.svelte';
const { filter, handleSubmit } = getContext(FILTER_CONTEXT);
$: ({ value } = $filter);
$: _value = value;
function handleKeydown(e) {
    if (e.key === 'Enter' && _value !== '') {
        e.preventDefault();
        $filter.value = _value;
        handleSubmit();
    }
}
$: options = [
    { value: '=', label: translate('common.equal-to') },
    { value: '!=', label: translate('common.not-equal-to') },
    ...($prefixSearchEnabled && $filter.type === SEARCH_ATTRIBUTE_TYPE.KEYWORD
        ? [{ value: 'STARTS_WITH', label: translate('common.starts-with') }]
        : []),
];
</script>

<ConditionalMenu {options} inputId="text-filter" noBorderLeft>
  <Input
    label={$filter.attribute}
    labelHidden
    id="text-filter"
    type="search"
    placeholder={`${translate('common.enter')} ${$filter.attribute}`}
    icon="search"
    class="w-full [&_*]:border-l-0"
    bind:value={_value}
    on:keydown={handleKeydown}
  />
</ConditionalMenu>
