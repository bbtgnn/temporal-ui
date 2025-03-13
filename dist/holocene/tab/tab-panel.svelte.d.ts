import { SvelteComponentTyped } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAttributes<HTMLDivElement> & {
        id: string;
        tabId: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TabPanelProps = typeof __propDef.props;
export type TabPanelEvents = typeof __propDef.events;
export type TabPanelSlots = typeof __propDef.slots;
export default class TabPanel extends SvelteComponentTyped<TabPanelProps, TabPanelEvents, TabPanelSlots> {
}
export {};
