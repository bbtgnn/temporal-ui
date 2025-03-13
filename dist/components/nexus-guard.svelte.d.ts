import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        fallback: {};
    };
};
export type NexusGuardProps = typeof __propDef.props;
export type NexusGuardEvents = typeof __propDef.events;
export type NexusGuardSlots = typeof __propDef.slots;
export default class NexusGuard extends SvelteComponentTyped<NexusGuardProps, NexusGuardEvents, NexusGuardSlots> {
}
export {};
