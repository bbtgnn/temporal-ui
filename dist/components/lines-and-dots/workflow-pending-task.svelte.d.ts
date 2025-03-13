import { SvelteComponentTyped } from "svelte";
import type { PendingWorkflowTaskInfo } from '../../types';
declare const __propDef: {
    props: {
        pendingTask?: PendingWorkflowTaskInfo | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowPendingTaskProps = typeof __propDef.props;
export type WorkflowPendingTaskEvents = typeof __propDef.events;
export type WorkflowPendingTaskSlots = typeof __propDef.slots;
export default class WorkflowPendingTask extends SvelteComponentTyped<WorkflowPendingTaskProps, WorkflowPendingTaskEvents, WorkflowPendingTaskSlots> {
}
export {};
