import { SvelteComponentTyped } from "svelte";
import { type TextFilterAttributes } from '../../../models/workflow-filters';
import { type WorkflowExecution } from '../../../types/workflows';
declare const __propDef: {
    props: {
        attribute: TextFilterAttributes;
        workflow: WorkflowExecution;
        filterOrCopyButtonsVisible?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FilterableTableCellProps = typeof __propDef.props;
export type FilterableTableCellEvents = typeof __propDef.events;
export type FilterableTableCellSlots = typeof __propDef.slots;
export default class FilterableTableCell extends SvelteComponentTyped<FilterableTableCellProps, FilterableTableCellEvents, FilterableTableCellSlots> {
}
export {};
