import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ToggleButtonsProps = typeof __propDef.props;
export type ToggleButtonsEvents = typeof __propDef.events;
export type ToggleButtonsSlots = typeof __propDef.slots;
export default class ToggleButtons extends SvelteComponentTyped<ToggleButtonsProps, ToggleButtonsEvents, ToggleButtonsSlots> {
}
export {};
