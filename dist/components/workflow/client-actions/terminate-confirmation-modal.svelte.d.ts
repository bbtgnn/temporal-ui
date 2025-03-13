import { SvelteComponentTyped } from "svelte";
import type { Writable } from 'svelte/store';
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
export type TerminateConfirmationModalProps = typeof __propDef.props;
export type TerminateConfirmationModalEvents = typeof __propDef.events;
export type TerminateConfirmationModalSlots = typeof __propDef.slots;
export default class TerminateConfirmationModal extends SvelteComponentTyped<TerminateConfirmationModalProps, TerminateConfirmationModalEvents, TerminateConfirmationModalSlots> {
}
export {};
