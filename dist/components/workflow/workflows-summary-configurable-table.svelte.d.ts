import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        onClickConfigure: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        cloud: {
            slot: string;
        };
    };
};
export type WorkflowsSummaryConfigurableTableProps = typeof __propDef.props;
export type WorkflowsSummaryConfigurableTableEvents = typeof __propDef.events;
export type WorkflowsSummaryConfigurableTableSlots = typeof __propDef.slots;
export default class WorkflowsSummaryConfigurableTable extends SvelteComponentTyped<WorkflowsSummaryConfigurableTableProps, WorkflowsSummaryConfigurableTableEvents, WorkflowsSummaryConfigurableTableSlots> {
}
export {};
