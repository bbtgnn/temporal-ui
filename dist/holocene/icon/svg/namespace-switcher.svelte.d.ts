import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NamespaceSwitcherProps = typeof __propDef.props;
export type NamespaceSwitcherEvents = typeof __propDef.events;
export type NamespaceSwitcherSlots = typeof __propDef.slots;
export default class NamespaceSwitcher extends SvelteComponentTyped<NamespaceSwitcherProps, NamespaceSwitcherEvents, NamespaceSwitcherSlots> {
}
export {};
