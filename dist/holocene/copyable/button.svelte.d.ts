import { SvelteComponentTyped } from "svelte";
import type { HTMLButtonAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLButtonAttributes & {
        copyIconTitle: string;
        copySuccessIconTitle: string;
        copied: boolean;
        'data-testid'?: string;
        'data-theme'?: string;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
