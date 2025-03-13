import { SvelteComponentTyped } from "svelte";
import type { WorkflowExecution } from '../../../types/workflows';
declare const __propDef: {
    props: {
        workflows: WorkflowExecution[];
        empty: boolean;
        columnsCount: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TableHeaderRowProps = typeof __propDef.props;
export type TableHeaderRowEvents = typeof __propDef.events;
export type TableHeaderRowSlots = typeof __propDef.slots;
export default class TableHeaderRow extends SvelteComponentTyped<TableHeaderRowProps, TableHeaderRowEvents, TableHeaderRowSlots> {
}
export {};
