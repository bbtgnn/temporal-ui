import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        open?: boolean;
        position?: 'bottom' | 'right';
        dark?: boolean;
        onClick: (e: MouseEvent | CustomEvent) => void;
        id?: string;
        closeButtonLabel: string;
        closePadding?: boolean;
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'close-button': {};
        default: {};
    };
};
export type DrawerProps = typeof __propDef.props;
export type DrawerEvents = typeof __propDef.events;
export type DrawerSlots = typeof __propDef.slots;
export default class Drawer extends SvelteComponentTyped<DrawerProps, DrawerEvents, DrawerSlots> {
}
export {};
