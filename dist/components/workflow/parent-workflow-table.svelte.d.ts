import { SvelteComponentTyped } from "svelte";
import type { WorkflowIdentifier } from '../../types/workflows';
declare const __propDef: {
    props: {
        parent: WorkflowIdentifier;
        parentNamespaceName: string | undefined;
        namespace: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ParentWorkflowTableProps = typeof __propDef.props;
export type ParentWorkflowTableEvents = typeof __propDef.events;
export type ParentWorkflowTableSlots = typeof __propDef.slots;
export default class ParentWorkflowTable extends SvelteComponentTyped<ParentWorkflowTableProps, ParentWorkflowTableEvents, ParentWorkflowTableSlots> {
}
export {};
