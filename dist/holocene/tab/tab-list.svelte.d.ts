import { SvelteComponentTyped } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAttributes<HTMLDivElement> & {
        label: string;
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TabListProps = typeof __propDef.props;
export type TabListEvents = typeof __propDef.events;
export type TabListSlots = typeof __propDef.slots;
export default class TabList extends SvelteComponentTyped<TabListProps, TabListEvents, TabListSlots> {
}
export {};
