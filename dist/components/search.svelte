<script>import kebabCase from 'kebab-case';
import Button from '../holocene/button.svelte';
import Input from '../holocene/input/input.svelte';
import { translate } from '../i18n/translate';
export let placeholder = `${translate('common.search')}…`;
export let label = translate('common.search');
export let value = '';
export let name = 'query';
export let icon = false;
export let id = kebabCase(`${label}-${name}`);
let testId = $$props['data-testid'] || id;
</script>

<form
  on:submit|preventDefault
  role="search"
  class="flex items-center"
  data-testid={`${testId}-form`}
>
  <Input
    class="w-full"
    {label}
    {id}
    labelHidden
    icon={icon ? 'search' : null}
    type="search"
    {name}
    {value}
    {placeholder}
    data-testid={`${testId}-input`}
    on:input
  >
    <Button slot="after-input" type="submit" data-testid={`${testId}-button`}>
      {label}
    </Button>
  </Input>
</form>
