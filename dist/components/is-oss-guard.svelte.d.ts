import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        isCloud?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        fallback: {};
    };
};
export type IsOssGuardProps = typeof __propDef.props;
export type IsOssGuardEvents = typeof __propDef.events;
export type IsOssGuardSlots = typeof __propDef.slots;
export default class IsOssGuard extends SvelteComponentTyped<IsOssGuardProps, IsOssGuardEvents, IsOssGuardSlots> {
}
export {};
