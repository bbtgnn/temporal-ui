import { toEventHistory } from './models/event-history';
import { toWorkflowExecution } from './models/workflow-execution';
import { eventViewType } from './stores/event-view';
import { currentEventHistory, fullEventHistory } from './stores/events';
import type { WorkflowRunWithWorkers } from './stores/workflow-run';
import { workflowRun } from './stores/workflow-run';
// import temporal, { textStyles } from './theme/plugin';
import type { HistoryEvent, WorkflowEvent } from './types/events';

import WorkflowHistoryLayout from './layouts/workflow-history-layout.svelte';
import WorkflowsWithNewSearch from './pages/workflows-with-new-search.svelte';

export {
  eventViewType,
  toEventHistory,
  currentEventHistory,
  fullEventHistory,
  toWorkflowExecution,
  WorkflowHistoryLayout,
  workflowRun,
  WorkflowsWithNewSearch,
  // temporal,
  // textStyles,
};

export type { HistoryEvent, WorkflowRunWithWorkers, WorkflowEvent };
