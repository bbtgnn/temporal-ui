import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        staticQuery?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowCountsProps = typeof __propDef.props;
export type WorkflowCountsEvents = typeof __propDef.events;
export type WorkflowCountsSlots = typeof __propDef.slots;
export default class WorkflowCounts extends SvelteComponentTyped<WorkflowCountsProps, WorkflowCountsEvents, WorkflowCountsSlots> {
}
export {};
