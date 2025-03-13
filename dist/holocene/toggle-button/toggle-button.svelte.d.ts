import { SvelteComponentTyped } from "svelte";
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { IconName } from '../icon';
declare const __propDef: {
    props: ({
        icon?: IconName;
        group?: boolean;
        active?: boolean;
        'data-testid'?: string;
        tooltip?: string;
    } & HTMLAnchorAttributes & {
        href: string;
        base?: string;
    }) | ({
        icon?: IconName;
        group?: boolean;
        active?: boolean;
        'data-testid'?: string;
        tooltip?: string;
    } & HTMLButtonAttributes & {
        href?: never;
        base?: never;
    });
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ToggleButtonProps = typeof __propDef.props;
export type ToggleButtonEvents = typeof __propDef.events;
export type ToggleButtonSlots = typeof __propDef.slots;
export default class ToggleButton extends SvelteComponentTyped<ToggleButtonProps, ToggleButtonEvents, ToggleButtonSlots> {
}
export {};
