<script>import { getContext } from 'svelte';
import IconButton from '../../holocene/icon-button.svelte';
import { translate } from '../../i18n/translate';
import { FILTER_CONTEXT } from './index.svelte';
const { resetFilter } = getContext(FILTER_CONTEXT);
</script>

<IconButton
  label={translate('common.close')}
  icon="close"
  on:click={resetFilter}
  class="ml-1"
/>
