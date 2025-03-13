import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        options?: {
            value: string;
            label?: string;
        }[];
        disabled?: boolean;
        inputId: string;
        noBorderLeft?: boolean;
        noBorderRight?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ConditionalMenuProps = typeof __propDef.props;
export type ConditionalMenuEvents = typeof __propDef.events;
export type ConditionalMenuSlots = typeof __propDef.slots;
export default class ConditionalMenu extends SvelteComponentTyped<ConditionalMenuProps, ConditionalMenuEvents, ConditionalMenuSlots> {
}
export {};
