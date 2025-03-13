import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        searchType: 'basic' | 'advanced';
    };
    events: {
        search: CustomEvent<undefined>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowFiltersProps = typeof __propDef.props;
export type WorkflowFiltersEvents = typeof __propDef.events;
export type WorkflowFiltersSlots = typeof __propDef.slots;
export default class WorkflowFilters extends SvelteComponentTyped<WorkflowFiltersProps, WorkflowFiltersEvents, WorkflowFiltersSlots> {
}
export {};
