import { SvelteComponentTyped } from "svelte";
import type { HTMLInputAttributes } from 'svelte/elements';
declare class __sveltets_Render<T> {
    props(): HTMLInputAttributes & {
        checked?: boolean;
        label?: string;
        labelHidden?: boolean;
        indeterminate?: boolean;
        value?: T;
        group?: T[];
        'data-testid'?: string;
        required?: boolean;
        valid?: boolean;
        error?: string;
    };
    events(): {
        click: MouseEvent;
        keypress: KeyboardEvent;
        change: CustomEvent<{
            checked: boolean;
            value?: T;
        }>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        flex: {};
    };
}
export type CheckboxProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export type CheckboxEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export type CheckboxSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Checkbox<T> extends SvelteComponentTyped<CheckboxProps<T>, CheckboxEvents<T>, CheckboxSlots<T>> {
}
export {};
