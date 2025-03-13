import { SvelteComponentTyped } from "svelte";
import type { EventLink as Link } from '../../types/events';
import type { Callback } from '../../types/nexus';
declare const __propDef: {
    props: {
        callback: Callback;
        link?: Link | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type WorkflowCallbackProps = typeof __propDef.props;
export type WorkflowCallbackEvents = typeof __propDef.events;
export type WorkflowCallbackSlots = typeof __propDef.slots;
export default class WorkflowCallback extends SvelteComponentTyped<WorkflowCallbackProps, WorkflowCallbackEvents, WorkflowCallbackSlots> {
}
export {};
