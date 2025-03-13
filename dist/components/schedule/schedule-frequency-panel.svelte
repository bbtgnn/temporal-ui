<script>import Panel from '../panel.svelte';
import { translate } from '../../i18n/translate';
import ScheduleFrequency from './schedule-frequency.svelte';
export let calendar = undefined;
export let interval = undefined;
export let timezoneName = 'UTC';
</script>

<Panel>
  <h2 class="mb-4">{translate('schedules.schedule-spec')}</h2>
  <div class="pr-2">
    <ScheduleFrequency {calendar} {interval} {timezoneName} class="text-base" />
  </div>
</Panel>
