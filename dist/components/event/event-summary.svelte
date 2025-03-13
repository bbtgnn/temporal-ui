<script>var _a, _b, _c, _d;
import { page } from '$app/stores';
import EventSummaryTable from './event-summary-table.svelte';
import EventTypeFilter from '../lines-and-dots/event-type-filter.svelte';
import DownloadEventHistoryModal from '../workflow/download-event-history-modal.svelte';
import ToggleButton from '../../holocene/toggle-button/toggle-button.svelte';
import ToggleButtons from '../../holocene/toggle-button/toggle-buttons.svelte';
import WorkflowHistoryJson from '../../pages/workflow-history-json.svelte';
import { eventFilterSort, eventViewType, expandAllEvents, } from '../../stores/event-view';
import { fullEventHistory, pauseLiveUpdates } from '../../stores/events';
import { eventCategoryFilter } from '../../stores/filters';
import { workflowRun } from '../../stores/workflow-run';
import EventStatusFilter from '../lines-and-dots/event-status-filter.svelte';
export let history;
export let groups;
let showDownloadPrompt = false;
$: ({ namespace } = $page.params);
$: ({ workflow } = $workflowRun);
$: reverseSort = $eventFilterSort === 'descending';
$: updating = !$fullEventHistory.length;
$: compact = $eventViewType === 'compact';
$: expandAll = $expandAllEvents === 'true';
$: $eventCategoryFilter = ((_b = (_a = $page.url) === null || _a === void 0 ? void 0 : _a.searchParams) === null || _b === void 0 ? void 0 : _b.get('category'))
    ? (_d = (_c = $page.url) === null || _c === void 0 ? void 0 : _c.searchParams) === null || _d === void 0 ? void 0 : _d.get('category').split(',')
    : undefined;
$: pendingActivities = workflow.pendingActivities;
$: pendingNexusOperations = workflow.pendingNexusOperations;
$: items = compact
    ? groups
    : reverseSort
        ? [...pendingNexusOperations, ...pendingActivities, ...history]
        : [...history, ...pendingActivities, ...pendingNexusOperations];
const onAllClick = () => {
    $eventViewType = 'feed';
};
const onCompactClick = () => {
    $eventViewType = 'compact';
};
const onJSONClick = () => {
    $eventViewType = 'json';
};
const onSort = () => {
    if (reverseSort) {
        $eventFilterSort = 'ascending';
    }
    else {
        $eventFilterSort = 'descending';
    }
};
const onExpandAll = () => {
    if (expandAll) {
        $expandAllEvents = 'false';
    }
    else {
        $expandAllEvents = 'true';
    }
};
</script>

<div
  class="flex flex-col items-center justify-between gap-4 py-4 lg:flex-row lg:py-8"
>
  <div class="flex flex-col items-center gap-2 px-4 md:flex-row">
    <div class="flex items-center gap-2 px-4">
      <ToggleButtons>
        <ToggleButton
          active={$eventViewType === 'feed'}
          data-testid="feed"
          on:click={onAllClick}>All</ToggleButton
        >
        <ToggleButton
          active={$eventViewType === 'compact'}
          data-testid="compact"
          on:click={onCompactClick}>Compact</ToggleButton
        >
        <ToggleButton
          active={$eventViewType === 'json'}
          data-testid="json"
          on:click={onJSONClick}>JSON</ToggleButton
        >
      </ToggleButtons>
    </div>
    <div class="flex items-center gap-2 px-4">
      {#if $eventViewType !== 'json'}
        <ToggleButtons>
          <ToggleButton
            icon={reverseSort ? 'arrow-down' : 'arrow-up'}
            data-testid="zoom-in"
            on:click={onSort}>{reverseSort ? 'Desc' : 'Asc'}</ToggleButton
          >
          <ToggleButton
            icon={expandAll ? 'chevron-up' : 'chevron-down'}
            data-testid="expandAll"
            tooltip={expandAll ? 'Collapse All Events' : 'Expand All Events'}
            on:click={onExpandAll}
          />
        </ToggleButtons>
      {/if}
      <ToggleButtons>
        <ToggleButton
          disabled={!workflow.isRunning}
          icon={$pauseLiveUpdates ? 'play' : 'pause'}
          data-testid="pause"
          tooltip={$pauseLiveUpdates
            ? 'Resume Live Updates'
            : 'Pause Live Updates'}
          on:click={() => ($pauseLiveUpdates = !$pauseLiveUpdates)}
        />
        <ToggleButton
          data-testid="download"
          icon="download"
          tooltip="Download Event History"
          on:click={() => (showDownloadPrompt = true)}
        />
      </ToggleButtons>
    </div>
  </div>
  <div
    class="flex w-full flex-col items-center justify-end gap-4 px-4 lg:flex-row"
  >
    {#if $eventViewType !== 'json'}
      <EventStatusFilter />
    {/if}
    <EventTypeFilter {compact} />
  </div>
</div>
{#if $eventViewType === 'json'}
  <div class="px-4">
    <WorkflowHistoryJson />
  </div>
{:else}
  <div data-testid="event-summary-table">
    <EventSummaryTable {updating} {items} {groups} {compact} />
  </div>
{/if}
<DownloadEventHistoryModal
  bind:open={showDownloadPrompt}
  {namespace}
  workflowId={workflow.id}
  runId={workflow.runId}
/>
