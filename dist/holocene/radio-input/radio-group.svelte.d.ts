import { SvelteComponentTyped } from "svelte";
export declare const RADIO_GROUP_CONTEXT = "radio-group-ctx";
import type { RadioGroupProps } from './types';
declare class __sveltets_Render<T> {
    props(): RadioGroupProps<T>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {};
    };
}
export type RadioGroupProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export type RadioGroupEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export type RadioGroupSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class RadioGroup<T> extends SvelteComponentTyped<RadioGroupProps<T>, RadioGroupEvents<T>, RadioGroupSlots<T>> {
}
export {};
