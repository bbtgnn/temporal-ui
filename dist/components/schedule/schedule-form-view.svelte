<script>var _a, _b, _c, _d, _e, _f, _g;
import { writable } from 'svelte/store';
import { onDestroy } from 'svelte';
import { page } from '$app/stores';
import SchedulesCalendarView from './schedules-calendar-view.svelte';
import Alert from '../../holocene/alert.svelte';
import Button from '../../holocene/button.svelte';
import Card from '../../holocene/card.svelte';
import Input from '../../holocene/input/input.svelte';
import Link from '../../holocene/link.svelte';
import Loading from '../../holocene/loading.svelte';
import { translate } from '../../i18n/translate';
import { error, loading } from '../../stores/schedules';
import { customSearchAttributes, } from '../../stores/search-attributes';
import { decodePayloadAttributes } from '../../utilities/decode-payload';
import { routeForSchedule, routeForSchedules, } from '../../utilities/route-for';
import { writeActionsAreAllowed } from '../../utilities/write-actions-are-allowed';
import AddSearchAttributes from '../workflow/add-search-attributes.svelte';
import ScheduleInputPayload from './schedule-input-payload.svelte';
export let schedule = null;
export let searchAttributes = {};
export let onConfirm;
let namespace = $page.params.namespace;
let scheduleId = $page.params.schedule;
let title = translate(schedule ? 'schedules.edit' : 'schedules.create');
let loadingText = translate(schedule ? 'schedules.editing' : 'schedules.creating');
let backTitle = translate(schedule ? 'schedules.back-to-schedule' : 'schedules.back-to-schedules');
let backHref = schedule
    ? routeForSchedule({ namespace, scheduleId })
    : routeForSchedules({ namespace });
let confirmText = schedule
    ? translate('common.save')
    : translate('schedules.create');
let errors = {};
let name = scheduleId !== null && scheduleId !== void 0 ? scheduleId : '';
const decodedWorkflow = decodePayloadAttributes((_a = schedule === null || schedule === void 0 ? void 0 : schedule.action) === null || _a === void 0 ? void 0 : _a.startWorkflow);
const decodedSearchAttributes = decodePayloadAttributes({ searchAttributes });
const indexedFields = (_b = decodedSearchAttributes === null || decodedSearchAttributes === void 0 ? void 0 : decodedSearchAttributes.searchAttributes.indexedFields) !== null && _b !== void 0 ? _b : {};
let workflowType = (_d = (_c = decodedWorkflow === null || decodedWorkflow === void 0 ? void 0 : decodedWorkflow.workflowType) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : '';
let workflowId = (_e = decodedWorkflow === null || decodedWorkflow === void 0 ? void 0 : decodedWorkflow.workflowId) !== null && _e !== void 0 ? _e : '';
let taskQueue = (_g = (_f = decodedWorkflow === null || decodedWorkflow === void 0 ? void 0 : decodedWorkflow.taskQueue) === null || _f === void 0 ? void 0 : _f.name) !== null && _g !== void 0 ? _g : '';
let input = '';
let editInput = !schedule;
let encoding = writable('json/plain');
let messageType = '';
let daysOfWeek = [];
let daysOfMonth = [];
let months = [];
let days = '';
let hour = '';
let minute = '';
let second = '';
let phase = '';
let cronString = '';
let searchAttributesInput = Object.entries(indexedFields).map(([label, value]) => ({
    label,
    value,
    type: $customSearchAttributes[label],
}));
const handleConfirm = (preset, schedule) => {
    const args = {
        name: name.trimEnd(),
        workflowType,
        workflowId,
        taskQueue,
        ...(editInput && { input }),
        encoding: $encoding,
        messageType,
        hour,
        minute,
        second,
        phase,
        cronString,
        daysOfWeek,
        daysOfMonth,
        days,
        months,
        searchAttributes: searchAttributesInput,
    };
    onConfirm(preset, args, schedule);
};
const onInput = (e) => {
    const { id } = e.target;
    errors[id] = false;
    if ($error) {
        $error = '';
    }
};
const onBlur = (e) => {
    const { value, id } = e.target;
    if (!value.trim()) {
        errors[id] = true;
    }
    else {
        errors[id] = false;
    }
};
const isValidInput = (value) => {
    if (!input) {
        errors['input'] = false;
        return true;
    }
    try {
        JSON.parse(value);
        errors['input'] = false;
        return true;
    }
    catch (e) {
        errors['input'] = true;
        return false;
    }
};
$: isDisabled = (preset) => {
    if (!name || !workflowType || !workflowId || !taskQueue)
        return true;
    if (!isValidInput(input))
        return true;
    if (preset === 'interval')
        return !days && !hour && !minute && !second;
    if (preset === 'week')
        return !daysOfWeek.length;
    if (preset === 'month')
        return !daysOfMonth.length || !months.length;
    if (preset === 'string')
        return !cronString;
    return false;
};
onDestroy(() => ($error = ''));
</script>

<div class="flex flex-col gap-4 pb-10">
  {#if $loading}
    <Loading title={loadingText} />
  {:else}
    <Link href={backHref} icon="chevron-left">
      {backTitle}
    </Link>
    <h1>{title}</h1>
    <Card class="w-full xl:w-3/4 2xl:w-1/2">
      <form class="mb-4 flex w-full flex-col gap-4">
        <Input
          id="name"
          bind:value={name}
          label={translate('schedules.name-label')}
          error={errors['name']}
          maxLength={232}
          disabled={Boolean(scheduleId)}
          on:input={onInput}
          on:blur={onBlur}
          required
        />
        <Input
          id="workflowType"
          bind:value={workflowType}
          label={translate('schedules.workflow-type-label')}
          error={errors['workflowType']}
          on:input={onInput}
          on:blur={onBlur}
          required
        />
        <Input
          id="workflowId"
          bind:value={workflowId}
          label={translate('schedules.workflow-id-label')}
          error={errors['workflowId']}
          on:input={onInput}
          on:blur={onBlur}
          required
        />
        <Input
          id="taskQueue"
          bind:value={taskQueue}
          label={translate('schedules.task-queue-label')}
          error={errors['taskQueue']}
          on:input={onInput}
          on:blur={onBlur}
          required
        />
        <ScheduleInputPayload
          bind:input
          bind:editInput
          bind:encoding
          bind:messageType
          payloads={schedule?.action?.startWorkflow?.input}
          showEditActions={Boolean(schedule)}
        />
        <AddSearchAttributes
          bind:attributesToAdd={searchAttributesInput}
          class="w-full"
        />
        <SchedulesCalendarView
          let:preset
          {schedule}
          bind:daysOfWeek
          bind:daysOfMonth
          bind:months
          bind:days
          bind:hour
          bind:minute
          bind:second
          bind:phase
          bind:cronString
        >
          <div class="mt-4 flex flex-row items-center gap-4 max-sm:flex-col">
            <Button
              disabled={isDisabled(preset) || !writeActionsAreAllowed()}
              on:click={() => handleConfirm(preset, schedule)}
              class="max-sm:w-full">{confirmText}</Button
            >
            <Button variant="ghost" href={backHref} class="max-sm:w-full"
              >{translate('common.cancel')}</Button
            >
          </div>
        </SchedulesCalendarView>
        <Alert intent="error" title={$error} hidden={!$error} />
      </form>
    </Card>
  {/if}
</div>
