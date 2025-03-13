import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof ChipInput;
    args: {
        label: string;
        placeholder: string;
        disabled: false;
        required: false;
        external: false;
        hintText: string;
        removeChipButtonLabel: string;
        labelHidden: false;
        validator: (value: string) => boolean;
        chips: string[];
    };
    argTypes: {
        label: {
            name: string;
            control: "text";
        };
        placeholder: {
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
        external: {
            name: string;
            control: "boolean";
        };
        labelHidden: {
            name: string;
            control: "boolean";
        };
        chips: {
            name: string;
            table: {
                disable: true;
            };
        };
        validator: {
            table: {
                disable: true;
            };
        };
        removeChipButtonLabel: {
            name: string;
            control: "text";
            table: {
                category: string;
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
export type ChipInputProps = typeof __propDef.props;
export type ChipInputEvents = typeof __propDef.events;
export type ChipInputSlots = typeof __propDef.slots;
export default class ChipInput extends SvelteComponentTyped<ChipInputProps, ChipInputEvents, ChipInputSlots> {
}
export {};
