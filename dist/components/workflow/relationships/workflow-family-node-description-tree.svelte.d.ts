import { SvelteComponentTyped } from "svelte";
import type { RootNode } from '../../../services/workflow-service';
import type { WorkflowExecution } from '../../../types/workflows';
declare const __propDef: {
    props: {
        root: RootNode;
        expandAll: boolean;
        onNodeClick: (node: RootNode, generation: number) => void;
        activeWorkflow?: WorkflowExecution | undefined;
        generation?: number;
        openRuns: Map<number, string>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowFamilyNodeDescriptionTreeProps = typeof __propDef.props;
export type WorkflowFamilyNodeDescriptionTreeEvents = typeof __propDef.events;
export type WorkflowFamilyNodeDescriptionTreeSlots = typeof __propDef.slots;
export default class WorkflowFamilyNodeDescriptionTree extends SvelteComponentTyped<WorkflowFamilyNodeDescriptionTreeProps, WorkflowFamilyNodeDescriptionTreeEvents, WorkflowFamilyNodeDescriptionTreeSlots> {
}
export {};
