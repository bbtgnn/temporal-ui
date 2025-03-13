import { SvelteComponentTyped } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
import type { IconName } from '../icon';
declare const __propDef: {
    props: HTMLAttributes<HTMLDivElement> & {
        id?: string;
        icon?: IconName;
        open?: boolean;
        expandable?: boolean;
        error?: string;
        onToggle?: () => Promise<void>;
        'data-testid'?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        description: {};
        action: {};
        default: {
            open: boolean;
        };
    };
};
export type AccordionLightProps = typeof __propDef.props;
export type AccordionLightEvents = typeof __propDef.events;
export type AccordionLightSlots = typeof __propDef.slots;
export default class AccordionLight extends SvelteComponentTyped<AccordionLightProps, AccordionLightEvents, AccordionLightSlots> {
}
export {};
