import { SvelteComponentTyped } from "svelte";
import type { ConfigurableTableHeader } from '../../../stores/configurable-table-columns';
declare const __propDef: {
    props: {
        column: ConfigurableTableHeader;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TableHeaderCellProps = typeof __propDef.props;
export type TableHeaderCellEvents = typeof __propDef.events;
export type TableHeaderCellSlots = typeof __propDef.slots;
export default class TableHeaderCell extends SvelteComponentTyped<TableHeaderCellProps, TableHeaderCellEvents, TableHeaderCellSlots> {
}
export {};
