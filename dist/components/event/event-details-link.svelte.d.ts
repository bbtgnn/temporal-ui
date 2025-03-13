import { SvelteComponentTyped } from "svelte";
import type { CombinedAttributes } from '../../utilities/format-event-attributes';
import { type EventLinkType } from '../../utilities/get-single-attribute-for-event';
declare const __propDef: {
    props: {
        [x: string]: any;
        value: string;
        attributes: CombinedAttributes;
        type: EventLinkType;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventDetailsLinkProps = typeof __propDef.props;
export type EventDetailsLinkEvents = typeof __propDef.events;
export type EventDetailsLinkSlots = typeof __propDef.slots;
export default class EventDetailsLink extends SvelteComponentTyped<EventDetailsLinkProps, EventDetailsLinkEvents, EventDetailsLinkSlots> {
}
export {};
