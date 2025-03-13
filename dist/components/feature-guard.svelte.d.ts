import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        enabled?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        fallback: {};
    };
};
export type FeatureGuardProps = typeof __propDef.props;
export type FeatureGuardEvents = typeof __propDef.events;
export type FeatureGuardSlots = typeof __propDef.slots;
export default class FeatureGuard extends SvelteComponentTyped<FeatureGuardProps, FeatureGuardEvents, FeatureGuardSlots> {
}
export {};
