import type { ArchiveFilterParameters, FilterParameters } from '../../types/workflows';
export type QueryKey = 'WorkflowId' | 'WorkflowType' | 'StartTime' | 'CloseTime' | 'ExecutionTime' | 'ExecutionStatus';
export type FilterKey = 'workflowId' | 'workflowType' | 'timeRange' | 'executionStatus' | 'closeTime';
export declare const isFilterKey: (key: unknown) => key is FilterKey;
export declare const toListWorkflowQuery: (parameters: FilterParameters | ArchiveFilterParameters, archived?: boolean) => string;
