import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DataEncoderStatusProps = typeof __propDef.props;
export type DataEncoderStatusEvents = typeof __propDef.events;
export type DataEncoderStatusSlots = typeof __propDef.slots;
export default class DataEncoderStatus extends SvelteComponentTyped<DataEncoderStatusProps, DataEncoderStatusEvents, DataEncoderStatusSlots> {
}
export {};
