import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        namespace: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BatchOperationsProps = typeof __propDef.props;
export type BatchOperationsEvents = typeof __propDef.events;
export type BatchOperationsSlots = typeof __propDef.slots;
export default class BatchOperations extends SvelteComponentTyped<BatchOperationsProps, BatchOperationsEvents, BatchOperationsSlots> {
}
export {};
