import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        delay?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HeartBeatIndicatorProps = typeof __propDef.props;
export type HeartBeatIndicatorEvents = typeof __propDef.events;
export type HeartBeatIndicatorSlots = typeof __propDef.slots;
export default class HeartBeatIndicator extends SvelteComponentTyped<HeartBeatIndicatorProps, HeartBeatIndicatorEvents, HeartBeatIndicatorSlots> {
}
export {};
