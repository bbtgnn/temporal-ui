import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SchedulesCreateProps = typeof __propDef.props;
export type SchedulesCreateEvents = typeof __propDef.events;
export type SchedulesCreateSlots = typeof __propDef.slots;
export default class SchedulesCreate extends SvelteComponentTyped<SchedulesCreateProps, SchedulesCreateEvents, SchedulesCreateSlots> {
}
export {};
