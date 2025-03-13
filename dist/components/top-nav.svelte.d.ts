import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        left: {};
        default: {};
    };
};
export type TopNavProps = typeof __propDef.props;
export type TopNavEvents = typeof __propDef.events;
export type TopNavSlots = typeof __propDef.slots;
export default class TopNav extends SvelteComponentTyped<TopNavProps, TopNavEvents, TopNavSlots> {
}
export {};
