import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowQueryProps = typeof __propDef.props;
export type WorkflowQueryEvents = typeof __propDef.events;
export type WorkflowQuerySlots = typeof __propDef.slots;
export default class WorkflowQuery extends SvelteComponentTyped<WorkflowQueryProps, WorkflowQueryEvents, WorkflowQuerySlots> {
}
export {};
