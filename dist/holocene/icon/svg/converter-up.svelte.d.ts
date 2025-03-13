import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ConverterUpProps = typeof __propDef.props;
export type ConverterUpEvents = typeof __propDef.events;
export type ConverterUpSlots = typeof __propDef.slots;
export default class ConverterUp extends SvelteComponentTyped<ConverterUpProps, ConverterUpEvents, ConverterUpSlots> {
}
export {};
