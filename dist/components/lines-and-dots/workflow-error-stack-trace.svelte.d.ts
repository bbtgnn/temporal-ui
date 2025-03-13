import { SvelteComponentTyped } from "svelte";
import type { Failure } from '../../types';
declare const __propDef: {
    props: {
        failure?: Failure | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowErrorStackTraceProps = typeof __propDef.props;
export type WorkflowErrorStackTraceEvents = typeof __propDef.events;
export type WorkflowErrorStackTraceSlots = typeof __propDef.slots;
export default class WorkflowErrorStackTrace extends SvelteComponentTyped<WorkflowErrorStackTraceProps, WorkflowErrorStackTraceEvents, WorkflowErrorStackTraceSlots> {
}
export {};
