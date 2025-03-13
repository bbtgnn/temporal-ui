import type { Timestamp } from '../types';
export declare const toTimeDifference: ({ date, now, negativeDefault, }: {
    date: Timestamp;
    now?: number;
    negativeDefault?: string;
}) => string;
