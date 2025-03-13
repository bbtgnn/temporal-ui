import { type PayloadInputEncoding } from '../components/payload-input-with-encoding.svelte';
import type { SearchAttributeInput } from '../stores/search-attributes';
import { type SearchAttribute, type UpdateWorkflowResponse } from '../types';
import type { ValidWorkflowParameters } from '../types/api';
import type { Payload } from '../types/events';
import type { NamespaceScopedRequest, NetworkError } from '../types/global';
import type { ArchiveFilterParameters, WorkflowExecution, WorkflowIdentifier } from '../types/workflows';
export type GetWorkflowExecutionRequest = NamespaceScopedRequest & {
    workflowId: string;
    runId: string;
};
export type CombinedWorkflowExecutionsResponse = {
    workflows: WorkflowExecution[];
    nextPageToken: string;
    error?: string;
};
type CancelWorkflowOptions = {
    namespace: string;
    workflow: WorkflowExecution;
};
type SignalWorkflowOptions = {
    namespace: string;
    workflow: WorkflowExecution;
    name: string;
    input: string;
    encoding: PayloadInputEncoding;
    messageType: string;
};
type UpdateWorkflowOptions = {
    namespace: string;
    workflow: WorkflowIdentifier;
    name: string;
    identity?: string;
    input: string;
    updateId?: string;
    encoding: PayloadInputEncoding;
};
type StartWorkflowOptions = {
    namespace: string;
    workflowId: string;
    taskQueue: string;
    workflowType: string;
    input: string;
    encoding: PayloadInputEncoding;
    messageType: string;
    summary: string;
    details: string;
    searchAttributes: SearchAttributeInput[];
};
type TerminateWorkflowOptions = {
    workflow: WorkflowExecution;
    namespace: string;
    reason: string;
};
export type ResetWorkflowOptions = {
    namespace: string;
    workflow: WorkflowExecution;
    eventId: string;
    reason: string;
    includeSignals: boolean;
    excludeSignals: boolean;
    excludeUpdates: boolean;
};
export type FetchWorkflow = typeof fetchAllWorkflows | typeof fetchAllArchivedWorkflows;
export declare const fetchAllWorkflows: (namespace: string, parameters: ValidWorkflowParameters, request?: typeof fetch, archived?: boolean) => Promise<CombinedWorkflowExecutionsResponse>;
type WorkflowForRunIdParams = {
    namespace: string;
    workflowId: string;
    url?: string;
};
export declare const fetchWorkflowForRunId: ({ namespace, workflowId, url }: WorkflowForRunIdParams, request?: typeof fetch) => Promise<{
    runId: string;
}>;
export declare const fetchWorkflowForAuthorization: (namespace: string, request?: typeof fetch, archived?: boolean) => Promise<{
    authorized: boolean;
}>;
export declare const fetchAllArchivedWorkflows: (namespace: string, parameters: ArchiveFilterParameters, request?: typeof fetch) => Promise<CombinedWorkflowExecutionsResponse>;
export declare function fetchWorkflow(parameters: GetWorkflowExecutionRequest, request?: typeof fetch): Promise<{
    workflow?: WorkflowExecution;
    error?: NetworkError;
}>;
export declare function terminateWorkflow({ workflow, namespace, reason, }: TerminateWorkflowOptions): Promise<null>;
export declare function cancelWorkflow({ namespace, workflow: { id: workflowId, runId } }: CancelWorkflowOptions, request?: typeof fetch): Promise<unknown>;
export declare function signalWorkflow({ namespace, workflow: { id: workflowId, runId }, name, input, encoding, messageType, }: SignalWorkflowOptions): Promise<unknown>;
export declare function updateWorkflow({ namespace, workflow: { workflowId, runId }, name, identity, updateId, input, encoding, }: UpdateWorkflowOptions): Promise<UpdateWorkflowResponse>;
export declare function resetWorkflow({ namespace, workflow: { id: workflowId, runId }, eventId, reason, includeSignals, excludeSignals, excludeUpdates, }: ResetWorkflowOptions): Promise<{
    runId: string;
}>;
export declare function fetchWorkflowForSchedule(parameters: GetWorkflowExecutionRequest, request?: typeof fetch): Promise<WorkflowExecution>;
export declare function fetchAllChildWorkflows(namespace: string, workflowId: string, runId?: string): Promise<WorkflowExecution[]>;
export declare const setSearchAttributes: (attributes: SearchAttributeInput[]) => SearchAttribute;
export declare function startWorkflow({ namespace, workflowId, taskQueue, workflowType, input, summary, details, encoding, messageType, searchAttributes, }: StartWorkflowOptions): Promise<{
    runId: string;
}>;
export declare const fetchInitialValuesForStartWorkflow: ({ namespace, workflowType, workflowId, }: {
    namespace: string;
    workflowType?: string;
    workflowId?: string;
}) => Promise<{
    input: string;
    encoding: PayloadInputEncoding;
    messageType: string;
    searchAttributes: Record<string, string | Payload> | undefined;
    summary: string;
    details: string;
}>;
export interface RootNode {
    workflow: WorkflowExecution;
    children: RootNode[];
    rootPaths: {
        runId: string;
        workflowId: string;
    }[];
}
export declare function fetchAllRootWorkflows(namespace: string, rootWorkflowId: string, rootRunId?: string): Promise<RootNode | undefined>;
export declare const fetchAllPaginatedWorkflows: (namespace: string, parameters: ValidWorkflowParameters, request?: typeof fetch, archived?: boolean) => Promise<WorkflowExecution[]>;
export {};
