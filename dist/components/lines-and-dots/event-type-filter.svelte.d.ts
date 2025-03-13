import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        compact?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventTypeFilterProps = typeof __propDef.props;
export type EventTypeFilterEvents = typeof __propDef.events;
export type EventTypeFilterSlots = typeof __propDef.slots;
export default class EventTypeFilter extends SvelteComponentTyped<EventTypeFilterProps, EventTypeFilterEvents, EventTypeFilterSlots> {
}
export {};
