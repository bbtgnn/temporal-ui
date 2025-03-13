import { writable } from 'svelte/store';
import { persistStore } from './persist-store';
export const refresh = writable(0);
export const initialWorkflowRun = {
    workflow: null,
    workers: { pollers: [], taskQueueStatus: null },
    metadata: undefined,
    userMetadata: {
        summary: '',
        details: '',
    },
};
export const workflowRun = writable(initialWorkflowRun);
export const workflowSummaryViewOpen = persistStore('workflowSummaryView', true, true);
export const workflowTimelineViewOpen = persistStore('workflowTimelineView', true, true);
