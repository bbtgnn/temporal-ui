import { SvelteComponentTyped } from "svelte";
import type { RootNode } from '../../../services/workflow-service';
import type { WorkflowExecution } from '../../../types/workflows';
declare const __propDef: {
    props: {
        root: RootNode;
        expandAll: boolean;
        generation?: number;
        onNodeClick: (node: RootNode, generation: number) => void;
        activeWorkflow?: WorkflowExecution | undefined;
        openRuns: Map<number, string>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowFamilyNodeDescriptionProps = typeof __propDef.props;
export type WorkflowFamilyNodeDescriptionEvents = typeof __propDef.events;
export type WorkflowFamilyNodeDescriptionSlots = typeof __propDef.slots;
export default class WorkflowFamilyNodeDescription extends SvelteComponentTyped<WorkflowFamilyNodeDescriptionProps, WorkflowFamilyNodeDescriptionEvents, WorkflowFamilyNodeDescriptionSlots> {
}
export {};
