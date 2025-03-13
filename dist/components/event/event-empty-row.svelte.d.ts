import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        loading?: boolean;
        title?: string;
        content?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventEmptyRowProps = typeof __propDef.props;
export type EventEmptyRowEvents = typeof __propDef.events;
export type EventEmptyRowSlots = typeof __propDef.slots;
export default class EventEmptyRow extends SvelteComponentTyped<EventEmptyRowProps, EventEmptyRowEvents, EventEmptyRowSlots> {
}
export {};
