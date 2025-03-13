import { SvelteComponentTyped } from "svelte";
import type { WorkflowExecution } from '../../types/workflows';
import type { ChildWorkflowClosedEvent } from '../../utilities/get-workflow-relationships';
declare const __propDef: {
    props: {
        children?: ChildWorkflowClosedEvent[];
        pendingChildren?: WorkflowExecution['pendingChildren'];
        namespace: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChildWorkflowsTableProps = typeof __propDef.props;
export type ChildWorkflowsTableEvents = typeof __propDef.events;
export type ChildWorkflowsTableSlots = typeof __propDef.slots;
export default class ChildWorkflowsTable extends SvelteComponentTyped<ChildWorkflowsTableProps, ChildWorkflowsTableEvents, ChildWorkflowsTableSlots> {
}
export {};
