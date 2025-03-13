import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof NumberInput;
    args: {
        label: string;
        value: number;
        placeholder: string;
        units: string;
        min: number;
        max: number;
        search: false;
        labelHidden: false;
        disabled: false;
        required: false;
        hintText: string;
    };
    argTypes: {
        label: {
            name: string;
            control: "text";
        };
        value: {
            name: string;
            control: "number";
        };
        placeholder: {
            name: string;
            control: "text";
        };
        units: {
            name: string;
            control: "text";
        };
        hintText: {
            name: string;
            control: "text";
        };
        disabled: {
            name: string;
            control: "boolean";
        };
        required: {
            name: string;
            control: "boolean";
        };
        labelHidden: {
            name: string;
            control: "boolean";
        };
        icon: {
            name: string;
            control: "select";
            options: string[];
        };
        max: {
            name: string;
            control: {
                type: "number";
                min: number;
            };
        };
        min: {
            name: string;
            control: {
                type: "number";
                min: number;
            };
        };
        search: {
            name: string;
            control: "boolean";
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
export type NumberInputProps = typeof __propDef.props;
export type NumberInputEvents = typeof __propDef.events;
export type NumberInputSlots = typeof __propDef.slots;
export default class NumberInput extends SvelteComponentTyped<NumberInputProps, NumberInputEvents, NumberInputSlots> {
}
export {};
