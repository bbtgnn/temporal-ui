import { SvelteComponentTyped } from "svelte";
import type { IconName } from '../icon';
declare const __propDef: {
    props: {
        [x: string]: any;
        icon?: IconName;
        id: string;
        value: number;
        label: string;
        labelHidden?: boolean;
        units?: string;
        placeholder?: string;
        name?: string;
        disabled?: boolean;
        required?: boolean;
        hintText?: string;
        max?: number;
        min?: number;
        search?: boolean;
    };
    events: {
        input: Event;
        change: Event;
        focus: FocusEvent;
        blur: FocusEvent;
        keydown: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NumberInputProps = typeof __propDef.props;
export type NumberInputEvents = typeof __propDef.events;
export type NumberInputSlots = typeof __propDef.slots;
export default class NumberInput extends SvelteComponentTyped<NumberInputProps, NumberInputEvents, NumberInputSlots> {
}
export {};
