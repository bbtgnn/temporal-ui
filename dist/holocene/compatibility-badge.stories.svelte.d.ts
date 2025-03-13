import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof CompatibilityBadge;
    args: {
        defaultVersion: true;
        active: false;
        buildId: string;
    };
};
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CompatibilityBadgeProps = typeof __propDef.props;
export type CompatibilityBadgeEvents = typeof __propDef.events;
export type CompatibilityBadgeSlots = typeof __propDef.slots;
export default class CompatibilityBadge extends SvelteComponentTyped<CompatibilityBadgeProps, CompatibilityBadgeEvents, CompatibilityBadgeSlots> {
}
export {};
