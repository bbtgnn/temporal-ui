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
export type SignalConfirmationModalProps = typeof __propDef.props;
export type SignalConfirmationModalEvents = typeof __propDef.events;
export type SignalConfirmationModalSlots = typeof __propDef.slots;
export default class SignalConfirmationModal extends SvelteComponentTyped<SignalConfirmationModalProps, SignalConfirmationModalEvents, SignalConfirmationModalSlots> {
}
export {};
