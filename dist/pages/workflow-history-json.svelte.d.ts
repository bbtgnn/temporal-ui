import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowHistoryJsonProps = typeof __propDef.props;
export type WorkflowHistoryJsonEvents = typeof __propDef.events;
export type WorkflowHistoryJsonSlots = typeof __propDef.slots;
export default class WorkflowHistoryJson extends SvelteComponentTyped<WorkflowHistoryJsonProps, WorkflowHistoryJsonEvents, WorkflowHistoryJsonSlots> {
}
export {};
