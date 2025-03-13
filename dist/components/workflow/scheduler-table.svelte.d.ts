import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        scheduleId: string;
        namespace: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SchedulerTableProps = typeof __propDef.props;
export type SchedulerTableEvents = typeof __propDef.events;
export type SchedulerTableSlots = typeof __propDef.slots;
export default class SchedulerTable extends SvelteComponentTyped<SchedulerTableProps, SchedulerTableEvents, SchedulerTableSlots> {
}
export {};
