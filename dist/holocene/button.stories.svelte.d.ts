import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Button;
    args: {
        variant: "primary";
        size: "md";
        loading: false;
        disabled: false;
    };
    argTypes: {
        variant: {
            name: string;
            control: "select";
            options: string[];
        };
        size: {
            name: string;
            control: "select";
            options: string[];
        };
        loading: {
            name: string;
            control: "boolean";
        };
        count: {
            name: string;
            control: {
                type: "number";
                min: number;
                max: number;
                step: number;
            };
        };
        leadingIcon: {
            name: string;
            control: "select";
            options: string[];
            table: {
                category: string;
            };
        };
        trailingIcon: {
            name: string;
            control: "select";
            options: string[];
            table: {
                category: string;
            };
        };
        href: {
            name: string;
            control: "text";
            table: {
                category: string;
            };
        };
        target: {
            name: string;
            control: "select";
            options: string[];
            table: {
                category: string;
            };
            if: {
                arg: string;
            };
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
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
