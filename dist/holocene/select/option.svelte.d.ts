import { SvelteComponentTyped } from "svelte";
export interface OptionType<T> {
    label: string;
    value: T;
    description?: string;
    disabled?: boolean;
    class?: string;
    'data-testid'?: string;
}
export declare const EMPTY_OPTION: OptionType<string>;
declare class __sveltets_Render<T> {
    props(): {
        [x: string]: any;
        value: T;
        description?: string;
        disabled?: boolean;
        class?: string;
    };
    events(): {
        click: CustomEvent<{
            value: T;
        }>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        leading: {
            slot: string;
        };
        default: {};
        trailing: {
            slot: string;
        };
    };
}
export type OptionProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export type OptionEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export type OptionSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Option<T> extends SvelteComponentTyped<OptionProps<T>, OptionEvents<T>, OptionSlots<T>> {
}
export {};
