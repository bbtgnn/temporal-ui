import { SvelteComponentTyped } from "svelte";
export declare const SELECT_CONTEXT = "select-context";
type ExtendedSelectOption<T> = {
    nativeElement: HTMLLIElement;
} & SelectOption<T>;
export interface SelectContext<T> {
    handleChange: (value: T) => void;
    options: Writable<ExtendedSelectOption<T>[]>;
    selectLabel: Writable<string>;
    selectValue: Writable<T>;
    open: Writable<boolean>;
}
export interface SelectOption<T> {
    value: T;
    label: string;
}
import type { HTMLInputAttributes } from 'svelte/elements';
import { type Writable } from 'svelte/store';
declare class __sveltets_Render<T> {
    props(): HTMLInputAttributes & {
        label: string;
        id: string;
        labelHidden?: boolean;
        value?: T;
        placeholder?: string;
        disabled?: boolean;
        leadingIcon?: "activity" | "add" | "archives" | "arrow-down" | "arrow-left" | "arrow-up" | "arrow-right" | "ascending" | "astronaut" | "batch-operation" | "book" | "bookmark" | "calendar-plus" | "calendar" | "canceled" | "chart-ascending" | "chart" | "checkmark" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "chevron-selector-vertical" | "circle-check-filled" | "clock" | "close" | "comet-solid" | "comet" | "compact" | "connection" | "converter-down" | "converter-up" | "copy" | "credit-card" | "descending" | "download" | "dollar-badge" | "drained" | "error" | "exit" | "external-link" | "eye-hide" | "eye-show" | "feather" | "feed" | "feedback-circle" | "feedback" | "flag" | "file-import" | "file-upload" | "filter" | "filter-solid" | "fire-extinguisher" | "github" | "graph" | "heartbeat" | "hyphen" | "inactive" | "import" | "info" | "json" | "keyboard" | "labs" | "lightning-bolt" | "link" | "lock" | "logout" | "marker" | "merge" | "moon" | "namespace-switcher" | "namespace" | "nexus" | "office-buildings" | "play" | "pause" | "pin-filled" | "pin" | "regions" | "relationship" | "retention" | "retry" | "robot" | "rocket-ship" | "schedules" | "search" | "settings" | "signal" | "sliders" | "spinner" | "star-empty" | "star-filled" | "success" | "sun" | "summary" | "support" | "spinner-solid" | "table" | "target" | "temporal-logo" | "terminal" | "timeline" | "toolbox" | "transcoder-error" | "transcoder-on" | "transcoder-off" | "trash" | "trending-up" | "trending-down" | "tutorial" | "update" | "upload" | "usage" | "vertical-ellipsis" | "warning" | "workflow" | "xmark-filled";
        onChange?: (value: T) => void;
        'data-testid'?: string;
        menuClass?: string;
        variant?: "primary" | "secondary" | "destructive" | "ghost" | "table-header";
        required?: boolean;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        leading: {
            slot: string;
        };
        default: {};
    };
}
export type SelectProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export type SelectEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export type SelectSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Select<T> extends SvelteComponentTyped<SelectProps<T>, SelectEvents<T>, SelectSlots<T>> {
}
export {};
