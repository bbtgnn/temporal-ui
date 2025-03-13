import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        open?: boolean;
        onOpen: () => void;
        onClose: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventShortcutKeysProps = typeof __propDef.props;
export type EventShortcutKeysEvents = typeof __propDef.events;
export type EventShortcutKeysSlots = typeof __propDef.slots;
export default class EventShortcutKeys extends SvelteComponentTyped<EventShortcutKeysProps, EventShortcutKeysEvents, EventShortcutKeysSlots> {
}
export {};
