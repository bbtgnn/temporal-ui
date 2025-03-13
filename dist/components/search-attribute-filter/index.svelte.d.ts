import { SvelteComponentTyped } from "svelte";
import { type Writable } from 'svelte/store';
export declare const FILTER_CONTEXT = "filter-context";
export interface FilterContext {
    filter: Writable<SearchAttributeFilter>;
    activeQueryIndex: Writable<number>;
    handleSubmit: () => void;
    focusedElementId: Writable<string>;
    resetFilter: () => void;
}
import type { SearchAttributeFilter } from '../../models/search-attribute-filters';
declare const __propDef: {
    props: {
        filters: SearchAttributeFilter[];
        options?: import("../../stores/search-attributes").SearchAttributeOption[];
        showFilter?: boolean;
        refresh: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        actions: {};
    };
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
