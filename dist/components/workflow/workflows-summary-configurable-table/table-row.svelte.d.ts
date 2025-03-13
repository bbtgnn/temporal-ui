import { SvelteComponentTyped } from "svelte";
import type { WorkflowExecution } from '../../../types/workflows';
declare const __propDef: {
    props: {
        workflow?: WorkflowExecution | undefined;
        empty?: boolean;
        viewChildren?: (workflow?: WorkflowExecution) => void;
        childCount?: number | undefined;
        child?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TableRowProps = typeof __propDef.props;
export type TableRowEvents = typeof __propDef.events;
export type TableRowSlots = typeof __propDef.slots;
export default class TableRow extends SvelteComponentTyped<TableRowProps, TableRowEvents, TableRowSlots> {
}
export {};
