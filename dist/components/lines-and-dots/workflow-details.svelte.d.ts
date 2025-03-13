import { SvelteComponentTyped } from "svelte";
import type { WorkflowExecution } from '../../types/workflows';
declare const __propDef: {
    props: {
        workflow: WorkflowExecution;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowDetailsProps = typeof __propDef.props;
export type WorkflowDetailsEvents = typeof __propDef.events;
export type WorkflowDetailsSlots = typeof __propDef.slots;
export default class WorkflowDetails extends SvelteComponentTyped<WorkflowDetailsProps, WorkflowDetailsEvents, WorkflowDetailsSlots> {
}
export {};
