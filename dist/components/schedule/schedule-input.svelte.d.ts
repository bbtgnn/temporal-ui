import { SvelteComponentTyped } from "svelte";
import type { Payloads } from '../../types';
declare const __propDef: {
    props: {
        input: Payloads;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleInputProps = typeof __propDef.props;
export type ScheduleInputEvents = typeof __propDef.events;
export type ScheduleInputSlots = typeof __propDef.slots;
export default class ScheduleInput extends SvelteComponentTyped<ScheduleInputProps, ScheduleInputEvents, ScheduleInputSlots> {
}
export {};
