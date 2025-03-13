import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        open?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type BottomNavSettingsProps = typeof __propDef.props;
export type BottomNavSettingsEvents = typeof __propDef.events;
export type BottomNavSettingsSlots = typeof __propDef.slots;
export default class BottomNavSettings extends SvelteComponentTyped<BottomNavSettingsProps, BottomNavSettingsEvents, BottomNavSettingsSlots> {
}
export {};
