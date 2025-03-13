import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        value: string | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DatetimeInputProps = typeof __propDef.props;
export type DatetimeInputEvents = typeof __propDef.events;
export type DatetimeInputSlots = typeof __propDef.slots;
export default class DatetimeInput extends SvelteComponentTyped<DatetimeInputProps, DatetimeInputEvents, DatetimeInputSlots> {
}
export {};
