import { SvelteComponentTyped } from "svelte";
import type { EventGroup } from '../../models/event-groups/event-groups';
import type { IterableEvent } from '../../types/events';
declare const __propDef: {
    props: {
        event: IterableEvent;
        group?: EventGroup | undefined;
        initialItem: IterableEvent | undefined;
        index?: number;
        compact?: boolean;
        expandAll?: boolean;
        typedError?: boolean;
        active?: boolean;
        onRowClick?: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventSummaryRowProps = typeof __propDef.props;
export type EventSummaryRowEvents = typeof __propDef.events;
export type EventSummaryRowSlots = typeof __propDef.slots;
export default class EventSummaryRow extends SvelteComponentTyped<EventSummaryRowProps, EventSummaryRowEvents, EventSummaryRowSlots> {
}
export {};
