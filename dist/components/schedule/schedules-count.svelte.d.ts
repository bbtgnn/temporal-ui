import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SchedulesCountProps = typeof __propDef.props;
export type SchedulesCountEvents = typeof __propDef.events;
export type SchedulesCountSlots = typeof __propDef.slots;
export default class SchedulesCount extends SvelteComponentTyped<SchedulesCountProps, SchedulesCountEvents, SchedulesCountSlots> {
}
export {};
