import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        intent?: 'warning' | 'default';
        button?: boolean;
        removeButtonLabel: string;
        disabled?: boolean;
    };
    events: {
        click: MouseEvent;
        remove: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ChipProps = typeof __propDef.props;
export type ChipEvents = typeof __propDef.events;
export type ChipSlots = typeof __propDef.slots;
export default class Chip extends SvelteComponentTyped<ChipProps, ChipEvents, ChipSlots> {
}
export {};
