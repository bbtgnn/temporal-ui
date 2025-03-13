import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowCallStackProps = typeof __propDef.props;
export type WorkflowCallStackEvents = typeof __propDef.events;
export type WorkflowCallStackSlots = typeof __propDef.slots;
export default class WorkflowCallStack extends SvelteComponentTyped<WorkflowCallStackProps, WorkflowCallStackEvents, WorkflowCallStackSlots> {
}
export {};
