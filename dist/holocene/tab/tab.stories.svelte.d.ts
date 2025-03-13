import { SvelteComponentTyped } from "svelte";
import TabList from './tab-list.svelte';
import TabPanel from './tab-panel.svelte';
import Tabs from './tabs.svelte';
export declare const meta: {
    title: string;
    component: typeof Tabs;
    subcomponents: {
        TabList: typeof TabList;
        TabPanel: typeof TabPanel;
        Tab: typeof Tab;
    };
    argTypes: {
        TABS: {
            name: string;
            table: {
                disable: true;
            };
        };
    };
};
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TabProps = typeof __propDef.props;
export type TabEvents = typeof __propDef.events;
export type TabSlots = typeof __propDef.slots;
export default class Tab extends SvelteComponentTyped<TabProps, TabEvents, TabSlots> {
}
export {};
