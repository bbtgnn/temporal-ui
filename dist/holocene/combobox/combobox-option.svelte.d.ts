import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        selected?: boolean;
        disabled?: boolean;
        label: string;
    } | {
        label: string;
        disabled: true;
        selected?: never;
    };
    events: {
        click: CustomEvent<undefined>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        leading: {
            slot: string;
        };
        trailing: {
            slot: string;
        };
    };
};
export type ComboboxOptionProps = typeof __propDef.props;
export type ComboboxOptionEvents = typeof __propDef.events;
export type ComboboxOptionSlots = typeof __propDef.slots;
export default class ComboboxOption extends SvelteComponentTyped<ComboboxOptionProps, ComboboxOptionEvents, ComboboxOptionSlots> {
}
export {};
