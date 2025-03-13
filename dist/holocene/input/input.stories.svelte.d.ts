import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Input;
    args: {
        value: string;
        label: string;
        placeholder: string;
        labelHidden: false;
        disabled: false;
        clearable: false;
        copyable: false;
        required: false;
        error: false;
        spellcheck: false;
        autocomplete: string;
        suffix: string;
        valid: true;
        hintText: string;
        clearButtonLabel: string;
        copyButtonLabel: string;
    };
    argTypes: {
        label: {
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
        required: {
            name: string;
            control: "boolean";
        };
        error: {
            name: string;
            control: "boolean";
        };
        disabled: {
            name: string;
            control: "boolean";
        };
        valid: {
            name: string;
            control: "boolean";
        };
        autocomplete: {
            name: string;
            control: "inline-radio";
            options: string[];
        };
        autoFocus: {
            name: string;
            control: "boolean";
        };
        hintText: {
            name: string;
            control: "text";
        };
        suffix: {
            name: string;
            control: "text";
        };
        labelHidden: {
            name: string;
            control: "boolean";
        };
        clearable: {
            name: string;
            control: "boolean";
        };
        copyable: {
            name: string;
            control: "boolean";
        };
        icon: {
            name: string;
            control: "select";
            options: string[];
        };
        spellcheck: {
            name: string;
            control: "boolean";
        };
        maxLength: {
            name: string;
            control: "number";
        };
        hideCount: {
            name: string;
            control: "boolean";
        };
        copyButtonLabel: {
            name: string;
            control: "text";
            table: {
                category: string;
            };
        };
        clearButtonLabel: {
            name: string;
            control: "text";
            table: {
                category: string;
            };
        };
        noBorder: {
            name: string;
            control: "boolean";
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
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponentTyped<InputProps, InputEvents, InputSlots> {
}
export {};
