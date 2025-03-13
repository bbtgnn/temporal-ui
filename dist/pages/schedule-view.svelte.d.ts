import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleViewProps = typeof __propDef.props;
export type ScheduleViewEvents = typeof __propDef.events;
export type ScheduleViewSlots = typeof __propDef.slots;
export default class ScheduleView extends SvelteComponentTyped<ScheduleViewProps, ScheduleViewEvents, ScheduleViewSlots> {
}
export {};
