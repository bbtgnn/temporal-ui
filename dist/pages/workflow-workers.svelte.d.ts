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
    slots: {};
};
export type WorkflowWorkersProps = typeof __propDef.props;
export type WorkflowWorkersEvents = typeof __propDef.events;
export type WorkflowWorkersSlots = typeof __propDef.slots;
export default class WorkflowWorkers extends SvelteComponentTyped<WorkflowWorkersProps, WorkflowWorkersEvents, WorkflowWorkersSlots> {
}
export {};
