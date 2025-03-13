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
export type ConverterDownProps = typeof __propDef.props;
export type ConverterDownEvents = typeof __propDef.events;
export type ConverterDownSlots = typeof __propDef.slots;
export default class ConverterDown extends SvelteComponentTyped<ConverterDownProps, ConverterDownEvents, ConverterDownSlots> {
}
export {};
