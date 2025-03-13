import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        namespace: string;
        open?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BatchResetConfirmationModalProps = typeof __propDef.props;
export type BatchResetConfirmationModalEvents = typeof __propDef.events;
export type BatchResetConfirmationModalSlots = typeof __propDef.slots;
export default class BatchResetConfirmationModal extends SvelteComponentTyped<BatchResetConfirmationModalProps, BatchResetConfirmationModalEvents, BatchResetConfirmationModalSlots> {
}
export {};
