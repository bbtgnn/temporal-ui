import { SvelteComponentTyped } from "svelte";
import type { IconName } from '../icon';
declare const __propDef: {
    props: {
        [x: string]: any;
        onClick?: () => void;
        label: string;
        icon?: IconName | undefined;
        tooltip?: string;
        animate?: boolean;
        active?: boolean;
        disabled?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NavigationButtonProps = typeof __propDef.props;
export type NavigationButtonEvents = typeof __propDef.events;
export type NavigationButtonSlots = typeof __propDef.slots;
export default class NavigationButton extends SvelteComponentTyped<NavigationButtonProps, NavigationButtonEvents, NavigationButtonSlots> {
}
export {};
