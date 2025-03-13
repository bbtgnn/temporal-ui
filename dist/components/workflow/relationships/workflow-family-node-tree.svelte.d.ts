import { SvelteComponentTyped } from "svelte";
import type { RootNode } from '../../../services/workflow-service';
import type { WorkflowExecution } from '../../../types/workflows';
declare const __propDef: {
    props: {
        root: RootNode;
        width: number;
        height: number;
        zoomLevel: number;
        rootX?: number;
        rootY?: number;
        generation?: number;
        openRuns: Map<number, string>;
        expandAll: boolean;
        onNodeClick: (node: RootNode, generation: number) => void;
        activeWorkflow?: WorkflowExecution | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowFamilyNodeTreeProps = typeof __propDef.props;
export type WorkflowFamilyNodeTreeEvents = typeof __propDef.events;
export type WorkflowFamilyNodeTreeSlots = typeof __propDef.slots;
export default class WorkflowFamilyNodeTree extends SvelteComponentTyped<WorkflowFamilyNodeTreeProps, WorkflowFamilyNodeTreeEvents, WorkflowFamilyNodeTreeSlots> {
}
export {};
