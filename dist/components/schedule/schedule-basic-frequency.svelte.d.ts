import { SvelteComponentTyped } from "svelte";
import type { StructuredCalendar } from '../../types/schedule';
import type { IntervalSpec } from '$types';
declare const __propDef: {
    props: {
        [x: string]: any;
        calendar?: StructuredCalendar | undefined;
        interval?: IntervalSpec | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleBasicFrequencyProps = typeof __propDef.props;
export type ScheduleBasicFrequencyEvents = typeof __propDef.events;
export type ScheduleBasicFrequencySlots = typeof __propDef.slots;
export default class ScheduleBasicFrequency extends SvelteComponentTyped<ScheduleBasicFrequencyProps, ScheduleBasicFrequencyEvents, ScheduleBasicFrequencySlots> {
}
export {};
