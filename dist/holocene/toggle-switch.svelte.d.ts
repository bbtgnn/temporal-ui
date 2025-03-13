import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        id: string;
        label: string;
        disabled?: boolean;
        checked?: boolean;
        labelPosition?: 'left' | 'right';
        labelHidden?: boolean;
    };
    events: {
        change: Event;
    } & {
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
