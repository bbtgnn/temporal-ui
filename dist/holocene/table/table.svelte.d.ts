import { SvelteComponentTyped } from "svelte";
import type { HTMLTableAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLTableAttributes & {
        variant?: 'simple' | 'fancy';
        updating?: boolean;
        class?: string;
        'data-testid'?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        caption: {};
        headers: {};
        default: {};
    };
};
export type TableProps = typeof __propDef.props;
export type TableEvents = typeof __propDef.events;
export type TableSlots = typeof __propDef.slots;
export default class Table extends SvelteComponentTyped<TableProps, TableEvents, TableSlots> {
}
export {};
