import { SvelteComponentTyped } from "svelte";
export type TabContext = {
    activeTab: Writable<string>;
    activePanel: Writable<string>;
    registerTab: (tab: string) => void;
    registerPanel: (panel: string) => void;
    selectTab: (tab: string) => void;
};
export declare const TABS: {};
import type { HTMLAttributes } from 'svelte/elements';
import { type Writable } from 'svelte/store';
declare const __propDef: {
    props: HTMLAttributes<HTMLDivElement>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TabsProps = typeof __propDef.props;
export type TabsEvents = typeof __propDef.events;
export type TabsSlots = typeof __propDef.slots;
export default class Tabs extends SvelteComponentTyped<TabsProps, TabsEvents, TabsSlots> {
}
export {};
