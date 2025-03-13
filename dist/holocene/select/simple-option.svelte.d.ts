import { SvelteComponentTyped } from "svelte";
import type { SelectOptionValue } from '../../types/global';
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: SelectOptionValue;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SimpleOptionProps = typeof __propDef.props;
export type SimpleOptionEvents = typeof __propDef.events;
export type SimpleOptionSlots = typeof __propDef.slots;
export default class SimpleOption extends SvelteComponentTyped<SimpleOptionProps, SimpleOptionEvents, SimpleOptionSlots> {
}
export {};
