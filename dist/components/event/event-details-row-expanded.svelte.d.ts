import { SvelteComponentTyped } from "svelte";
import type { CombinedAttributes } from '../../utilities/format-event-attributes';
declare const __propDef: {
    props: {
        [x: string]: any;
        key: string;
        value: string | number | Record<string, unknown>;
        attributes: CombinedAttributes;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventDetailsRowExpandedProps = typeof __propDef.props;
export type EventDetailsRowExpandedEvents = typeof __propDef.events;
export type EventDetailsRowExpandedSlots = typeof __propDef.slots;
export default class EventDetailsRowExpanded extends SvelteComponentTyped<EventDetailsRowExpandedProps, EventDetailsRowExpandedEvents, EventDetailsRowExpandedSlots> {
}
export {};
