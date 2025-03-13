import { SvelteComponentTyped } from "svelte";
import type { NamespaceListItem } from '../types/global';
declare const __propDef: {
    props: {
        open?: boolean;
        namespaceList?: NamespaceListItem[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BottomNavNamespacesProps = typeof __propDef.props;
export type BottomNavNamespacesEvents = typeof __propDef.events;
export type BottomNavNamespacesSlots = typeof __propDef.slots;
export default class BottomNavNamespaces extends SvelteComponentTyped<BottomNavNamespacesProps, BottomNavNamespacesEvents, BottomNavNamespacesSlots> {
}
export {};
