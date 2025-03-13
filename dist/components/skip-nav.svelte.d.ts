import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SkipNavProps = typeof __propDef.props;
export type SkipNavEvents = typeof __propDef.events;
export type SkipNavSlots = typeof __propDef.slots;
export default class SkipNav extends SvelteComponentTyped<SkipNavProps, SkipNavEvents, SkipNavSlots> {
}
export {};
