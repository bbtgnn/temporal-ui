import { SvelteComponentTyped } from "svelte";
import type { ConfigurableTableHeader } from '../../../stores/configurable-table-columns';
declare const __propDef: {
    props: {
        pinned?: boolean;
        columns: ConfigurableTableHeader[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        headers: {};
        default: {};
    };
};
export type TableProps = typeof __propDef.props;
export type TableEvents = typeof __propDef.events;
export type TableSlots = typeof __propDef.slots;
export default class Table extends SvelteComponentTyped<TableProps, TableEvents, TableSlots> {
}
export {};
