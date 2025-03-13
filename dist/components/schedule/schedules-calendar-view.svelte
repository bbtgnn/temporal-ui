<script>import { page } from '$app/stores';
import CodeBlock from '../../holocene/code-block.svelte';
import Input from '../../holocene/input/input.svelte';
import TabList from '../../holocene/tab/tab-list.svelte';
import TabPanel from '../../holocene/tab/tab-panel.svelte';
import Tab from '../../holocene/tab/tab.svelte';
import Tabs from '../../holocene/tab/tabs.svelte';
import { translate } from '../../i18n/translate';
import ScheduleDayOfMonthView from './schedule-day-of-month-view.svelte';
import ScheduleDayOfWeekView from './schedule-day-of-week-view.svelte';
import ScheduleFrequency from './schedule-frequency.svelte';
import SchedulesIntervalView from './schedules-interval-view.svelte';
let scheduleId = $page.params.schedule;
let preset = scheduleId ? 'existing' : 'interval';
export let schedule = null;
export let daysOfWeek;
export let daysOfMonth;
export let months;
export let days;
export let hour;
export let minute;
export let second;
export let phase;
export let cronString;
const clearSchedule = () => {
    daysOfWeek = [];
    daysOfMonth = [];
    months = [];
    days = '';
    hour = '';
    minute = '';
    second = '';
    phase = '';
    cronString = '';
};
$: clearSchedule();
</script>

<Tabs class="mt-8 w-full">
  <h2 class="mb-4">{translate('schedules.schedule-spec')}</h2>
  <TabList label="Schedule Tabs" class="flex flex-wrap gap-6">
    {#if schedule}
      <Tab
        label="Existing"
        id="existing-tab"
        panelId="existing-panel"
        onClick={() => (preset = 'existing')}
      />
    {/if}
    <Tab
      label="Interval"
      id="interval-tab"
      panelId="interval-panel"
      onClick={() => (preset = 'interval')}
    />
    <Tab
      label="Days of the Week"
      id="daily-tab"
      panelId="daily-panel"
      onClick={() => (preset = 'week')}
    />
    <Tab
      label="Days of the Month"
      id="monthly-tab"
      panelId="monthly-panel"
      onClick={() => (preset = 'month')}
    />
    <Tab
      label="String"
      id="string-tab"
      panelId="string-panel"
      onClick={() => (preset = 'string')}
    />
  </TabList>
  <div class="mt-4 flex w-full flex-wrap gap-6">
    {#if schedule}
      <TabPanel id="existing-panel" tabId="existing-tab" class="w-full">
        <ScheduleFrequency
          calendar={schedule?.spec?.structuredCalendar?.[0]}
          interval={schedule?.spec?.interval?.[0]}
          timezoneName={schedule?.spec?.timezoneName}
        />
      </TabPanel>
    {/if}
    <TabPanel id="interval-panel" tabId="interval-tab">
      <SchedulesIntervalView
        bind:days
        bind:hour
        bind:minute
        bind:second
        bind:phase
      />
    </TabPanel>
    <TabPanel id="daily-panel" tabId="daily-tab">
      <ScheduleDayOfWeekView bind:daysOfWeek bind:hour bind:minute />
    </TabPanel>
    <TabPanel id="monthly-panel" tabId="monthly-tab">
      <ScheduleDayOfMonthView
        bind:daysOfMonth
        bind:months
        bind:hour
        bind:minute
      />
    </TabPanel>
    <TabPanel
      id="string-panel"
      tabId="string-tab"
      class="flex w-full flex-col gap-4"
    >
      <div class="flex flex-col gap-2">
        <h3>
          {translate('schedules.cron-view-title')}
        </h3>
        <p class="text-secondary">
          {translate('schedules.crow-view-example-description')}
        </p>
        <CodeBlock
          inline
          language="text"
          content={`┌───────────── minute (0 - 59) 
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday)
│ │ │ │ │
* * * * *`}
          copyable={false}
        />
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-secondary">
          {translate('schedules.cron-view-description')}
        </p>
        <Input
          label={translate('schedules.cron-view-title')}
          labelHidden
          id="cronString"
          bind:value={cronString}
          placeholder="* * * * *"
        />
      </div>
    </TabPanel>
  </div>
  <slot {preset} />
</Tabs>
