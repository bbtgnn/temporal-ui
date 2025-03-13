import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowHeaderProps = typeof __propDef.props;
export type WorkflowHeaderEvents = typeof __propDef.events;
export type WorkflowHeaderSlots = typeof __propDef.slots;
export default class WorkflowHeader extends SvelteComponentTyped<WorkflowHeaderProps, WorkflowHeaderEvents, WorkflowHeaderSlots> {
}
export {};
