import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowHistoryEventGroupProps = typeof __propDef.props;
export type WorkflowHistoryEventGroupEvents = typeof __propDef.events;
export type WorkflowHistoryEventGroupSlots = typeof __propDef.slots;
export default class WorkflowHistoryEventGroup extends SvelteComponentTyped<WorkflowHistoryEventGroupProps, WorkflowHistoryEventGroupEvents, WorkflowHistoryEventGroupSlots> {
}
export {};
