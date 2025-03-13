import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        rows?: number;
        columns?: number;
        columnWidths?: number[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        headers: {};
    };
};
export type TableProps = typeof __propDef.props;
export type TableEvents = typeof __propDef.events;
export type TableSlots = typeof __propDef.slots;
export default class Table extends SvelteComponentTyped<TableProps, TableEvents, TableSlots> {
}
export {};
