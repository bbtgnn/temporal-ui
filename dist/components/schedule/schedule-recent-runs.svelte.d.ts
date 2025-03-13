import { SvelteComponentTyped } from "svelte";
import type { ScheduleActionResult } from '$types';
declare const __propDef: {
    props: {
        recentRuns?: ScheduleActionResult[];
        namespace: string;
        workflowQuery: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleRecentRunsProps = typeof __propDef.props;
export type ScheduleRecentRunsEvents = typeof __propDef.events;
export type ScheduleRecentRunsSlots = typeof __propDef.slots;
export default class ScheduleRecentRuns extends SvelteComponentTyped<ScheduleRecentRunsProps, ScheduleRecentRunsEvents, ScheduleRecentRunsSlots> {
}
export {};
