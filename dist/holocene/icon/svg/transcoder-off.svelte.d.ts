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
export type TranscoderOffProps = typeof __propDef.props;
export type TranscoderOffEvents = typeof __propDef.events;
export type TranscoderOffSlots = typeof __propDef.slots;
export default class TranscoderOff extends SvelteComponentTyped<TranscoderOffProps, TranscoderOffEvents, TranscoderOffSlots> {
}
export {};
