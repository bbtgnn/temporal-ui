import { SvelteComponentTyped } from "svelte";
import type { EventGroup } from '../../models/event-groups/event-groups';
declare const __propDef: {
    props: {
        eventGroup: EventGroup;
        selectedId: string;
        onGroupClick: (id: string) => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventGroupDetailsProps = typeof __propDef.props;
export type EventGroupDetailsEvents = typeof __propDef.events;
export type EventGroupDetailsSlots = typeof __propDef.slots;
export default class EventGroupDetails extends SvelteComponentTyped<EventGroupDetailsProps, EventGroupDetailsEvents, EventGroupDetailsSlots> {
}
export {};
