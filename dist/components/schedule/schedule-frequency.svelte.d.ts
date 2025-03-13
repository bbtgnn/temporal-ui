import { SvelteComponentTyped } from "svelte";
import type { StructuredCalendar } from '../../types/schedule';
import type { IntervalSpec } from '$types';
declare const __propDef: {
    props: {
        [x: string]: any;
        calendar?: StructuredCalendar | undefined;
        interval?: IntervalSpec | undefined;
        timezoneName?: string;
        inline?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleFrequencyProps = typeof __propDef.props;
export type ScheduleFrequencyEvents = typeof __propDef.events;
export type ScheduleFrequencySlots = typeof __propDef.slots;
export default class ScheduleFrequency extends SvelteComponentTyped<ScheduleFrequencyProps, ScheduleFrequencyEvents, ScheduleFrequencySlots> {
}
export {};
