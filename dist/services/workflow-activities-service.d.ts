import type { CompleteActivityTaskRequest, CompleteActivityTaskResponse, FailActivityTaskRequest, FailActivityTaskResponse } from '../types/events';
type WorkflowInformation = {
    workflowId: string;
    runId: string;
    activityId: string;
};
export declare const failActivityTask: ({ namespace, workflowId, runId, activityId, failure, identity, lastHeartbeatDetails, }: FailActivityTaskRequest & WorkflowInformation) => Promise<FailActivityTaskResponse>;
export declare const completeActivityTask: ({ namespace, workflowId, runId, activityId, identity, result, }: CompleteActivityTaskRequest & WorkflowInformation) => Promise<CompleteActivityTaskResponse>;
export {};
