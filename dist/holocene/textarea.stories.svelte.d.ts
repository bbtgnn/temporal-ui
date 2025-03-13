import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Textarea;
    args: {
        label: string;
        description: string;
        value: string;
        placeholder: string;
        error: string;
        required: false;
        disabled: false;
        isValid: true;
        rows: number;
        spellcheck: false;
        maxLength: any;
        labelHidden: false;
    };
    argTypes: {
        label: {
            name: string;
            control: "text";
        };
        description: {
            name: string;
            control: "text";
        };
        value: {
            name: string;
            control: "text";
        };
        placeholder: {
            name: string;
            control: "text";
        };
        error: {
            name: string;
            control: "text";
        };
        required: {
            name: string;
            control: "boolean";
        };
        disabled: {
            name: string;
            control: "boolean";
        };
        isValid: {
            name: string;
            control: "boolean";
        };
        rows: {
            name: string;
            control: "range";
            min: number;
            max: number;
            step: number;
        };
        spellcheck: {
            name: string;
            control: "boolean";
        };
        maxLength: {
            name: string;
            control: "number";
        };
        labelHidden: {
            name: string;
            control: "boolean";
        };
        id: {
            name: string;
            control: "text";
            table: {
                disable: true;
            };
        };
    };
};
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TextareaProps = typeof __propDef.props;
export type TextareaEvents = typeof __propDef.events;
export type TextareaSlots = typeof __propDef.slots;
export default class Textarea extends SvelteComponentTyped<TextareaProps, TextareaEvents, TextareaSlots> {
}
export {};
