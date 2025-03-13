import { SvelteComponentTyped } from "svelte";
export declare const dateParameter = "time-format";
declare const __propDef: {
    props: {
        compact: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventDateFilterProps = typeof __propDef.props;
export type EventDateFilterEvents = typeof __propDef.events;
export type EventDateFilterSlots = typeof __propDef.slots;
export default class EventDateFilter extends SvelteComponentTyped<EventDateFilterProps, EventDateFilterEvents, EventDateFilterSlots> {
}
export {};
