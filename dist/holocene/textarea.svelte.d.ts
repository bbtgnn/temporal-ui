import { SvelteComponentTyped } from "svelte";
import type { HTMLTextareaAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLTextareaAttributes & {
        disabled?: boolean;
        error?: string;
        isValid?: boolean;
        placeholder?: string;
        rows?: number;
        spellcheck?: boolean;
        value: string;
        label: string;
        labelHidden?: boolean;
        id: string;
        required?: boolean;
        description?: string;
        maxLength?: number;
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
    slots: {
        error: {};
    };
};
export type TextareaProps = typeof __propDef.props;
export type TextareaEvents = typeof __propDef.events;
export type TextareaSlots = typeof __propDef.slots;
export default class Textarea extends SvelteComponentTyped<TextareaProps, TextareaEvents, TextareaSlots> {
}
export {};
