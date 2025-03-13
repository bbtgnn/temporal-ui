import { SvelteComponentTyped } from "svelte";
import type { IconName } from '../icon';
declare const __propDef: {
    props: {
        [x: string]: any;
        icon: IconName;
        link: string;
        tooltip?: string;
        external?: boolean;
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type NavigationBadgeProps = typeof __propDef.props;
export type NavigationBadgeEvents = typeof __propDef.events;
export type NavigationBadgeSlots = typeof __propDef.slots;
export default class NavigationBadge extends SvelteComponentTyped<NavigationBadgeProps, NavigationBadgeEvents, NavigationBadgeSlots> {
}
export {};
