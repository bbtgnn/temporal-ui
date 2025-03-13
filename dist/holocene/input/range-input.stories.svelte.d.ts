import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof RangeInput;
    args: {
        value: number;
        min: number;
        max: number;
        step: number;
        label: string;
        required: false;
        labelHidden: false;
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
        min: {
            name: string;
            control: {
                type: "number";
                min: number;
            };
            table: {
                category: string;
            };
        };
        max: {
            name: string;
            control: {
                type: "number";
                min: number;
            };
            table: {
                category: string;
            };
        };
        step: {
            name: string;
            control: {
                type: "number";
                min: number;
            };
            table: {
                category: string;
            };
        };
        required: {
            name: string;
            control: "boolean";
            table: {
                category: string;
            };
        };
        labelHidden: {
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
export type RangeInputProps = typeof __propDef.props;
export type RangeInputEvents = typeof __propDef.events;
export type RangeInputSlots = typeof __propDef.slots;
export default class RangeInput extends SvelteComponentTyped<RangeInputProps, RangeInputEvents, RangeInputSlots> {
}
export {};
