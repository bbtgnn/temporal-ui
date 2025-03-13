import { type TimeFormat } from '../stores/time-format';
import { type ValidTime } from './format-time';
export declare function formatDate(date: ValidTime | undefined | null, timeFormat?: TimeFormat, options?: {
    relative?: boolean;
    relativeLabel?: string;
    relativeStrict?: boolean;
    abbrFormat?: boolean;
}): string;
export declare function isValidDate(date: string): boolean;
export declare function formatUTCOffset(offset: number | undefined, utc: string): string;
export declare function getLocalTimezone(): string;
export declare function getLocalTime(): string;
export declare function getSelectedTimezone(timeFormat: TimeFormat): string;
export declare function getUTCString({ date, hour, minute, second, }?: {
    date?: Date;
    hour?: string | number;
    minute?: string | number;
    second?: string | number;
}): string;
