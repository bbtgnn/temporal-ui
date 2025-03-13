import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        months: string[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MonthPickerProps = typeof __propDef.props;
export type MonthPickerEvents = typeof __propDef.events;
export type MonthPickerSlots = typeof __propDef.slots;
export default class MonthPicker extends SvelteComponentTyped<MonthPickerProps, MonthPickerEvents, MonthPickerSlots> {
}
export {};
