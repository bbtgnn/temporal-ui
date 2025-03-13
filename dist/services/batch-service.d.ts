import type { BatchOperation, BatchOperations } from '$types/batch';
import type { WorkflowExecution } from '$types/workflows';
type CreateBatchOperationOptions = {
    namespace: string;
    reason: string;
    jobId: string;
    query?: string;
    workflows?: WorkflowExecution[];
    resetType?: 'first' | 'last';
};
type DescribeBatchOperationOptions = {
    jobId: string;
    namespace: string;
};
export declare function batchCancelWorkflows(options: CreateBatchOperationOptions): Promise<void>;
export declare function batchTerminateWorkflows(options: CreateBatchOperationOptions): Promise<void>;
export declare const batchResetWorkflows: (options: CreateBatchOperationOptions) => Promise<void>;
export declare function pollBatchOperation({ namespace, jobId, }: DescribeBatchOperationOptions): Promise<number>;
export declare function describeBatchOperation({ jobId, namespace }: DescribeBatchOperationOptions, request?: typeof fetch): Promise<BatchOperation>;
export declare function listBatchOperations(namespace: string, request?: typeof fetch): Promise<BatchOperations>;
export {};
