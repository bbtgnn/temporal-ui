import type { WorkflowEvents } from '../types/events';
import type { WorkflowStatus } from '../types/workflows';
export declare const isCancelInProgress: (status: WorkflowStatus, eventHistory: WorkflowEvents) => boolean;
