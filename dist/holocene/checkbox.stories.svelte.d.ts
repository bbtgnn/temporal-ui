import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Checkbox;
    args: {
        label: string;
        disabled: false;
        checked: false;
        labelHidden: false;
        indeterminate: false;
        required: false;
        error: string;
        valid: true;
    };
    argTypes: {
        label: {
            control: "text";
        };
        disabled: {
            control: "boolean";
        };
        checked: {
            control: "boolean";
        };
        labelHidden: {
            control: "boolean";
        };
        indeterminate: {
            control: "boolean";
        };
        value: {
            control: "text";
            table: {
                disable: true;
            };
        };
        group: {
            control: "object";
            table: {
                disable: true;
            };
        };
        valid: {
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
export type CheckboxProps = typeof __propDef.props;
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
export default class Checkbox extends SvelteComponentTyped<CheckboxProps, CheckboxEvents, CheckboxSlots> {
}
export {};
