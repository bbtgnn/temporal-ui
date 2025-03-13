import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        label: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type OptionGroupProps = typeof __propDef.props;
export type OptionGroupEvents = typeof __propDef.events;
export type OptionGroupSlots = typeof __propDef.slots;
export default class OptionGroup extends SvelteComponentTyped<OptionGroupProps, OptionGroupEvents, OptionGroupSlots> {
}
export {};
