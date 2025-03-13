import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CalendarPlusProps = typeof __propDef.props;
export type CalendarPlusEvents = typeof __propDef.events;
export type CalendarPlusSlots = typeof __propDef.slots;
export default class CalendarPlus extends SvelteComponentTyped<CalendarPlusProps, CalendarPlusEvents, CalendarPlusSlots> {
}
export {};
