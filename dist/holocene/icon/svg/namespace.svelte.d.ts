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
export type NamespaceProps = typeof __propDef.props;
export type NamespaceEvents = typeof __propDef.events;
export type NamespaceSlots = typeof __propDef.slots;
export default class Namespace extends SvelteComponentTyped<NamespaceProps, NamespaceEvents, NamespaceSlots> {
}
export {};
