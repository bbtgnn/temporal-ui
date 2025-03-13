import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleEditProps = typeof __propDef.props;
export type ScheduleEditEvents = typeof __propDef.events;
export type ScheduleEditSlots = typeof __propDef.slots;
export default class ScheduleEdit extends SvelteComponentTyped<ScheduleEditProps, ScheduleEditEvents, ScheduleEditSlots> {
}
export {};
