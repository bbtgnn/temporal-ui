import { SvelteComponentTyped } from "svelte";
import type { EventLink } from '../../types/events';
declare const __propDef: {
    props: {
        [x: string]: any;
        link: EventLink;
        value?: string;
        label?: string;
        href?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventLinkProps = typeof __propDef.props;
export type EventLinkEvents = typeof __propDef.events;
export type EventLinkSlots = typeof __propDef.slots;
export default class EventLink extends SvelteComponentTyped<EventLinkProps, EventLinkEvents, EventLinkSlots> {
}
export {};
