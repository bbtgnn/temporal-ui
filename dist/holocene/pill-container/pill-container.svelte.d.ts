import { SvelteComponentTyped } from "svelte";
export type PillsContext = {
    activePill: Writable<string>;
    registerPill: (pill: string) => void;
    selectPill: (pill: string) => void;
};
export declare const PILLS: {};
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
export type PillContainerProps = typeof __propDef.props;
export type PillContainerEvents = typeof __propDef.events;
export type PillContainerSlots = typeof __propDef.slots;
export default class PillContainer extends SvelteComponentTyped<PillContainerProps, PillContainerEvents, PillContainerSlots> {
}
export {};
