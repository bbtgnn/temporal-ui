import { SvelteComponentTyped } from "svelte";
import type { RootNode } from '../../../services/workflow-service';
declare const __propDef: {
    props: {
        root: RootNode;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowFamilyTreeProps = typeof __propDef.props;
export type WorkflowFamilyTreeEvents = typeof __propDef.events;
export type WorkflowFamilyTreeSlots = typeof __propDef.slots;
export default class WorkflowFamilyTree extends SvelteComponentTyped<WorkflowFamilyTreeProps, WorkflowFamilyTreeEvents, WorkflowFamilyTreeSlots> {
}
export {};
