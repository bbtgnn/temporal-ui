import { SvelteComponentTyped } from "svelte";
import type { NetworkError } from '../../types/global';
declare const __propDef: {
    props: {
        error: NetworkError;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowErrorProps = typeof __propDef.props;
export type WorkflowErrorEvents = typeof __propDef.events;
export type WorkflowErrorSlots = typeof __propDef.slots;
export default class WorkflowError extends SvelteComponentTyped<WorkflowErrorProps, WorkflowErrorEvents, WorkflowErrorSlots> {
}
export {};
