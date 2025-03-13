import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowSummaryAndDetailsProps = typeof __propDef.props;
export type WorkflowSummaryAndDetailsEvents = typeof __propDef.events;
export type WorkflowSummaryAndDetailsSlots = typeof __propDef.slots;
export default class WorkflowSummaryAndDetails extends SvelteComponentTyped<WorkflowSummaryAndDetailsProps, WorkflowSummaryAndDetailsEvents, WorkflowSummaryAndDetailsSlots> {
}
export {};
