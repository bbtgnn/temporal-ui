/// <reference types="svelte" />
import type { FilterParameters, WorkflowExecution } from '../types/workflows';
export declare const refresh: import("svelte/store").Writable<number>;
export declare const hideWorkflowQueryErrors: import("svelte/store").Readable<any>;
export declare const disableWorkflowCountsRefresh: import("svelte/store").Readable<any>;
export declare const canFetchChildWorkflows: import("svelte/store").Readable<any>;
export declare const queryWithParentWorkflowId: import("svelte/store").Readable<string>;
export type ParsedParameters = FilterParameters & {
    timeRange?: string;
};
export declare const workflowsSearchParams: import("svelte/store").Writable<string>;
export declare const updating: import("svelte/store").Writable<boolean>;
export declare const loading: import("svelte/store").Writable<boolean>;
export declare const workflowCount: import("svelte/store").Writable<{
    count: number;
    newCount: number;
}>;
export declare const workflowError: import("svelte/store").Writable<string>;
export declare const workflows: import("svelte/store").Readable<WorkflowExecution[]>;
export declare const workflowsQuery: import("svelte/store").Writable<string>;
