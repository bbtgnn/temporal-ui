import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        tooltipText?: string;
        arrow?: 'up' | 'down' | 'left' | 'right' | undefined;
        title: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ShortcutProps = typeof __propDef.props;
export type ShortcutEvents = typeof __propDef.events;
export type ShortcutSlots = typeof __propDef.slots;
export default class Shortcut extends SvelteComponentTyped<ShortcutProps, ShortcutEvents, ShortcutSlots> {
}
export {};
