import type { EventSortOrder } from '../stores/event-view';
import type { WorkflowEvents, WorkflowTaskFailedEvent } from '../types/events';
import type { WorkflowTaskFailedCause } from '../types/workflows';
export declare const getErrorCause: (error: WorkflowTaskFailedEvent) => WorkflowTaskFailedCause;
export declare const getWorkflowTaskFailedEvent: (fullEventHistory: WorkflowEvents, sortOrder: EventSortOrder) => WorkflowTaskFailedEvent | undefined;
