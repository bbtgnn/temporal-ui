import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowRelationshipsProps = typeof __propDef.props;
export type WorkflowRelationshipsEvents = typeof __propDef.events;
export type WorkflowRelationshipsSlots = typeof __propDef.slots;
export default class WorkflowRelationships extends SvelteComponentTyped<WorkflowRelationshipsProps, WorkflowRelationshipsEvents, WorkflowRelationshipsSlots> {
}
export {};
