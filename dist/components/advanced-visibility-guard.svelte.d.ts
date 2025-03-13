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
export type AdvancedVisibilityGuardProps = typeof __propDef.props;
export type AdvancedVisibilityGuardEvents = typeof __propDef.events;
export type AdvancedVisibilityGuardSlots = typeof __propDef.slots;
export default class AdvancedVisibilityGuard extends SvelteComponentTyped<AdvancedVisibilityGuardProps, AdvancedVisibilityGuardEvents, AdvancedVisibilityGuardSlots> {
}
export {};
