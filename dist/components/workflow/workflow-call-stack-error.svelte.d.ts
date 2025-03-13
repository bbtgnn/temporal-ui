import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowCallStackErrorProps = typeof __propDef.props;
export type WorkflowCallStackErrorEvents = typeof __propDef.events;
export type WorkflowCallStackErrorSlots = typeof __propDef.slots;
export default class WorkflowCallStackError extends SvelteComponentTyped<WorkflowCallStackErrorProps, WorkflowCallStackErrorEvents, WorkflowCallStackErrorSlots> {
}
export {};
