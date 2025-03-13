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
export type TimelineProps = typeof __propDef.props;
export type TimelineEvents = typeof __propDef.events;
export type TimelineSlots = typeof __propDef.slots;
export default class Timeline extends SvelteComponentTyped<TimelineProps, TimelineEvents, TimelineSlots> {
}
export {};
