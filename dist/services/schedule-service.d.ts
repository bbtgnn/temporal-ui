import type { CreateScheduleRequest, ScheduleListEntry, UpdateScheduleRequest } from '../types';
import type { DescribeFullSchedule, OverlapPolicy } from '../types/schedule';
import type { ErrorCallback } from '../utilities/request-from-api';
type ScheduleParameters = {
    namespace: string;
    scheduleId: string;
};
export type ScheduleResponse = {
    schedules: ScheduleListEntry[];
    nextPageToken: string;
    error?: string;
};
export type FetchSchedule = typeof fetchAllSchedules;
type PaginatedSchedulesPromise = (pageSize: number, token: string) => Promise<{
    items: ScheduleListEntry[];
    nextPageToken: string;
}>;
export declare const fetchPaginatedSchedules: (namespace: string, query: string, onError: ErrorCallback, request?: typeof fetch) => Promise<PaginatedSchedulesPromise>;
export declare const fetchAllSchedules: (namespace: string, request?: typeof fetch) => Promise<ScheduleResponse>;
export declare function fetchSchedule(parameters: ScheduleParameters, request?: typeof fetch): Promise<DescribeFullSchedule>;
export declare function deleteSchedule(parameters: ScheduleParameters, request?: typeof fetch): Promise<void>;
type CreateScheduleOptions = {
    namespace: string;
    scheduleId: string;
    body: CreateScheduleRequest;
};
export declare function createSchedule({ namespace, scheduleId, body, }: CreateScheduleOptions): Promise<{
    error: string;
    conflictToken: string;
}>;
type EditScheduleOptions = {
    namespace: string;
    scheduleId: string;
    request_id: string;
    body: UpdateScheduleRequest;
};
export declare function editSchedule({ namespace, scheduleId, body, }: Partial<EditScheduleOptions>): Promise<{
    error: string;
}>;
type PauseScheduleOptions = {
    namespace: string;
    scheduleId: string;
    reason: string;
};
export declare function pauseSchedule({ namespace, scheduleId, reason, }: PauseScheduleOptions): Promise<null>;
type UnpauseScheduleOptions = {
    namespace: string;
    scheduleId: string;
    reason: string;
};
export declare function unpauseSchedule({ namespace, scheduleId, reason, }: UnpauseScheduleOptions): Promise<null>;
type TriggerImmediatelyOptions = {
    namespace: string;
    scheduleId: string;
    overlapPolicy: OverlapPolicy;
};
export declare function triggerImmediately({ namespace, scheduleId, overlapPolicy, }: TriggerImmediatelyOptions): Promise<null>;
type BackfillOptions = TriggerImmediatelyOptions & {
    startTime: string;
    endTime: string;
};
export declare function backfillRequest({ namespace, scheduleId, overlapPolicy, startTime, endTime, }: BackfillOptions): Promise<null>;
export {};
