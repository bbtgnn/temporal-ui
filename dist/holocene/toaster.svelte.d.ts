import { SvelteComponentTyped } from "svelte";
import type { Toaster } from '../stores/toaster';
declare const __propDef: {
    props: {
        pop: Toaster['pop'];
        toasts: Toaster['toasts'];
        closeButtonLabel: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ToasterProps = typeof __propDef.props;
export type ToasterEvents = typeof __propDef.events;
export type ToasterSlots = typeof __propDef.slots;
export default class Toaster extends SvelteComponentTyped<ToasterProps, ToasterEvents, ToasterSlots> {
}
export {};
