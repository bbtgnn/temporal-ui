import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventClassificationFilterProps = typeof __propDef.props;
export type EventClassificationFilterEvents = typeof __propDef.events;
export type EventClassificationFilterSlots = typeof __propDef.slots;
export default class EventClassificationFilter extends SvelteComponentTyped<EventClassificationFilterProps, EventClassificationFilterEvents, EventClassificationFilterSlots> {
}
export {};
