import type { SearchAttributeFilter } from '../../models/search-attribute-filters';
export type QueryKey = 'WorkflowId' | 'WorkflowType' | 'StartTime' | 'CloseTime' | 'ExecutionTime' | 'ExecutionStatus' | 'RunId';
export declare const toListWorkflowQueryFromFilters: (filters?: SearchAttributeFilter[], archived?: boolean) => string;
