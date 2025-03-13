import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof RadioInput;
    args: {
        label: string;
        value: string;
        description: string;
        checked: boolean;
        disabled: boolean;
        required: boolean;
        labelHidden: boolean;
        name: string;
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
            table: {
                disable: true;
            };
        };
        checked: {
            table: {
                disable: true;
            };
        };
        disabled: {
            table: {
                disable: true;
            };
        };
        required: {
            table: {
                disable: true;
            };
        };
        labelHidden: {
            table: {
                disable: true;
            };
        };
        onCheck: {
            table: {
                disable: true;
            };
        };
        group: {
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
export type RadioInputProps = typeof __propDef.props;
export type RadioInputEvents = typeof __propDef.events;
export type RadioInputSlots = typeof __propDef.slots;
export default class RadioInput extends SvelteComponentTyped<RadioInputProps, RadioInputEvents, RadioInputSlots> {
}
export {};
