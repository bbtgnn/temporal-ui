import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type StartWorkflowProps = typeof __propDef.props;
export type StartWorkflowEvents = typeof __propDef.events;
export type StartWorkflowSlots = typeof __propDef.slots;
export default class StartWorkflow extends SvelteComponentTyped<StartWorkflowProps, StartWorkflowEvents, StartWorkflowSlots> {
}
export {};
