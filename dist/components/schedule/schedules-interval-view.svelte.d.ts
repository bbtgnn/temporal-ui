import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        days?: string;
        hour?: string;
        minute?: string;
        second?: string;
        phase?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SchedulesIntervalViewProps = typeof __propDef.props;
export type SchedulesIntervalViewEvents = typeof __propDef.events;
export type SchedulesIntervalViewSlots = typeof __propDef.slots;
export default class SchedulesIntervalView extends SvelteComponentTyped<SchedulesIntervalViewProps, SchedulesIntervalViewEvents, SchedulesIntervalViewSlots> {
}
export {};
