import type { ArchivalState, CallbackState, NamespaceState, PendingNexusOperationState, WorkflowExecutionStatus } from '../types';
import type { BatchOperationState, BatchOperationType } from '../types/batch';
import type { SearchAttributeType, WorkflowStatus, WorkflowTaskFailedCause } from '../types/workflows';
import type { EventType } from './is-event-type';
export declare const fromScreamingEnum: <T>(potentialScreamingEnum: T, prefix: string) => T;
export declare const toSearchAttributeTypeReadable: (status: SearchAttributeType) => SearchAttributeType;
export declare const toWorkflowStatusReadable: (status: WorkflowExecutionStatus | WorkflowStatus) => WorkflowStatus;
export declare const toNamespaceArchivalStateReadable: (status: ArchivalState) => ArchivalState;
export declare const toNamespaceStateReadable: (status: NamespaceState) => NamespaceState;
export declare const toEventNameReadable: (status: EventType) => EventType;
export declare const toBatchOperationStateReadable: (status: BatchOperationState) => BatchOperationState;
export declare const toBatchOperationTypeReadable: (status: BatchOperationType) => BatchOperationType;
export declare const toWorkflowTaskFailureReadable: (cause?: WorkflowTaskFailedCause) => WorkflowTaskFailedCause;
export declare const toPendingNexusOperationStateReadable: (state?: PendingNexusOperationState) => PendingNexusOperationState;
export declare const toCallbackStateReadable: (state?: CallbackState) => CallbackState;
