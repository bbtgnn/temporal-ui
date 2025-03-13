import { SvelteComponentTyped } from "svelte";
import type { WorkflowExecution } from '../../types/workflows';
declare const __propDef: {
    props: {
        children?: WorkflowExecution[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LiveChildWorkflowsTableProps = typeof __propDef.props;
export type LiveChildWorkflowsTableEvents = typeof __propDef.events;
export type LiveChildWorkflowsTableSlots = typeof __propDef.slots;
export default class LiveChildWorkflowsTable extends SvelteComponentTyped<LiveChildWorkflowsTableProps, LiveChildWorkflowsTableEvents, LiveChildWorkflowsTableSlots> {
}
export {};
