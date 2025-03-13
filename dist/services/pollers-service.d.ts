import type { BuildIdReachability, PollerInfo, TaskQueueCompatibleVersionSet, TaskQueueStatus } from '../types';
import type { NamespaceScopedRequest } from '../types/global';
export type GetAllPollersRequest = NamespaceScopedRequest & {
    queue: string;
};
export type GetWorkerTaskReachabilityRequest = NamespaceScopedRequest & {
    queue: string;
    buildIds: string[];
};
export type GetPollersResponse = {
    pollers?: PollerWithTaskQueueTypes[];
    taskQueueStatus: TaskQueueStatus;
};
export type AssignmentRule = {
    rule: {
        targetBuildId: string;
        percentageRamp?: {
            rampPercentage?: number;
        };
    };
    createTime: string;
};
type CompatibleRedirectRule = {
    rule: {
        sourceBuildId: string;
        targetBuildId: string;
    };
    createTime: string;
};
export type TaskQueueRules = {
    assignmentRules?: AssignmentRule[];
    compatibleRedirectRules?: CompatibleRedirectRule[];
    conflictToken: string;
};
export type TaskQueueCompatibility = {
    majorVersionSets: TaskQueueCompatibleVersionSet[];
};
export type WorkerReachability = {
    buildIdReachability: BuildIdReachability[];
};
type TaskQueueType = 'ACTIVITY' | 'WORKFLOW';
export type Poller = {
    lastAccessTime: PollerInfo['lastAccessTime'];
    taskQueueTypes: TaskQueueType[];
};
export type PollerWithTaskQueueTypes = PollerInfo & {
    taskQueueTypes?: TaskQueueType[];
};
export declare function getPollers(parameters: GetAllPollersRequest, request?: typeof fetch): Promise<GetPollersResponse>;
export type VersionResults = {
    rules: TaskQueueRules;
    compatibility: TaskQueueCompatibility;
    versionSets: TaskQueueCompatibleVersionSet[];
};
export declare function getVersioning(parameters: GetAllPollersRequest, request?: typeof fetch): Promise<VersionResults>;
export declare function getTaskQueueRules(parameters: GetAllPollersRequest, request?: typeof fetch): Promise<TaskQueueRules | undefined>;
export declare function getTaskQueueCompatibility(parameters: GetAllPollersRequest, request?: typeof fetch): Promise<TaskQueueCompatibility | undefined>;
export declare function getWorkerTaskReachability(parameters: GetWorkerTaskReachabilityRequest, request?: typeof fetch): Promise<WorkerReachability>;
export declare function getBuildIdReachability(workerTaskReachability: WorkerReachability, taskQueue: string, buildId: string): string;
export {};
