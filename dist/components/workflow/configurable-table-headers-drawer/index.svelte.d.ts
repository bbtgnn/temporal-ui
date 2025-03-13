import { SvelteComponentTyped } from "svelte";
import type { Readable } from 'svelte/store';
import { type ConfigurableTableHeader, type ConfigurableTableType } from '../../../stores/configurable-table-columns';
declare const __propDef: {
    props: {
        availableColumns: Readable<ConfigurableTableHeader[]>;
        open: boolean;
        table?: ConfigurableTableType;
        type: string;
        title: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
