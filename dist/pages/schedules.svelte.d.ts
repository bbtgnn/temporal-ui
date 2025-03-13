import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SchedulesProps = typeof __propDef.props;
export type SchedulesEvents = typeof __propDef.events;
export type SchedulesSlots = typeof __propDef.slots;
export default class Schedules extends SvelteComponentTyped<SchedulesProps, SchedulesEvents, SchedulesSlots> {
}
export {};
