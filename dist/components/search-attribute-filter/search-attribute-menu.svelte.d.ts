import { SvelteComponentTyped } from "svelte";
import type { SearchAttributeFilter } from '../../models/search-attribute-filters';
import type { SearchAttributeOption } from '../../stores/search-attributes';
declare const __propDef: {
    props: {
        filters: SearchAttributeFilter[];
        options: SearchAttributeOption[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SearchAttributeMenuProps = typeof __propDef.props;
export type SearchAttributeMenuEvents = typeof __propDef.events;
export type SearchAttributeMenuSlots = typeof __propDef.slots;
export default class SearchAttributeMenu extends SvelteComponentTyped<SearchAttributeMenuProps, SearchAttributeMenuEvents, SearchAttributeMenuSlots> {
}
export {};
