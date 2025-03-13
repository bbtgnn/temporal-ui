import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        defaultVersion?: boolean;
        active?: boolean;
        buildId: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'overall-default-worker': {};
        'default-worker': {};
    };
};
export type CompatibilityBadgeProps = typeof __propDef.props;
export type CompatibilityBadgeEvents = typeof __propDef.events;
export type CompatibilityBadgeSlots = typeof __propDef.slots;
export default class CompatibilityBadge extends SvelteComponentTyped<CompatibilityBadgeProps, CompatibilityBadgeEvents, CompatibilityBadgeSlots> {
}
export {};
