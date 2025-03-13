import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        namespace: string;
        jobId: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BatchOperationProps = typeof __propDef.props;
export type BatchOperationEvents = typeof __propDef.events;
export type BatchOperationSlots = typeof __propDef.slots;
export default class BatchOperation extends SvelteComponentTyped<BatchOperationProps, BatchOperationEvents, BatchOperationSlots> {
}
export {};
