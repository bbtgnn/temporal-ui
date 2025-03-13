import { SvelteComponentTyped } from "svelte";
import type { ConfigurableTableHeader } from '../../../stores/configurable-table-columns';
import { type WorkflowExecution } from '../../../types/workflows';
declare const __propDef: {
    props: {
        column: ConfigurableTableHeader;
        workflow: WorkflowExecution;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TableBodyCellProps = typeof __propDef.props;
export type TableBodyCellEvents = typeof __propDef.events;
export type TableBodyCellSlots = typeof __propDef.slots;
export default class TableBodyCell extends SvelteComponentTyped<TableBodyCellProps, TableBodyCellEvents, TableBodyCellSlots> {
}
export {};
