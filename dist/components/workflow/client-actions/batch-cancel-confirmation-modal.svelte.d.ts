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
export type BatchCancelConfirmationModalProps = typeof __propDef.props;
export type BatchCancelConfirmationModalEvents = typeof __propDef.events;
export type BatchCancelConfirmationModalSlots = typeof __propDef.slots;
export default class BatchCancelConfirmationModal extends SvelteComponentTyped<BatchCancelConfirmationModalProps, BatchCancelConfirmationModalEvents, BatchCancelConfirmationModalSlots> {
}
export {};
