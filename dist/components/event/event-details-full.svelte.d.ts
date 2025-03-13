import { SvelteComponentTyped } from "svelte";
import type { EventGroup } from '../../models/event-groups/event-groups';
import type { WorkflowEvent } from '../../types/events';
declare const __propDef: {
    props: {
        group?: EventGroup | undefined;
        event?: WorkflowEvent | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventDetailsFullProps = typeof __propDef.props;
export type EventDetailsFullEvents = typeof __propDef.events;
export type EventDetailsFullSlots = typeof __propDef.slots;
export default class EventDetailsFull extends SvelteComponentTyped<EventDetailsFullProps, EventDetailsFullEvents, EventDetailsFullSlots> {
}
export {};
