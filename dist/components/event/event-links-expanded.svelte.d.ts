import { SvelteComponentTyped } from "svelte";
import type { EventLink as ELink } from '../../types/events';
declare const __propDef: {
    props: {
        links?: ELink[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventLinksExpandedProps = typeof __propDef.props;
export type EventLinksExpandedEvents = typeof __propDef.events;
export type EventLinksExpandedSlots = typeof __propDef.slots;
export default class EventLinksExpanded extends SvelteComponentTyped<EventLinksExpandedProps, EventLinksExpandedEvents, EventLinksExpandedSlots> {
}
export {};
