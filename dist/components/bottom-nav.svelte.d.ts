import { SvelteComponentTyped } from "svelte";
import type { NamespaceListItem, NavLinkListItem } from '../types/global';
declare const __propDef: {
    props: {
        namespaceList?: NamespaceListItem[] | undefined;
        linkList: NavLinkListItem[];
        isCloud?: boolean;
        showNamespacePicker?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        nsPicker: {
            open: boolean;
            closeMenu: () => void;
        };
        default: {};
    };
};
export type BottomNavProps = typeof __propDef.props;
export type BottomNavEvents = typeof __propDef.events;
export type BottomNavSlots = typeof __propDef.slots;
export default class BottomNav extends SvelteComponentTyped<BottomNavProps, BottomNavEvents, BottomNavSlots> {
}
export {};
