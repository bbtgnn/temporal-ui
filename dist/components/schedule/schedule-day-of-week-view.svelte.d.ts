import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        daysOfWeek: string[];
        hour: string;
        minute: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleDayOfWeekViewProps = typeof __propDef.props;
export type ScheduleDayOfWeekViewEvents = typeof __propDef.events;
export type ScheduleDayOfWeekViewSlots = typeof __propDef.slots;
export default class ScheduleDayOfWeekView extends SvelteComponentTyped<ScheduleDayOfWeekViewProps, ScheduleDayOfWeekViewEvents, ScheduleDayOfWeekViewSlots> {
}
export {};
