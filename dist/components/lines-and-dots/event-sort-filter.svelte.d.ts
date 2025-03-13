import { SvelteComponentTyped } from "svelte";
export declare const dateParameter = "time-format";
declare const __propDef: {
    props: {
        compact: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventSortFilterProps = typeof __propDef.props;
export type EventSortFilterEvents = typeof __propDef.events;
export type EventSortFilterSlots = typeof __propDef.slots;
export default class EventSortFilter extends SvelteComponentTyped<EventSortFilterProps, EventSortFilterEvents, EventSortFilterSlots> {
}
export {};
