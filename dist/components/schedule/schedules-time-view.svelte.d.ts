import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        hour?: string;
        minute?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SchedulesTimeViewProps = typeof __propDef.props;
export type SchedulesTimeViewEvents = typeof __propDef.events;
export type SchedulesTimeViewSlots = typeof __propDef.slots;
export default class SchedulesTimeView extends SvelteComponentTyped<SchedulesTimeViewProps, SchedulesTimeViewEvents, SchedulesTimeViewSlots> {
}
export {};
