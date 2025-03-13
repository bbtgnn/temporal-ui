import { SvelteComponentTyped } from "svelte";
import type { WorkflowExecution } from '../types/workflows';
declare const __propDef: {
    props: {
        workflow: WorkflowExecution;
        namespace: string;
        cancelInProgress: boolean;
        isRunning: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowActionsProps = typeof __propDef.props;
export type WorkflowActionsEvents = typeof __propDef.events;
export type WorkflowActionsSlots = typeof __propDef.slots;
export default class WorkflowActions extends SvelteComponentTyped<WorkflowActionsProps, WorkflowActionsEvents, WorkflowActionsSlots> {
}
export {};
