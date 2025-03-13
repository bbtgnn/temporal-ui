import { SvelteComponentTyped } from "svelte";
import type { EventGroups } from '../../models/event-groups/event-groups';
import type { IterableEventWithPending } from '../../types/events';
declare const __propDef: {
    props: {
        items: IterableEventWithPending[];
        groups?: EventGroups;
        updating?: boolean;
        compact?: boolean;
        openExpanded?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventSummaryTableProps = typeof __propDef.props;
export type EventSummaryTableEvents = typeof __propDef.events;
export type EventSummaryTableSlots = typeof __propDef.slots;
export default class EventSummaryTable extends SvelteComponentTyped<EventSummaryTableProps, EventSummaryTableEvents, EventSummaryTableSlots> {
}
export {};
