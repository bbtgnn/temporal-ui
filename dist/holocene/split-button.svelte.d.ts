import { SvelteComponentTyped } from "svelte";
import type { IconName } from './icon';
declare const __propDef: {
    props: {
        [x: string]: any;
        label: string;
        menuLabel: string;
        icon?: IconName | undefined;
        id: string;
        disabled?: boolean;
        position?: 'left' | 'right';
        primaryActionDisabled?: boolean;
        href?: string | undefined;
        menuClass?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SplitButtonProps = typeof __propDef.props;
export type SplitButtonEvents = typeof __propDef.events;
export type SplitButtonSlots = typeof __propDef.slots;
export default class SplitButton extends SvelteComponentTyped<SplitButtonProps, SplitButtonEvents, SplitButtonSlots> {
}
export {};
