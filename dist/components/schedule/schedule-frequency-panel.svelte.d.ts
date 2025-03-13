import { SvelteComponentTyped } from "svelte";
import type { StructuredCalendar } from '../../types/schedule';
import type { IntervalSpec } from '$types';
declare const __propDef: {
    props: {
        calendar?: StructuredCalendar | undefined;
        interval?: IntervalSpec | undefined;
        timezoneName?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleFrequencyPanelProps = typeof __propDef.props;
export type ScheduleFrequencyPanelEvents = typeof __propDef.events;
export type ScheduleFrequencyPanelSlots = typeof __propDef.slots;
export default class ScheduleFrequencyPanel extends SvelteComponentTyped<ScheduleFrequencyPanelProps, ScheduleFrequencyPanelEvents, ScheduleFrequencyPanelSlots> {
}
export {};
