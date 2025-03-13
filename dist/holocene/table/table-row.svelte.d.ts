import { SvelteComponentTyped } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAttributes<HTMLTableRowElement> & {
        'data-testid'?: string;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TableRowProps = typeof __propDef.props;
export type TableRowEvents = typeof __propDef.events;
export type TableRowSlots = typeof __propDef.slots;
export default class TableRow extends SvelteComponentTyped<TableRowProps, TableRowEvents, TableRowSlots> {
}
export {};
