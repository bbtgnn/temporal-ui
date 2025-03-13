import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Select;
    args: {
        id: string;
        label: string;
        placeholder: string;
        leadingIcon: any;
        labelHidden: false;
        disabled: false;
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
        leadingIcon: {
            name: string;
            control: "select";
            options: string[];
        };
        disabled: {
            name: string;
            control: "boolean";
        };
        labelHidden: {
            name: string;
            control: "boolean";
        };
        onChange: {
            table: {
                disable: true;
            };
        };
        value: {
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
export type SelectProps = typeof __propDef.props;
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponentTyped<SelectProps, SelectEvents, SelectSlots> {
}
export {};
