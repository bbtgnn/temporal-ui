import { SvelteComponentTyped } from "svelte";
import type { Callback } from '../../types/nexus';
declare const __propDef: {
    props: {
        callbacks: Callback[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowCallbacksProps = typeof __propDef.props;
export type WorkflowCallbacksEvents = typeof __propDef.events;
export type WorkflowCallbacksSlots = typeof __propDef.slots;
export default class WorkflowCallbacks extends SvelteComponentTyped<WorkflowCallbacksProps, WorkflowCallbacksEvents, WorkflowCallbacksSlots> {
}
export {};
