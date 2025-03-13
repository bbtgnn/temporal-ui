import type { EventSortOrder } from '../stores/event-view';
import type { CommonHistoryEvent, GetWorkflowExecutionHistoryResponse, HistoryEvent, WorkflowEvent, WorkflowEvents } from '../types/events';
import type { NamespaceScopedRequest, NextPageToken, PaginationCallbacks, Settings } from '../types/global';
export type FetchEventsParameters = NamespaceScopedRequest & PaginationCallbacks<GetWorkflowExecutionHistoryResponse> & {
    workflowId: string;
    runId: string;
    rawPayloads?: boolean;
    sort?: EventSortOrder;
    signal?: AbortSignal;
    historySize?: string;
    maximumPageSize?: string;
};
export type FetchEventsParametersWithSettings = FetchEventsParameters & {
    settings: Settings;
    accessToken: string;
};
export declare const fetchRawEvents: ({ namespace, workflowId, runId, sort, onStart, onUpdate, onComplete, }: FetchEventsParameters) => Promise<HistoryEvent[]>;
export declare const throttleRefresh: (() => void) & {
    cancel: () => void;
    flush: () => void;
};
export declare const fetchAllEvents: ({ namespace, workflowId, runId, sort, signal, historySize, }: FetchEventsParameters) => Promise<CommonHistoryEvent[]>;
export declare const fetchPartialRawEvents: ({ namespace, workflowId, runId, sort, maximumPageSize, }: FetchEventsParameters) => Promise<HistoryEvent[]>;
type PaginatedEventParams = {
    namespace: string;
    workflowId: string;
    runId: string;
    sort?: EventSortOrder;
    category?: string;
    compact: boolean;
};
export declare function getPaginatedEvents({ namespace, workflowId, runId, sort, category, compact, }: PaginatedEventParams): Promise<() => Promise<{
    items: WorkflowEvents;
    nextPageToken: NextPageToken;
}>>;
export declare const fetchInitialEvent: (parameters: FetchEventsParameters) => Promise<WorkflowEvent>;
export {};
