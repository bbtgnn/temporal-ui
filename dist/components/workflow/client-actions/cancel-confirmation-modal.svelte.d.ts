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
export type CancelConfirmationModalProps = typeof __propDef.props;
export type CancelConfirmationModalEvents = typeof __propDef.events;
export type CancelConfirmationModalSlots = typeof __propDef.slots;
export default class CancelConfirmationModal extends SvelteComponentTyped<CancelConfirmationModalProps, CancelConfirmationModalEvents, CancelConfirmationModalSlots> {
}
export {};
