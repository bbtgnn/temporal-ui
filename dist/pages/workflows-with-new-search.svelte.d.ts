import { SvelteComponentTyped } from "svelte";
import type { Readable, Writable } from 'svelte/store';
import type { WorkflowExecution } from '../types/workflows';
export declare const BATCH_OPERATION_CONTEXT = "BATCH_OPERATION_CONTEXT";
export type BatchOperationContext = {
    allSelected: Writable<boolean>;
    pageSelected: Writable<boolean>;
    terminableWorkflows: Readable<WorkflowExecution[]>;
    cancelableWorkflows: Readable<WorkflowExecution[]>;
    selectedWorkflows: Writable<WorkflowExecution[]>;
    batchActionsVisible: Readable<boolean>;
    openBatchCancelConfirmationModal: () => void;
    openBatchTerminateConfirmationModal: () => void;
    openBatchResetConfirmationModal: () => void;
    handleSelectAll: (workflows: WorkflowExecution[]) => void;
    handleSelectPage: (checked: boolean, workflows: WorkflowExecution[]) => void;
};
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        cloud: {
            slot: string;
        };
    };
};
export type WorkflowsWithNewSearchProps = typeof __propDef.props;
export type WorkflowsWithNewSearchEvents = typeof __propDef.events;
export type WorkflowsWithNewSearchSlots = typeof __propDef.slots;
export default class WorkflowsWithNewSearch extends SvelteComponentTyped<WorkflowsWithNewSearchProps, WorkflowsWithNewSearchEvents, WorkflowsWithNewSearchSlots> {
}
export {};
