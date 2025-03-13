import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TaskQueueProps = typeof __propDef.props;
export type TaskQueueEvents = typeof __propDef.events;
export type TaskQueueSlots = typeof __propDef.slots;
export default class TaskQueue extends SvelteComponentTyped<TaskQueueProps, TaskQueueEvents, TaskQueueSlots> {
}
export {};
