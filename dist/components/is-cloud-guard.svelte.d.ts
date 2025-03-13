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
export type IsCloudGuardProps = typeof __propDef.props;
export type IsCloudGuardEvents = typeof __propDef.events;
export type IsCloudGuardSlots = typeof __propDef.slots;
export default class IsCloudGuard extends SvelteComponentTyped<IsCloudGuardProps, IsCloudGuardEvents, IsCloudGuardSlots> {
}
export {};
