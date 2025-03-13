import type { PendingActivity, PendingActivityInfo } from '../types/events';
import type { ListWorkflowExecutionsResponse, WorkflowExecution, WorkflowExecutionAPIResponse } from '../types/workflows';
export declare const toPendingActivities: (pendingActivity?: PendingActivityInfo[]) => PendingActivity[];
export declare const toWorkflowExecution: (response?: WorkflowExecutionAPIResponse) => WorkflowExecution;
export declare const toWorkflowExecutions: (response: Pick<ListWorkflowExecutionsResponse, 'executions'>) => WorkflowExecution[];
