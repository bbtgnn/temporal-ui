import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof SplitButton;
    args: {
        label: string;
        menuLabel: string;
        position: "left";
        icon: any;
        disabled: false;
        primaryActionDisabled: false;
        href: string;
    };
    argTypes: {
        position: {
            name: string;
            control: "radio";
            options: string[];
        };
        label: {
            name: string;
            control: "text";
        };
        menuLabel: {
            name: string;
            control: "text";
            table: {
                category: string;
            };
        };
        icon: {
            name: string;
            control: "select";
            options: string[];
        };
        disabled: {
            name: string;
            control: "boolean";
        };
        primaryActionDisabled: {
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
export type SplitButtonProps = typeof __propDef.props;
export type SplitButtonEvents = typeof __propDef.events;
export type SplitButtonSlots = typeof __propDef.slots;
export default class SplitButton extends SvelteComponentTyped<SplitButtonProps, SplitButtonEvents, SplitButtonSlots> {
}
export {};
