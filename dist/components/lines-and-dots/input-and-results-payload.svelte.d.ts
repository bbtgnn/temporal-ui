import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        title: string;
        content: string;
        isRunning: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InputAndResultsPayloadProps = typeof __propDef.props;
export type InputAndResultsPayloadEvents = typeof __propDef.events;
export type InputAndResultsPayloadSlots = typeof __propDef.slots;
export default class InputAndResultsPayload extends SvelteComponentTyped<InputAndResultsPayloadProps, InputAndResultsPayloadEvents, InputAndResultsPayloadSlots> {
}
export {};
