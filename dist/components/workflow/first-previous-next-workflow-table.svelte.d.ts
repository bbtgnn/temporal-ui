import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        workflow: string;
        namespace: string;
        first: string;
        next: string;
        previous: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FirstPreviousNextWorkflowTableProps = typeof __propDef.props;
export type FirstPreviousNextWorkflowTableEvents = typeof __propDef.events;
export type FirstPreviousNextWorkflowTableSlots = typeof __propDef.slots;
export default class FirstPreviousNextWorkflowTable extends SvelteComponentTyped<FirstPreviousNextWorkflowTableProps, FirstPreviousNextWorkflowTableEvents, FirstPreviousNextWorkflowTableSlots> {
}
export {};
