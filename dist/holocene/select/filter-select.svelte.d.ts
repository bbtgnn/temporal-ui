import { SvelteComponentTyped } from "svelte";
import type { SelectOptionValue } from '../../types/global';
declare const __propDef: {
    props: {
        [x: string]: any;
        label: string;
        value: SelectOptionValue;
        options?: SelectOptionValue[];
        parameter?: string;
        position?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FilterSelectProps = typeof __propDef.props;
export type FilterSelectEvents = typeof __propDef.events;
export type FilterSelectSlots = typeof __propDef.slots;
export default class FilterSelect extends SvelteComponentTyped<FilterSelectProps, FilterSelectEvents, FilterSelectSlots> {
}
export {};
