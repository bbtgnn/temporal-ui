import type { CountWorkflowExecutionsResponse } from '../types/workflows';
export declare const fetchWorkflowCount: (namespace: string, query: string, request?: typeof fetch) => Promise<{
    count: number;
}>;
type WorkflowCountByExecutionStatusOptions = {
    namespace: string;
    query: string;
};
export declare const fetchWorkflowCountByExecutionStatus: ({ namespace, query, }: WorkflowCountByExecutionStatusOptions) => Promise<CountWorkflowExecutionsResponse>;
export declare const fetchScheduleCount: ({ namespace, }: {
    namespace: string;
}) => Promise<string>;
export {};
