/// <reference types="svelte" />
import type { GetPollersResponse } from '../services/pollers-service';
import type { WorkflowExecution, WorkflowMetadata } from '../types/workflows';
export declare const refresh: import("svelte/store").Writable<number>;
export type WorkflowRunWithWorkers = {
    workflow: WorkflowExecution | null;
    workers: GetPollersResponse;
    metadata: WorkflowMetadata;
    userMetadata: {
        summary: string;
        details: string;
    };
};
export declare const initialWorkflowRun: WorkflowRunWithWorkers;
export declare const workflowRun: import("svelte/store").Writable<WorkflowRunWithWorkers>;
export declare const workflowSummaryViewOpen: Pick<import("svelte/store").Writable<boolean>, "update" | "subscribe" | "set">;
export declare const workflowTimelineViewOpen: Pick<import("svelte/store").Writable<boolean>, "update" | "subscribe" | "set">;
