import { parseJSON } from 'date-fns';
import type { Timestamp } from '../types';
export type ValidTime = Parameters<typeof parseJSON>[0] | Timestamp;
export declare function timestampToDate(ts: Timestamp): Date;
export declare function isTimestamp(arg: unknown): arg is Timestamp;
export declare function formatDuration(duration: Duration | string, delimiter?: string): string;
export declare function formatDurationAbbreviated(duration: Duration | string, delimiter?: string): string;
export declare function getDuration({ start, end, }: {
    start: ValidTime | undefined | null;
    end: ValidTime | undefined | null;
}): Duration | null;
export declare function getMillisecondDuration({ start, end, onlyUnderSecond, }: {
    start: ValidTime | undefined | null;
    end: ValidTime | undefined | null;
    onlyUnderSecond?: boolean;
}): number | null;
export declare function formatDistance({ start, end, includeMilliseconds, includeMillisecondsForUnderSecond, }: {
    start: ValidTime | undefined | null;
    end: ValidTime | undefined | null;
    includeMilliseconds?: boolean;
    includeMillisecondsForUnderSecond?: boolean;
}): string;
export declare function formatDistanceAbbreviated({ start, end, includeMilliseconds, includeMillisecondsForUnderSecond, }: {
    start: ValidTime | undefined | null;
    end: ValidTime | undefined | null;
    includeMilliseconds?: boolean;
    includeMillisecondsForUnderSecond?: boolean;
}): string;
export declare function getMilliseconds(date: ValidTime | undefined | null): number;
export declare function fromSecondsToMinutesAndSeconds(seconds: number): string;
export declare function fromSecondsToDaysOrHours(seconds: string | number): string;
export declare const getTimestampDifference: (date1: string, date2: string) => number;
