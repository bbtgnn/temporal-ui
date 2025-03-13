import { SvelteComponentTyped } from "svelte";
import type { ToastVariant } from '../types/holocene';
declare const __propDef: {
    props: {
        id: string;
        variant: ToastVariant;
        closeButtonLabel: string;
    };
    events: {
        dismiss: CustomEvent<{
            id: string;
        }>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ToastProps = typeof __propDef.props;
export type ToastEvents = typeof __propDef.events;
export type ToastSlots = typeof __propDef.slots;
export default class Toast extends SvelteComponentTyped<ToastProps, ToastEvents, ToastSlots> {
}
export {};
