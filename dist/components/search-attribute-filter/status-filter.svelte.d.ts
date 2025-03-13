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
export type StatusFilterProps = typeof __propDef.props;
export type StatusFilterEvents = typeof __propDef.events;
export type StatusFilterSlots = typeof __propDef.slots;
export default class StatusFilter extends SvelteComponentTyped<StatusFilterProps, StatusFilterEvents, StatusFilterSlots> {
}
export {};
