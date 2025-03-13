import { SvelteComponentTyped } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
import type { IconName } from '../icon';
declare const __propDef: {
    props: HTMLAttributes<HTMLDivElement> & {
        title: string;
        id?: string;
        subtitle?: string;
        icon?: IconName;
        open?: boolean;
        expandable?: boolean;
        error?: string;
        onToggle?: () => void;
        'data-testid'?: string;
    };
    events: {
        click: MouseEvent;
        keyup: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        summary: {};
        action: {};
        default: {};
    };
};
export type AccordionProps = typeof __propDef.props;
export type AccordionEvents = typeof __propDef.events;
export type AccordionSlots = typeof __propDef.slots;
export default class Accordion extends SvelteComponentTyped<AccordionProps, AccordionEvents, AccordionSlots> {
}
export {};
