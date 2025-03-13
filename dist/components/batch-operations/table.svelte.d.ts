import { SvelteComponentTyped } from "svelte";
import type { BatchOperationInfo } from '../../types/batch';
declare const __propDef: {
    props: {
        namespace: string;
        operations: BatchOperationInfo[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TableProps = typeof __propDef.props;
export type TableEvents = typeof __propDef.events;
export type TableSlots = typeof __propDef.slots;
export default class Table extends SvelteComponentTyped<TableProps, TableEvents, TableSlots> {
}
export {};
