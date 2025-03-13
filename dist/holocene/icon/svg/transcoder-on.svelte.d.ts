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
export type TranscoderOnProps = typeof __propDef.props;
export type TranscoderOnEvents = typeof __propDef.events;
export type TranscoderOnSlots = typeof __propDef.slots;
export default class TranscoderOn extends SvelteComponentTyped<TranscoderOnProps, TranscoderOnEvents, TranscoderOnSlots> {
}
export {};
