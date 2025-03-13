import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type WorkflowRunLayoutProps = typeof __propDef.props;
export type WorkflowRunLayoutEvents = typeof __propDef.events;
export type WorkflowRunLayoutSlots = typeof __propDef.slots;
export default class WorkflowRunLayout extends SvelteComponentTyped<WorkflowRunLayoutProps, WorkflowRunLayoutEvents, WorkflowRunLayoutSlots> {
}
export {};
