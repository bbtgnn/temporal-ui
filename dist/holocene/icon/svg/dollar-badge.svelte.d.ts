import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DollarBadgeProps = typeof __propDef.props;
export type DollarBadgeEvents = typeof __propDef.events;
export type DollarBadgeSlots = typeof __propDef.slots;
export default class DollarBadge extends SvelteComponentTyped<DollarBadgeProps, DollarBadgeEvents, DollarBadgeSlots> {
}
export {};
