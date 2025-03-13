import { SvelteComponentTyped } from "svelte";
import type { WorkflowExecution } from '../../../types/workflows';
declare const __propDef: {
    props: {
        workflow: WorkflowExecution;
        length: number;
        y: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowRowProps = typeof __propDef.props;
export type WorkflowRowEvents = typeof __propDef.events;
export type WorkflowRowSlots = typeof __propDef.slots;
export default class WorkflowRow extends SvelteComponentTyped<WorkflowRowProps, WorkflowRowEvents, WorkflowRowSlots> {
}
export {};
