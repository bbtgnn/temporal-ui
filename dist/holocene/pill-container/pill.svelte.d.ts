import { SvelteComponentTyped } from "svelte";
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { IconName } from '../icon';
declare const __propDef: {
    props: {
        id: string;
        onClick?: () => void;
        disabled?: boolean;
        loading?: boolean;
        active?: boolean;
        icon?: IconName;
        count?: number;
        class?: string;
    } & HTMLButtonAttributes;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PillProps = typeof __propDef.props;
export type PillEvents = typeof __propDef.events;
export type PillSlots = typeof __propDef.slots;
export default class Pill extends SvelteComponentTyped<PillProps, PillEvents, PillSlots> {
}
export {};
