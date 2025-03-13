import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        hour?: string;
        minute?: string;
        second?: string;
        time?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DatetimeInputsProps = typeof __propDef.props;
export type DatetimeInputsEvents = typeof __propDef.events;
export type DatetimeInputsSlots = typeof __propDef.slots;
export default class DatetimeInputs extends SvelteComponentTyped<DatetimeInputsProps, DatetimeInputsEvents, DatetimeInputsSlots> {
}
export {};
