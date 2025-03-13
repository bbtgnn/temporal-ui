import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        onChange: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AutoRefreshWorkflowProps = typeof __propDef.props;
export type AutoRefreshWorkflowEvents = typeof __propDef.events;
export type AutoRefreshWorkflowSlots = typeof __propDef.slots;
export default class AutoRefreshWorkflow extends SvelteComponentTyped<AutoRefreshWorkflowProps, AutoRefreshWorkflowEvents, AutoRefreshWorkflowSlots> {
}
export {};
