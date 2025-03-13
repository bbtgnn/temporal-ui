import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        isCloud?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        fallback: {};
        default: {};
    };
};
export type IsLegacyCloudGuardProps = typeof __propDef.props;
export type IsLegacyCloudGuardEvents = typeof __propDef.events;
export type IsLegacyCloudGuardSlots = typeof __propDef.slots;
export default class IsLegacyCloudGuard extends SvelteComponentTyped<IsLegacyCloudGuardProps, IsLegacyCloudGuardEvents, IsLegacyCloudGuardSlots> {
}
export {};
