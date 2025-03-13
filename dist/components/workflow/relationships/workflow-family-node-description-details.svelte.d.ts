import { SvelteComponentTyped } from "svelte";
import type { WorkflowExecution } from '../../../types/workflows';
declare const __propDef: {
    props: {
        workflow: WorkflowExecution;
        namespace: string;
        isRootWorkflow?: boolean;
        isActive?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowFamilyNodeDescriptionDetailsProps = typeof __propDef.props;
export type WorkflowFamilyNodeDescriptionDetailsEvents = typeof __propDef.events;
export type WorkflowFamilyNodeDescriptionDetailsSlots = typeof __propDef.slots;
export default class WorkflowFamilyNodeDescriptionDetails extends SvelteComponentTyped<WorkflowFamilyNodeDescriptionDetailsProps, WorkflowFamilyNodeDescriptionDetailsEvents, WorkflowFamilyNodeDescriptionDetailsSlots> {
}
export {};
