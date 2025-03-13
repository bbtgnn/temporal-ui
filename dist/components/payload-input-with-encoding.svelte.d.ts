import { SvelteComponentTyped } from "svelte";
declare const encoding: readonly ["json/plain", "json/protobuf"];
export type PayloadInputEncoding = (typeof encoding)[number];
export declare const isPayloadInputEncodingType: (x: unknown) => x is "json/plain" | "json/protobuf";
import { type Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        id?: string;
        input: string;
        encoding: Writable<PayloadInputEncoding>;
        messageType: string;
        error?: boolean;
        loading?: boolean;
        label?: string;
        editing?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        action: {};
    };
};
export type PayloadInputWithEncodingProps = typeof __propDef.props;
export type PayloadInputWithEncodingEvents = typeof __propDef.events;
export type PayloadInputWithEncodingSlots = typeof __propDef.slots;
export default class PayloadInputWithEncoding extends SvelteComponentTyped<PayloadInputWithEncodingProps, PayloadInputWithEncodingEvents, PayloadInputWithEncodingSlots> {
}
export {};
