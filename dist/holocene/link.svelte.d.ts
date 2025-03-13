import { SvelteComponentTyped } from "svelte";
import type { HTMLAnchorAttributes } from 'svelte/elements';
import type { IconName } from './icon';
declare const __propDef: {
    props: HTMLAnchorAttributes & {
        href: string;
        active?: boolean;
        interactive?: boolean;
        newTab?: boolean;
        class?: string;
        icon?: IconName;
        text?: string;
        light?: boolean;
        'data-testid'?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type LinkProps = typeof __propDef.props;
export type LinkEvents = typeof __propDef.events;
export type LinkSlots = typeof __propDef.slots;
export default class Link extends SvelteComponentTyped<LinkProps, LinkEvents, LinkSlots> {
}
export {};
