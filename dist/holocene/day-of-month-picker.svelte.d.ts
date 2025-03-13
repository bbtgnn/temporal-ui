import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        daysOfMonth: number[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DayOfMonthPickerProps = typeof __propDef.props;
export type DayOfMonthPickerEvents = typeof __propDef.events;
export type DayOfMonthPickerSlots = typeof __propDef.slots;
export default class DayOfMonthPicker extends SvelteComponentTyped<DayOfMonthPickerProps, DayOfMonthPickerEvents, DayOfMonthPickerSlots> {
}
export {};
