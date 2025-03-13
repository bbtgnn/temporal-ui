import { SvelteComponentTyped } from "svelte";
import ToggleButtons from './toggle-buttons.svelte';
export declare const meta: {
    title: string;
    component: typeof ToggleButton;
    subcomponents: {
        ToggleButtons: typeof ToggleButtons;
    };
    argTypes: {
        icon: {
            name: string;
            control: "select";
            options: string[];
        };
        group: {
            table: {
                disable: true;
            };
        };
        base: {
            table: {
                disable: true;
            };
        };
        href: {
            table: {
                disable: true;
            };
        };
        active: {
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
export type ToggleButtonProps = typeof __propDef.props;
export type ToggleButtonEvents = typeof __propDef.events;
export type ToggleButtonSlots = typeof __propDef.slots;
export default class ToggleButton extends SvelteComponentTyped<ToggleButtonProps, ToggleButtonEvents, ToggleButtonSlots> {
}
export {};
