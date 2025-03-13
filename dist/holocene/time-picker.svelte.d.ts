import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        hour?: string;
        minute?: string;
        second?: string;
        half?: 'AM' | 'PM';
        twelveHourClock?: boolean;
        includeSeconds?: boolean;
        disabled?: boolean;
    };
    events: {
        timechange: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TimePickerProps = typeof __propDef.props;
export type TimePickerEvents = typeof __propDef.events;
export type TimePickerSlots = typeof __propDef.slots;
export default class TimePicker extends SvelteComponentTyped<TimePickerProps, TimePickerEvents, TimePickerSlots> {
}
export {};
