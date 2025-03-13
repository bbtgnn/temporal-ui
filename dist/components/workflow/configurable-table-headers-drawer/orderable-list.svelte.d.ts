import { SvelteComponentTyped } from "svelte";
import type { Readable } from 'svelte/store';
import { type ConfigurableTableHeader, type ConfigurableTableType } from '../../../stores/configurable-table-columns';
declare const __propDef: {
    props: {
        table: ConfigurableTableType;
        availableColumns: Readable<ConfigurableTableHeader[]>;
        type: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type OrderableListProps = typeof __propDef.props;
export type OrderableListEvents = typeof __propDef.events;
export type OrderableListSlots = typeof __propDef.slots;
export default class OrderableList extends SvelteComponentTyped<OrderableListProps, OrderableListEvents, OrderableListSlots> {
}
export {};
