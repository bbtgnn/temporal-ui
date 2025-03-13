import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id: string;
        chips: string[];
        label: string;
        labelHidden?: boolean;
        placeholder?: string;
        name?: string;
        disabled?: boolean;
        required?: boolean;
        hintText?: string;
        validator?: (value: string) => boolean;
        removeChipButtonLabel: string | ((chipValue: string) => string);
        external?: boolean;
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChipInputProps = typeof __propDef.props;
export type ChipInputEvents = typeof __propDef.events;
export type ChipInputSlots = typeof __propDef.slots;
export default class ChipInput extends SvelteComponentTyped<ChipInputProps, ChipInputEvents, ChipInputSlots> {
}
export {};
