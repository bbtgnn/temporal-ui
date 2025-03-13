import { SvelteComponentTyped } from "svelte";
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { IconName } from './icon';
declare const __propDef: {
    props: HTMLButtonAttributes & {
        icon: IconName;
        'data-testid'?: string;
        label: string;
        variant?: 'primary' | 'secondary' | 'ghost';
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IconButtonProps = typeof __propDef.props;
export type IconButtonEvents = typeof __propDef.events;
export type IconButtonSlots = typeof __propDef.slots;
export default class IconButton extends SvelteComponentTyped<IconButtonProps, IconButtonEvents, IconButtonSlots> {
}
export {};
