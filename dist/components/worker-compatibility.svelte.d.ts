import { SvelteComponentTyped } from "svelte";
import { type GetPollersResponse, type TaskQueueCompatibility, type WorkerReachability } from '../services/pollers-service';
declare const __propDef: {
    props: {
        taskQueue: string;
        workers: GetPollersResponse;
        reachability?: WorkerReachability | undefined;
        compatibility?: TaskQueueCompatibility | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkerCompatibilityProps = typeof __propDef.props;
export type WorkerCompatibilityEvents = typeof __propDef.events;
export type WorkerCompatibilitySlots = typeof __propDef.slots;
export default class WorkerCompatibility extends SvelteComponentTyped<WorkerCompatibilityProps, WorkerCompatibilityEvents, WorkerCompatibilitySlots> {
}
export {};
