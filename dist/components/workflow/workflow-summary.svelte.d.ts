import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowSummaryProps = typeof __propDef.props;
export type WorkflowSummaryEvents = typeof __propDef.events;
export type WorkflowSummarySlots = typeof __propDef.slots;
export default class WorkflowSummary extends SvelteComponentTyped<WorkflowSummaryProps, WorkflowSummaryEvents, WorkflowSummarySlots> {
}
export {};
