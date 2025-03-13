import { SvelteComponentTyped } from "svelte";
import { type Writable } from 'svelte/store';
import type { WorkflowExecution } from '../../../types/workflows';
declare const __propDef: {
    props: {
        open: boolean;
        workflow: WorkflowExecution;
        namespace: string;
        refresh: Writable<number>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ResetConfirmationModalProps = typeof __propDef.props;
export type ResetConfirmationModalEvents = typeof __propDef.events;
export type ResetConfirmationModalSlots = typeof __propDef.slots;
export default class ResetConfirmationModal extends SvelteComponentTyped<ResetConfirmationModalProps, ResetConfirmationModalEvents, ResetConfirmationModalSlots> {
}
export {};
