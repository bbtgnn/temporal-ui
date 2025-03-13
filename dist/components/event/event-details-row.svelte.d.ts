import { SvelteComponentTyped } from "svelte";
import type { Payloads } from '../../types';
import type { CombinedAttributes } from '../../utilities/format-event-attributes';
declare const __propDef: {
    props: {
        [x: string]: any;
        key: string;
        value: string | Record<string, unknown> | Payloads;
        attributes: CombinedAttributes;
        showKey?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventDetailsRowProps = typeof __propDef.props;
export type EventDetailsRowEvents = typeof __propDef.events;
export type EventDetailsRowSlots = typeof __propDef.slots;
export default class EventDetailsRow extends SvelteComponentTyped<EventDetailsRowProps, EventDetailsRowEvents, EventDetailsRowSlots> {
}
export {};
