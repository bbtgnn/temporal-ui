<script>import Icon from '../holocene/icon/icon.svelte';
import { translate } from '../i18n/translate';
export let includesTaskQueueType;
</script>

<Icon
  name={includesTaskQueueType ? 'checkmark' : 'close'}
  class="m-auto {includesTaskQueueType ? 'text-blue-700' : 'text-primary'}"
  title={includesTaskQueueType
    ? translate('common.yes')
    : translate('common.no')}
/>
