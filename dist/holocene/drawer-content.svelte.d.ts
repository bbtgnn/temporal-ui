import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        subtitle: {};
        default: {};
    };
};
export type DrawerContentProps = typeof __propDef.props;
export type DrawerContentEvents = typeof __propDef.events;
export type DrawerContentSlots = typeof __propDef.slots;
export default class DrawerContent extends SvelteComponentTyped<DrawerContentProps, DrawerContentEvents, DrawerContentSlots> {
}
export {};
