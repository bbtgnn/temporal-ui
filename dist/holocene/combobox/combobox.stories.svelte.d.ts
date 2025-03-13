import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Combobox;
    args: {
        label: string;
        placeholder: string;
        noResultsText: string;
        readonly: false;
        required: false;
        disabled: false;
        valid: true;
        error: string;
        leadingIcon: "search";
        labelHidden: false;
    };
    argTypes: {
        label: {
            name: string;
            control: "text";
        };
        value: {
            name: string;
            control: "text";
            table: {
                disable: true;
            };
        };
        placeholder: {
            name: string;
            control: "text";
        };
        readonly: {
            name: string;
            control: "boolean";
        };
        required: {
            name: string;
            control: "boolean";
        };
        disabled: {
            name: string;
            control: "boolean";
        };
        error: {
            name: string;
            control: "text";
        };
        valid: {
            name: string;
            control: "boolean";
        };
        labelHidden: {
            name: string;
            control: "boolean";
        };
        minSize: {
            name: string;
            control: "number";
        };
        maxSize: {
            name: string;
            control: "number";
        };
        leadingIcon: {
            name: string;
            control: "select";
            options: string[];
        };
        noResultsText: {
            name: string;
            control: "text";
        };
        optionValueKey: {
            control: "text";
            table: {
                disable: true;
            };
        };
        optionLabelKey: {
            control: "text";
            table: {
                disable: true;
            };
        };
        options: {
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
export type ComboboxProps = typeof __propDef.props;
export type ComboboxEvents = typeof __propDef.events;
export type ComboboxSlots = typeof __propDef.slots;
export default class Combobox extends SvelteComponentTyped<ComboboxProps, ComboboxEvents, ComboboxSlots> {
}
export {};
