import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof ToggleSwitch;
    args: {
        label: string;
        labelPosition: "right";
        labelHidden: false;
        disabled: false;
        checked: false;
    };
    argTypes: {
        label: {
            name: string;
            control: "text";
        };
        labelPosition: {
            name: string;
            control: "radio";
            options: string[];
        };
        labelHidden: {
            name: string;
            control: "boolean";
        };
        disabled: {
            name: string;
            control: "boolean";
        };
        checked: {
            name: string;
            control: "boolean";
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
export type ToggleSwitchProps = typeof __propDef.props;
export type ToggleSwitchEvents = typeof __propDef.events;
export type ToggleSwitchSlots = typeof __propDef.slots;
export default class ToggleSwitch extends SvelteComponentTyped<ToggleSwitchProps, ToggleSwitchEvents, ToggleSwitchSlots> {
}
export {};
