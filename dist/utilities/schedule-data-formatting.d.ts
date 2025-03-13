import type { ScheduleParameters } from '../types/schedule';
export declare const timeToInterval: (days: string, hour: string, minute: string, second: string) => string;
export declare const convertDaysAndMonths: ({ months, daysOfMonth, daysOfWeek, }: Partial<ScheduleParameters>) => Partial<ScheduleParameters>;
