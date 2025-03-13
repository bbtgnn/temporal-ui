import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowStatusProps = typeof __propDef.props;
export type WorkflowStatusEvents = typeof __propDef.events;
export type WorkflowStatusSlots = typeof __propDef.slots;
export default class WorkflowStatus extends SvelteComponentTyped<WorkflowStatusProps, WorkflowStatusEvents, WorkflowStatusSlots> {
}
export {};
