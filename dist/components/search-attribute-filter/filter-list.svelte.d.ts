import { SvelteComponentTyped } from "svelte";
import type { SearchAttributeFilter } from '../../models/search-attribute-filters';
declare const __propDef: {
    props: {
        filters: SearchAttributeFilter[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FilterListProps = typeof __propDef.props;
export type FilterListEvents = typeof __propDef.events;
export type FilterListSlots = typeof __propDef.slots;
export default class FilterList extends SvelteComponentTyped<FilterListProps, FilterListEvents, FilterListSlots> {
}
export {};
