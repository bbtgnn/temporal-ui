<script>import DayOfMonthPicker from '../../holocene/day-of-month-picker.svelte';
import MonthPicker from '../../holocene/month-picker.svelte';
import { translate } from '../../i18n/translate';
import SchedulesTimeView from './schedules-time-view.svelte';
export let daysOfMonth;
export let months;
export let hour;
export let minute;
</script>

<div class="flex flex-col gap-4">
  <div class="flex flex-col gap-2">
    <h3>
      {translate('schedules.recurring-dates-heading')}
    </h3>
    <p class="text-secondary">
      {translate('schedules.recurring-dates-description')}
    </p>

    <DayOfMonthPicker bind:daysOfMonth />
  </div>
  <MonthPicker bind:months />
  <SchedulesTimeView bind:hour bind:minute />
</div>
