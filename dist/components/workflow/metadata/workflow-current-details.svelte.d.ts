import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowCurrentDetailsProps = typeof __propDef.props;
export type WorkflowCurrentDetailsEvents = typeof __propDef.events;
export type WorkflowCurrentDetailsSlots = typeof __propDef.slots;
export default class WorkflowCurrentDetails extends SvelteComponentTyped<WorkflowCurrentDetailsProps, WorkflowCurrentDetailsEvents, WorkflowCurrentDetailsSlots> {
}
export {};
