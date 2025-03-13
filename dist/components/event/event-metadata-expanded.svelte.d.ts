import { SvelteComponentTyped } from "svelte";
import type { Payload } from '../../types';
declare const __propDef: {
    props: {
        value: Payload;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventMetadataExpandedProps = typeof __propDef.props;
export type EventMetadataExpandedEvents = typeof __propDef.events;
export type EventMetadataExpandedSlots = typeof __propDef.slots;
export default class EventMetadataExpanded extends SvelteComponentTyped<EventMetadataExpandedProps, EventMetadataExpandedEvents, EventMetadataExpandedSlots> {
}
export {};
