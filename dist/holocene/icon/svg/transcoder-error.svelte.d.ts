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
export type TranscoderErrorProps = typeof __propDef.props;
export type TranscoderErrorEvents = typeof __propDef.events;
export type TranscoderErrorSlots = typeof __propDef.slots;
export default class TranscoderError extends SvelteComponentTyped<TranscoderErrorProps, TranscoderErrorEvents, TranscoderErrorSlots> {
}
export {};
