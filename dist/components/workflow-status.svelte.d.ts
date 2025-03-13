import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        delay?: number;
        status?: "Running" | "TimedOut" | "Completed" | "Failed" | "ContinuedAsNew" | "Canceled" | "Terminated" | "Unspecified" | "Scheduled" | "Open" | "New" | "Started" | "Initiated" | "Fired" | "CancelRequested" | "Signaled" | "Pending" | "Retrying" | "Paused";
        count?: number | undefined;
        loading?: boolean;
        newCount?: number | undefined;
        big?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowStatusProps = typeof __propDef.props;
export type WorkflowStatusEvents = typeof __propDef.events;
export type WorkflowStatusSlots = typeof __propDef.slots;
export default class WorkflowStatus extends SvelteComponentTyped<WorkflowStatusProps, WorkflowStatusEvents, WorkflowStatusSlots> {
}
export {};
