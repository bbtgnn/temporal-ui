import { SvelteComponentTyped } from "svelte";
import type { Writable } from 'svelte/store';
import type { Payloads } from '../../types';
import { type PayloadInputEncoding } from '../payload-input-with-encoding.svelte';
declare const __propDef: {
    props: {
        input: string;
        editInput: boolean;
        encoding: Writable<PayloadInputEncoding>;
        messageType: string;
        payloads: Payloads;
        showEditActions?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleInputPayloadProps = typeof __propDef.props;
export type ScheduleInputPayloadEvents = typeof __propDef.events;
export type ScheduleInputPayloadSlots = typeof __propDef.slots;
export default class ScheduleInputPayload extends SvelteComponentTyped<ScheduleInputPayloadProps, ScheduleInputPayloadEvents, ScheduleInputPayloadSlots> {
}
export {};
