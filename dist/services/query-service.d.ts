import type { Payloads } from '../types';
import type { Eventual, Settings } from '../types/global';
import type { WorkflowMetadata } from '../types/workflows';
type QueryRequestParameters = {
    workflow: Eventual<{
        id: string;
        runId: string;
    }>;
    namespace: string;
    queryType: string;
    queryArgs?: Payloads;
};
type WorkflowParameters = Omit<QueryRequestParameters, 'queryType' | 'queryArgs'>;
export type ParsedQuery = ReturnType<typeof JSON.parse>[0];
export declare function getWorkflowMetadata(options: WorkflowParameters, settings: Settings, accessToken: string, signal?: AbortSignal): Promise<WorkflowMetadata>;
export declare function getQuery(options: QueryRequestParameters, settings: Settings, accessToken: string, signal?: AbortSignal): Promise<ParsedQuery>;
export declare function getWorkflowStackTrace(options: WorkflowParameters, settings: Settings, accessToken: string): Promise<ParsedQuery>;
export {};
