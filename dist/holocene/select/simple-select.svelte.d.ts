import { SvelteComponentTyped } from "svelte";
import type { HTMLSelectAttributes } from 'svelte/elements';
import type { SelectOptionValue } from '../../types/global';
declare const __propDef: {
    props: HTMLSelectAttributes & {
        id: string;
        value: SelectOptionValue;
        label: string;
        arrow?: boolean;
        name?: string;
        required?: boolean;
        options?: SelectOptionValue[];
        'data-testid'?: string;
    };
    events: {
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SimpleSelectProps = typeof __propDef.props;
export type SimpleSelectEvents = typeof __propDef.events;
export type SimpleSelectSlots = typeof __propDef.slots;
export default class SimpleSelect extends SvelteComponentTyped<SimpleSelectProps, SimpleSelectEvents, SimpleSelectSlots> {
}
export {};
