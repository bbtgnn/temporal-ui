import { SvelteComponentTyped } from "svelte";
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
declare const __propDef: {
    props: ({
        label: string;
        id: string;
        'data-testid'?: string;
        href?: string;
        panelId?: string;
        disabled?: boolean;
        active?: boolean;
        onClick?: () => void;
    } & HTMLButtonAttributes) | ({
        label: string;
        id: string;
        'data-testid'?: string;
        href?: string;
        panelId?: string;
        disabled?: boolean;
        active?: boolean;
        onClick?: () => void;
    } & HTMLAttributes<HTMLAnchorElement>);
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TabProps = typeof __propDef.props;
export type TabEvents = typeof __propDef.events;
export type TabSlots = typeof __propDef.slots;
export default class Tab extends SvelteComponentTyped<TabProps, TabEvents, TabSlots> {
}
export {};
