import { SvelteComponentTyped } from "svelte";
import type { WorkflowExecution } from '../types/workflows';
declare const __propDef: {
    props: {
        workflow: WorkflowExecution | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowVersioningHeaderProps = typeof __propDef.props;
export type WorkflowVersioningHeaderEvents = typeof __propDef.events;
export type WorkflowVersioningHeaderSlots = typeof __propDef.slots;
export default class WorkflowVersioningHeader extends SvelteComponentTyped<WorkflowVersioningHeaderProps, WorkflowVersioningHeaderEvents, WorkflowVersioningHeaderSlots> {
}
export {};
