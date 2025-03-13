import { SvelteComponentTyped } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAttributes<HTMLDivElement> & {
        label: string;
        open?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type CollapsibleDividerProps = typeof __propDef.props;
export type CollapsibleDividerEvents = typeof __propDef.events;
export type CollapsibleDividerSlots = typeof __propDef.slots;
export default class CollapsibleDivider extends SvelteComponentTyped<CollapsibleDividerProps, CollapsibleDividerEvents, CollapsibleDividerSlots> {
}
export {};
