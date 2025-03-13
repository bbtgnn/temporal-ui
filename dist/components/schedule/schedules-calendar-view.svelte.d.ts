import { SvelteComponentTyped } from "svelte";
import type { FullSchedule } from '../../types/schedule';
declare const __propDef: {
    props: {
        schedule?: FullSchedule | null;
        daysOfWeek: string[];
        daysOfMonth: number[];
        months: string[];
        days: string;
        hour: string;
        minute: string;
        second: string;
        phase: string;
        cronString: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            preset: "existing" | "interval";
        };
    };
};
export type SchedulesCalendarViewProps = typeof __propDef.props;
export type SchedulesCalendarViewEvents = typeof __propDef.events;
export type SchedulesCalendarViewSlots = typeof __propDef.slots;
export default class SchedulesCalendarView extends SvelteComponentTyped<SchedulesCalendarViewProps, SchedulesCalendarViewEvents, SchedulesCalendarViewSlots> {
}
export {};
