import { SvelteComponentTyped } from "svelte";
import { type GetPollersResponse } from '../services/pollers-service';
declare const __propDef: {
    props: {
        workers: GetPollersResponse;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkerTableProps = typeof __propDef.props;
export type WorkerTableEvents = typeof __propDef.events;
export type WorkerTableSlots = typeof __propDef.slots;
export default class WorkerTable extends SvelteComponentTyped<WorkerTableProps, WorkerTableEvents, WorkerTableSlots> {
}
export {};
