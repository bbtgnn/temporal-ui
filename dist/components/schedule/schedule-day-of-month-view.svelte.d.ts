import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        daysOfMonth: number[];
        months: string[];
        hour: string;
        minute: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleDayOfMonthViewProps = typeof __propDef.props;
export type ScheduleDayOfMonthViewEvents = typeof __propDef.events;
export type ScheduleDayOfMonthViewSlots = typeof __propDef.slots;
export default class ScheduleDayOfMonthView extends SvelteComponentTyped<ScheduleDayOfMonthViewProps, ScheduleDayOfMonthViewEvents, ScheduleDayOfMonthViewSlots> {
}
export {};
