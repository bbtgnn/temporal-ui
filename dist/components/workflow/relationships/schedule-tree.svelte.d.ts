import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        namespace: string;
        workflowId: string;
        scheduleId: string;
        current: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleTreeProps = typeof __propDef.props;
export type ScheduleTreeEvents = typeof __propDef.events;
export type ScheduleTreeSlots = typeof __propDef.slots;
export default class ScheduleTree extends SvelteComponentTyped<ScheduleTreeProps, ScheduleTreeEvents, ScheduleTreeSlots> {
}
export {};
