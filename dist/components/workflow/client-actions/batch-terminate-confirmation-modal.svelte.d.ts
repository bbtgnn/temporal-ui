import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        namespace: string;
        open: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BatchTerminateConfirmationModalProps = typeof __propDef.props;
export type BatchTerminateConfirmationModalEvents = typeof __propDef.events;
export type BatchTerminateConfirmationModalSlots = typeof __propDef.slots;
export default class BatchTerminateConfirmationModal extends SvelteComponentTyped<BatchTerminateConfirmationModalProps, BatchTerminateConfirmationModalEvents, BatchTerminateConfirmationModalSlots> {
}
export {};
