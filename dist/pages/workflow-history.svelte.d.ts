import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowHistoryProps = typeof __propDef.props;
export type WorkflowHistoryEvents = typeof __propDef.events;
export type WorkflowHistorySlots = typeof __propDef.slots;
export default class WorkflowHistory extends SvelteComponentTyped<WorkflowHistoryProps, WorkflowHistoryEvents, WorkflowHistorySlots> {
}
export {};
