import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id?: string;
        error?: boolean;
        input: string;
        label?: string;
        loading?: boolean;
        hintText?: string;
        editing?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PayloadInputProps = typeof __propDef.props;
export type PayloadInputEvents = typeof __propDef.events;
export type PayloadInputSlots = typeof __propDef.slots;
export default class PayloadInput extends SvelteComponentTyped<PayloadInputProps, PayloadInputEvents, PayloadInputSlots> {
}
export {};
