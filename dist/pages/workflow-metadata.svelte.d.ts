import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowMetadataProps = typeof __propDef.props;
export type WorkflowMetadataEvents = typeof __propDef.events;
export type WorkflowMetadataSlots = typeof __propDef.slots;
export default class WorkflowMetadata extends SvelteComponentTyped<WorkflowMetadataProps, WorkflowMetadataEvents, WorkflowMetadataSlots> {
}
export {};
