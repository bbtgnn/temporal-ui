<script>import { page } from '$app/stores';
import ScheduleFormView from '../components/schedule/schedule-form-view.svelte';
import { submitCreateSchedule } from '../stores/schedules';
let { namespace } = $page.params;
const handleCreate = (preset, args) => {
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
    submitCreateSchedule({ action, spec, presets });
};
</script>

<ScheduleFormView onConfirm={handleCreate} />
