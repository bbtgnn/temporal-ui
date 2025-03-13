import { SvelteComponentTyped } from "svelte";
import type { EventGroups } from '../../models/event-groups/event-groups';
import type { IterableEventWithPending } from '../../types/events';
declare const __propDef: {
    props: {
        history: IterableEventWithPending[];
        groups: EventGroups;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventSummaryProps = typeof __propDef.props;
export type EventSummaryEvents = typeof __propDef.events;
export type EventSummarySlots = typeof __propDef.slots;
export default class EventSummary extends SvelteComponentTyped<EventSummaryProps, EventSummaryEvents, EventSummarySlots> {
}
export {};
