import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        error?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleErrorProps = typeof __propDef.props;
export type ScheduleErrorEvents = typeof __propDef.events;
export type ScheduleErrorSlots = typeof __propDef.slots;
export default class ScheduleError extends SvelteComponentTyped<ScheduleErrorProps, ScheduleErrorEvents, ScheduleErrorSlots> {
}
export {};
