import { SvelteComponentTyped } from "svelte";
import type { HTMLInputAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLInputAttributes & {
        value: number;
        id: string;
        label: string;
        labelHidden?: boolean;
        min?: number;
        max?: number;
        step?: number;
        'data-testid'?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RangeInputProps = typeof __propDef.props;
export type RangeInputEvents = typeof __propDef.events;
export type RangeInputSlots = typeof __propDef.slots;
export default class RangeInput extends SvelteComponentTyped<RangeInputProps, RangeInputEvents, RangeInputSlots> {
}
export {};
