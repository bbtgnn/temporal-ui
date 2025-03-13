import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DrainedProps = typeof __propDef.props;
export type DrainedEvents = typeof __propDef.events;
export type DrainedSlots = typeof __propDef.slots;
export default class Drained extends SvelteComponentTyped<DrainedProps, DrainedEvents, DrainedSlots> {
}
export {};
