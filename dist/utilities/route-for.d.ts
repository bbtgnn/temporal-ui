import type { EventView } from '../types/events';
import type { Settings } from '../types/global';
type RouteParameters = {
    namespace: string;
    workflow: string;
    run: string;
    view?: EventView | string;
    queryParams?: Record<string, string>;
    eventId?: string;
    scheduleId: string;
    queue: string;
    schedule: string;
    query?: string;
    search?: string;
    page?: string;
};
export type NamespaceParameter = Pick<RouteParameters, 'namespace'>;
export type WorkflowsParameter = Pick<RouteParameters, 'namespace' | 'query' | 'page'>;
export type TaskQueueParameters = Pick<RouteParameters, 'namespace' | 'queue'>;
export type WorkflowParameters = Pick<RouteParameters, 'namespace' | 'workflow' | 'run'>;
export type ScheduleParameters = Pick<RouteParameters, 'namespace' | 'scheduleId'>;
export type EventHistoryParameters = Pick<RouteParameters, 'namespace' | 'workflow' | 'run' | 'eventId' | 'view' | 'queryParams'>;
export type EventParameters = Pick<RouteParameters, 'namespace' | 'workflow' | 'run' | 'view' | 'eventId'>;
export type AuthenticationParameters = {
    settings: Settings;
    searchParams?: URLSearchParams;
    originUrl?: string;
};
export declare const routeForNamespaces: () => string;
export declare const routeForNexus: () => string;
export declare const routeForNexusEndpoint: (id: string) => string;
export declare const routeForNexusEndpointEdit: (id: string) => string;
export declare const routeForNexusEndpointCreate: () => string;
export declare const routeForNamespace: ({ namespace, }: NamespaceParameter) => string;
export declare const routeForNamespaceSelector: () => string;
export declare const routeForWorkflows: (parameters: NamespaceParameter) => string;
type StartWorkflowParameters = NamespaceParameter & Partial<{
    workflowId: string;
    taskQueue: string;
    workflowType: string;
}>;
export declare const routeForWorkflowStart: ({ namespace, workflowId, taskQueue, workflowType, }: StartWorkflowParameters) => string;
export declare const routeForWorkflowsWithQuery: ({ namespace, query, page, }: WorkflowsParameter) => string | undefined;
export declare const routeForArchivalWorkfows: (parameters: NamespaceParameter) => string;
export declare const routeForWorkflow: ({ workflow, run, ...parameters }: WorkflowParameters) => string;
export declare const routeForSchedules: (parameters: NamespaceParameter) => string;
export declare const routeForScheduleCreate: ({ namespace, }: NamespaceParameter) => string;
export declare const routeForSchedule: ({ scheduleId, namespace, }: ScheduleParameters) => string;
export declare const routeForScheduleEdit: ({ scheduleId, namespace, }: ScheduleParameters) => string;
export declare const routeForEventHistory: ({ queryParams, ...parameters }: EventHistoryParameters) => string;
export declare const routeForEventHistoryEvent: ({ eventId, ...parameters }: EventParameters) => string;
export declare const routeForEventGroup: ({ eventId, ...parameters }: EventParameters) => string;
export declare const routeForWorkers: (parameters: WorkflowParameters) => string;
export declare const routeForWorkerDeployments: ({ namespace, }: {
    namespace: string;
}) => string;
export declare const routeForWorkerDeployment: ({ namespace, deployment, }: {
    namespace: string;
    deployment: string;
}) => string;
export declare const routeForWorkerDeploymentVersion: ({ namespace, deployment, version, }: {
    namespace: string;
    deployment: string;
    version: string;
}) => string;
export declare const routeForRelationships: (parameters: WorkflowParameters) => string;
export declare const routeForTaskQueue: (parameters: TaskQueueParameters) => string;
export declare const routeForCallStack: (parameters: WorkflowParameters) => string;
export declare const routeForWorkflowQuery: (parameters: WorkflowParameters) => string;
export declare const routeForWorkflowMetadata: (parameters: WorkflowParameters) => string;
export declare const routeForWorkflowUpdate: (parameters: WorkflowParameters) => string;
export declare const routeForPendingActivities: (parameters: WorkflowParameters) => string;
export declare const routeForAuthentication: (parameters: AuthenticationParameters) => string;
export declare const routeForLoginPage: (error?: string, isBrowser?: boolean) => string;
export declare const routeForEventHistoryImport: (namespace?: string, view?: EventView) => string;
export declare const routeForBatchOperations: ({ namespace, }: {
    namespace: string;
}) => string;
export declare const routeForBatchOperation: ({ namespace, jobId, }: {
    namespace: string;
    jobId: string;
}) => string;
export declare const hasParameters: <T extends Record<string, string | Record<string, string>>>(...required: string[]) => (parameters: Record<string, string | Record<string, string>>) => parameters is T;
export declare const isNamespaceParameter: (parameters: Record<string, string | Record<string, string>>) => parameters is NamespaceParameter;
export declare const isWorkflowParameters: (parameters: Record<string, string | Record<string, string>>) => parameters is WorkflowParameters;
export declare const isEventHistoryParameters: (parameters: Record<string, string | Record<string, string>>) => parameters is EventHistoryParameters;
export declare const isEventParameters: (parameters: Record<string, string | Record<string, string>>) => parameters is EventParameters;
export {};
