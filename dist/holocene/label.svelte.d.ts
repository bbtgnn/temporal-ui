import { SvelteComponentTyped } from "svelte";
import type { HTMLLabelAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLLabelAttributes & {
        label?: string;
        hidden?: boolean;
        required?: boolean;
        disabled?: boolean;
        'data-testid'?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type LabelProps = typeof __propDef.props;
export type LabelEvents = typeof __propDef.events;
export type LabelSlots = typeof __propDef.slots;
export default class Label extends SvelteComponentTyped<LabelProps, LabelEvents, LabelSlots> {
}
export {};
