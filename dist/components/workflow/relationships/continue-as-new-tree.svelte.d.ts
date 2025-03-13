import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        namespace: string;
        workflowId: string;
        first: string;
        previous: string;
        current: string;
        next: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ContinueAsNewTreeProps = typeof __propDef.props;
export type ContinueAsNewTreeEvents = typeof __propDef.events;
export type ContinueAsNewTreeSlots = typeof __propDef.slots;
export default class ContinueAsNewTree extends SvelteComponentTyped<ContinueAsNewTreeProps, ContinueAsNewTreeEvents, ContinueAsNewTreeSlots> {
}
export {};
