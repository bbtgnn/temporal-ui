import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        updating?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type WorkflowsSummaryTableProps = typeof __propDef.props;
export type WorkflowsSummaryTableEvents = typeof __propDef.events;
export type WorkflowsSummaryTableSlots = typeof __propDef.slots;
export default class WorkflowsSummaryTable extends SvelteComponentTyped<WorkflowsSummaryTableProps, WorkflowsSummaryTableEvents, WorkflowsSummaryTableSlots> {
}
export {};
