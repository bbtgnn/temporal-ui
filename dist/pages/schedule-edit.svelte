<script>import { page } from '$app/stores';
import ScheduleFormView from '../components/schedule/schedule-form-view.svelte';
import Loading from '../holocene/loading.svelte';
import { translate } from '../i18n/translate';
import { fetchSchedule } from '../services/schedule-service';
import { submitEditSchedule } from '../stores/schedules';
import { decodeURIForSvelte } from '../utilities/encode-uri';
let namespace = $page.params.namespace;
let scheduleId = $page.params.schedule;
const parameters = {
    namespace,
    scheduleId: decodeURIForSvelte(scheduleId),
};
let scheduleFetch = fetchSchedule(parameters);
const handleEdit = (preset, args, schedule) => {
    const { name, workflowType, workflowId, taskQueue, input, encoding, messageType, hour, minute, second, phase, cronString, daysOfWeek, daysOfMonth, days, months, searchAttributes, } = args;
    const action = {
        namespace,
        name,
        workflowType,
        workflowId,
        taskQueue,
        input,
        encoding,
        messageType,
        searchAttributes,
    };
    const spec = {
        hour,
        minute,
        second,
        phase,
        cronString,
    };
    const presets = {
        preset,
        daysOfWeek,
        daysOfMonth,
        months,
        days,
    };
    submitEditSchedule({ action, spec, presets }, schedule, scheduleId);
};
</script>

{#await scheduleFetch}
  <Loading title={translate('schedules.loading')} />
{:then { schedule, searchAttributes }}
  <ScheduleFormView onConfirm={handleEdit} {schedule} {searchAttributes} />
{/await}
