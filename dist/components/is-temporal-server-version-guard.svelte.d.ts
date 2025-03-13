import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        minimumVersion: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        fallback: {};
    };
};
export type IsTemporalServerVersionGuardProps = typeof __propDef.props;
export type IsTemporalServerVersionGuardEvents = typeof __propDef.events;
export type IsTemporalServerVersionGuardSlots = typeof __propDef.slots;
export default class IsTemporalServerVersionGuard extends SvelteComponentTyped<IsTemporalServerVersionGuardProps, IsTemporalServerVersionGuardEvents, IsTemporalServerVersionGuardSlots> {
}
export {};
