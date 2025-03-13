import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        count?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowCountRefreshProps = typeof __propDef.props;
export type WorkflowCountRefreshEvents = typeof __propDef.events;
export type WorkflowCountRefreshSlots = typeof __propDef.slots;
export default class WorkflowCountRefresh extends SvelteComponentTyped<WorkflowCountRefreshProps, WorkflowCountRefreshEvents, WorkflowCountRefreshSlots> {
}
export {};
