import type { WorkflowStatus } from '../types/workflows';
export type WorkflowFilters = readonly (WorkflowStatus | 'All')[];
export declare const workflowStatuses: Readonly<WorkflowStatus[]>;
export declare function isWorkflowStatusType(value: string): value is WorkflowStatus;
export declare const workflowStatusFilters: WorkflowFilters;
