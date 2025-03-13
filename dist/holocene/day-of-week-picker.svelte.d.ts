import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        daysOfWeek: string[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DayOfWeekPickerProps = typeof __propDef.props;
export type DayOfWeekPickerEvents = typeof __propDef.events;
export type DayOfWeekPickerSlots = typeof __propDef.slots;
export default class DayOfWeekPicker extends SvelteComponentTyped<DayOfWeekPickerProps, DayOfWeekPickerEvents, DayOfWeekPickerSlots> {
}
export {};
