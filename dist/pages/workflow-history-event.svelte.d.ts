import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowHistoryEventProps = typeof __propDef.props;
export type WorkflowHistoryEventEvents = typeof __propDef.events;
export type WorkflowHistoryEventSlots = typeof __propDef.slots;
export default class WorkflowHistoryEvent extends SvelteComponentTyped<WorkflowHistoryEventProps, WorkflowHistoryEventEvents, WorkflowHistoryEventSlots> {
}
export {};
