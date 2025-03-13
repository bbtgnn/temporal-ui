import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        createDisabled?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type NexusEmptyStateProps = typeof __propDef.props;
export type NexusEmptyStateEvents = typeof __propDef.events;
export type NexusEmptyStateSlots = typeof __propDef.slots;
export default class NexusEmptyState extends SvelteComponentTyped<NexusEmptyStateProps, NexusEmptyStateEvents, NexusEmptyStateSlots> {
}
export {};
