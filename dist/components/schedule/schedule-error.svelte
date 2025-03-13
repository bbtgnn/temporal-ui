<script>import Panel from '../panel.svelte';
import { translate } from '../../i18n/translate';
export let error = '';
</script>

<Panel error>
  <p class="error-text">{translate('schedules.error-title')}</p>
  <p class="error-text">
    {error}
  </p>
</Panel>

<style>
  .error-text {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    --tw-text-opacity: 1;
    color: rgb(127 20 15 / var(--tw-text-opacity))
}</style>
