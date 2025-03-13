import { SvelteComponentTyped } from "svelte";
import type { IconName } from '../icon';
declare const __propDef: {
    props: {
        [x: string]: any;
        link: string;
        label: string;
        icon?: IconName | undefined;
        tooltip?: string;
        external?: boolean;
        animate?: boolean;
        disabled?: boolean;
        isActive?: (path: string) => boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NavigationItemProps = typeof __propDef.props;
export type NavigationItemEvents = typeof __propDef.events;
export type NavigationItemSlots = typeof __propDef.slots;
export default class NavigationItem extends SvelteComponentTyped<NavigationItemProps, NavigationItemEvents, NavigationItemSlots> {
}
export {};
