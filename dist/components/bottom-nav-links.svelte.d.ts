import { SvelteComponentTyped } from "svelte";
import type { NavLinkListItem } from '../types/global';
declare const __propDef: {
    props: {
        open?: boolean;
        linkList: NavLinkListItem[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BottomNavLinksProps = typeof __propDef.props;
export type BottomNavLinksEvents = typeof __propDef.events;
export type BottomNavLinksSlots = typeof __propDef.slots;
export default class BottomNavLinks extends SvelteComponentTyped<BottomNavLinksProps, BottomNavLinksEvents, BottomNavLinksSlots> {
}
export {};
