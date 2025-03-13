import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowHistoryLayoutProps = typeof __propDef.props;
export type WorkflowHistoryLayoutEvents = typeof __propDef.events;
export type WorkflowHistoryLayoutSlots = typeof __propDef.slots;
export default class WorkflowHistoryLayout extends SvelteComponentTyped<WorkflowHistoryLayoutProps, WorkflowHistoryLayoutEvents, WorkflowHistoryLayoutSlots> {
}
export {};
