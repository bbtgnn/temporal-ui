import { SvelteComponentTyped } from "svelte";
import type { WorkflowEvents } from '../../types/events';
declare const __propDef: {
    props: {
        events?: WorkflowEvents;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        decode: {};
    };
};
export type WorkflowJsonNavigatorProps = typeof __propDef.props;
export type WorkflowJsonNavigatorEvents = typeof __propDef.events;
export type WorkflowJsonNavigatorSlots = typeof __propDef.slots;
export default class WorkflowJsonNavigator extends SvelteComponentTyped<WorkflowJsonNavigatorProps, WorkflowJsonNavigatorEvents, WorkflowJsonNavigatorSlots> {
}
export {};
