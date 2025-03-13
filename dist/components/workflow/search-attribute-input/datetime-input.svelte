<script>import { startOfDay } from 'date-fns';
import { onMount } from 'svelte';
import DatePicker from '../../../holocene/date-picker.svelte';
import TimePicker from '../../../holocene/time-picker.svelte';
import { translate } from '../../../i18n/translate';
import { getUTCString } from '../../../utilities/format-date';
export let value;
const datetime = value ? new Date(value) : new Date();
const utcDate = new Date(datetime.getUTCFullYear(), datetime.getUTCMonth(), datetime.getUTCDate());
let date = startOfDay(utcDate);
let hour = value ? String(datetime.getUTCHours()) : '';
let minute = value ? String(datetime.getUTCMinutes()) : '';
let second = value ? String(datetime.getUTCSeconds()) : '';
onMount(() => {
    if (!value)
        updateDatetime();
});
const onDateChange = (d) => {
    date = startOfDay(d.detail);
    updateDatetime();
};
const updateDatetime = () => {
    value = getUTCString({ date, hour, minute, second });
};
</script>

<div class="flex flex-col gap-2">
  <DatePicker
    label="{translate('common.value')} ({translate('common.utc')})"
    on:datechange={onDateChange}
    selected={date}
    todayLabel={translate('common.today')}
    closeLabel={translate('common.close')}
    clearLabel={translate('common.clear-input-button-label')}
  />
  <TimePicker
    bind:hour
    bind:minute
    bind:second
    twelveHourClock={false}
    on:timechange={updateDatetime}
  />
</div>
