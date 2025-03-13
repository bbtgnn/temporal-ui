/// <reference types="svelte" />
import type { Schedule } from '../types';
import type { ScheduleActionParameters, SchedulePresetsParameters, ScheduleSpecParameters } from '../types/schedule';
type ScheduleParameterArgs = {
    action: ScheduleActionParameters;
    spec: Partial<ScheduleSpecParameters>;
    presets: SchedulePresetsParameters;
};
export declare const submitCreateSchedule: ({ action, spec, presets, }: ScheduleParameterArgs) => Promise<void>;
export declare const submitEditSchedule: ({ action, spec, presets }: ScheduleParameterArgs, schedule: Schedule, scheduleId: string) => Promise<void>;
export declare const loading: import("svelte/store").Writable<boolean>;
export declare const error: import("svelte/store").Writable<string>;
export declare const schedulesCount: import("svelte/store").Writable<string>;
export {};
