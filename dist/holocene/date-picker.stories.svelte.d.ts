import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof DatePicker;
    args: {
        label: string;
        todayLabel: string;
        closeLabel: string;
        clearLabel: string;
        disabled: false;
        labelHidden: false;
        selected: Date;
    };
    argTypes: {
        label: {
            name: string;
            control: "text";
        };
        labelHidden: {
            name: string;
            control: "boolean";
        };
        selected: {
            name: string;
            control: "date";
        };
        isAllowed: {
            table: {
                disable: true;
            };
        };
        disabled: {
            name: string;
            control: "boolean";
        };
        todayLabel: {
            name: string;
            control: "text";
            table: {
                category: string;
            };
        };
        closeLabel: {
            name: string;
            control: "text";
            table: {
                category: string;
            };
        };
        clearLabel: {
            name: string;
            control: "text";
            table: {
                category: string;
            };
        };
    };
};
declare const __propDef: {
    props: Record<string, never>;
    events: {
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
