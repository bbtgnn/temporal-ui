import { SvelteComponentTyped } from "svelte";
import type { TaskQueueCompatibility } from '../../services/pollers-service';
declare const __propDef: {
    props: {
        compatibility: TaskQueueCompatibility | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowCompatibilityErrorProps = typeof __propDef.props;
export type WorkflowCompatibilityErrorEvents = typeof __propDef.events;
export type WorkflowCompatibilityErrorSlots = typeof __propDef.slots;
export default class WorkflowCompatibilityError extends SvelteComponentTyped<WorkflowCompatibilityErrorProps, WorkflowCompatibilityErrorEvents, WorkflowCompatibilityErrorSlots> {
}
export {};
