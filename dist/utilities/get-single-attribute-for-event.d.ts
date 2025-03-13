import type { Payloads } from '../types';
import type { PendingActivity, PendingNexusOperation, WorkflowEvent } from '../types/events';
import type { CombinedAttributes } from './format-event-attributes';
type SummaryAttribute = {
    key: string;
    value: string | Record<string, unknown> | Payloads;
};
export declare const shouldDisplayAsPlainText: (key: string) => boolean;
export declare const shouldDisplayAttribute: (key: string, value: unknown) => key is string;
export declare const pendingActivityKeys: string[];
export declare const shouldDisplayPendingAttribute: (key: string) => key is string;
export declare const shouldDisplayGroupAttribute: (key: string, value: unknown) => key is string;
export declare const shouldDisplayNestedAttribute: (value: unknown) => boolean;
export declare const getCodeBlockValue: Parameters<typeof JSON.stringify>[0];
export declare const getStackTrace: (value: unknown) => any;
export type EventLinkType = 'execution' | 'task-queue' | 'child-workflow' | 'nexus-endpoint' | 'none';
export declare const displayLinkType: (key: string, attributes: CombinedAttributes) => EventLinkType;
export declare const shouldDisplayAsExecutionLink: (key: string) => key is "continuedExecutionRunId" | "originalExecutionRunId" | "firstExecutionRunId" | "newExecutionRunId" | "baseRunId" | "newRunId";
export declare const shouldDisplayAsTaskQueueLink: (key: string) => key is "taskQueueName";
export declare const shouldDisplayChildWorkflowLink: (key: string, attributes: CombinedAttributes) => key is "workflowExecutionWorkflowId" | "workflowExecutionRunId";
export declare const shouldDisplayNexusEndpointLink: (key: string) => boolean;
export declare const shouldDisplayAsTime: (key: string) => boolean;
/**
 * Iterates through the keys of an event and compares it with the list of
 * preferred keys. If a preferred key is found, it will be returned.
 * Otherwise, it will return the first eligible event attribute.
 */
export declare const getEventSummaryAttribute: (event: WorkflowEvent) => SummaryAttribute;
export declare const getPendingActivitySummaryAttribute: (event: PendingActivity) => SummaryAttribute;
export declare const getPendingNexusOperationSummaryAttribute: (event: PendingNexusOperation) => SummaryAttribute;
export declare const getSummaryAttribute: (event: WorkflowEvent | PendingActivity | PendingNexusOperation) => SummaryAttribute;
export declare const getPrimaryAttributeForEvent: (event: WorkflowEvent) => SummaryAttribute;
export declare const getSecondaryAttributeForEvent: (event: WorkflowEvent, primaryKey: string) => SummaryAttribute;
export {};
