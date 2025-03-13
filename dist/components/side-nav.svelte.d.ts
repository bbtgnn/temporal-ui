import { SvelteComponentTyped } from "svelte";
import type { NavLinkListItem } from '../types/global';
declare const __propDef: {
    props: {
        isCloud?: boolean;
        linkList: NavLinkListItem[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        bottom: {};
    };
};
export type SideNavProps = typeof __propDef.props;
export type SideNavEvents = typeof __propDef.events;
export type SideNavSlots = typeof __propDef.slots;
export default class SideNav extends SvelteComponentTyped<SideNavProps, SideNavEvents, SideNavSlots> {
}
export {};
