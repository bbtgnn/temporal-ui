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
export type HeartbeatProps = typeof __propDef.props;
export type HeartbeatEvents = typeof __propDef.events;
export type HeartbeatSlots = typeof __propDef.slots;
export default class Heartbeat extends SvelteComponentTyped<HeartbeatProps, HeartbeatEvents, HeartbeatSlots> {
}
export {};
