import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        isAllowed?: (d: Date) => boolean;
        selected?: Date;
        label: string;
        labelHidden?: boolean;
        todayLabel: string;
        closeLabel: string;
        clearLabel: string;
        disabled?: boolean;
    };
    events: {
        datechange: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DatePickerProps = typeof __propDef.props;
export type DatePickerEvents = typeof __propDef.events;
export type DatePickerSlots = typeof __propDef.slots;
export default class DatePicker extends SvelteComponentTyped<DatePickerProps, DatePickerEvents, DatePickerSlots> {
}
export {};
