import { SvelteComponentTyped } from "svelte";
import { type GetPollersResponse } from '../services/pollers-service';
declare const __propDef: {
    props: {
        taskQueue: string;
        workers: GetPollersResponse;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            compatibility: import("../services/pollers-service").TaskQueueCompatibility;
        };
    };
};
export type TaskQueueVersioningProps = typeof __propDef.props;
export type TaskQueueVersioningEvents = typeof __propDef.events;
export type TaskQueueVersioningSlots = typeof __propDef.slots;
export default class TaskQueueVersioning extends SvelteComponentTyped<TaskQueueVersioningProps, TaskQueueVersioningEvents, TaskQueueVersioningSlots> {
}
export {};
