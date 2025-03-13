import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventStatusFilterProps = typeof __propDef.props;
export type EventStatusFilterEvents = typeof __propDef.events;
export type EventStatusFilterSlots = typeof __propDef.slots;
export default class EventStatusFilter extends SvelteComponentTyped<EventStatusFilterProps, EventStatusFilterEvents, EventStatusFilterSlots> {
}
export {};
