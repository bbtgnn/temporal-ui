import { SvelteComponentTyped } from "svelte";
import type { RadioInputProps } from './types';
declare class __sveltets_Render<T> {
    props(): RadioInputProps<T>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
}
export type RadioInputProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export type RadioInputEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export type RadioInputSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class RadioInput<T> extends SvelteComponentTyped<RadioInputProps<T>, RadioInputEvents<T>, RadioInputSlots<T>> {
}
export {};
