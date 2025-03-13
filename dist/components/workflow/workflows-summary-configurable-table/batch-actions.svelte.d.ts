import { SvelteComponentTyped } from "svelte";
import type { WorkflowExecution } from '../../../types/workflows';
declare const __propDef: {
    props: {
        workflows: WorkflowExecution[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BatchActionsProps = typeof __propDef.props;
export type BatchActionsEvents = typeof __propDef.events;
export type BatchActionsSlots = typeof __propDef.slots;
export default class BatchActions extends SvelteComponentTyped<BatchActionsProps, BatchActionsEvents, BatchActionsSlots> {
}
export {};
