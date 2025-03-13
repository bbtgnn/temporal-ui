import { SvelteComponentTyped } from "svelte";
import type { WorkflowExecution } from '../../types/workflows';
declare const __propDef: {
    props: {
        namespace: string;
        workflow: WorkflowExecution;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowsSummaryRowProps = typeof __propDef.props;
export type WorkflowsSummaryRowEvents = typeof __propDef.events;
export type WorkflowsSummaryRowSlots = typeof __propDef.slots;
export default class WorkflowsSummaryRow extends SvelteComponentTyped<WorkflowsSummaryRowProps, WorkflowsSummaryRowEvents, WorkflowsSummaryRowSlots> {
}
export {};
