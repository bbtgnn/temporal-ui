<script>import { getContext } from 'svelte';
import Input from '../../holocene/input/input.svelte';
import { translate } from '../../i18n/translate';
import { isValidDurationQuery } from '../../utilities/to-duration';
import ConditionalMenu from './conditional-menu.svelte';
import { FILTER_CONTEXT } from './index.svelte';
const { filter, handleSubmit } = getContext(FILTER_CONTEXT);
$: ({ value } = $filter);
$: _value = value;
let isValid = true;
const handleKeydown = (e) => {
    const newValue = _value.trim();
    if (isValid && e.key === 'Enter' && newValue !== '') {
        $filter.value = newValue;
        e.preventDefault();
        handleSubmit();
    }
};
const validateDuration = (event) => {
    if (isValidDurationQuery(event.target.value.trim())) {
        isValid = true;
    }
    else {
        isValid = false;
    }
};
</script>

<ConditionalMenu inputId="duration-filter" noBorderLeft>
  <Input
    label={$filter.attribute}
    labelHidden
    id="duration-filter"
    type="search"
    placeholder={`${translate('common.enter')} ${
      $filter.attribute
    } (${translate('workflows.duration-filter-placeholder')})`}
    icon="search"
    class="w-full [&_*]:border-l-0"
    bind:value={_value}
    on:keydown={handleKeydown}
    on:input={validateDuration}
    valid={isValid}
  />
</ConditionalMenu>
