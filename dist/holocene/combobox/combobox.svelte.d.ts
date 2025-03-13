import { SvelteComponentTyped } from "svelte";
import type { HTMLInputAttributes } from 'svelte/elements';
import { type Writable } from 'svelte/store';
declare class __sveltets_Render<T> {
    props(): (HTMLInputAttributes & {
        id: string;
        label: string;
        noResultsText: string;
        disabled?: boolean;
        labelHidden?: boolean;
        placeholder?: string;
        readonly?: boolean;
        required?: boolean;
        leadingIcon?: "activity" | "add" | "archives" | "arrow-down" | "arrow-left" | "arrow-up" | "arrow-right" | "ascending" | "astronaut" | "batch-operation" | "book" | "bookmark" | "calendar-plus" | "calendar" | "canceled" | "chart-ascending" | "chart" | "checkmark" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "chevron-selector-vertical" | "circle-check-filled" | "clock" | "close" | "comet-solid" | "comet" | "compact" | "connection" | "converter-down" | "converter-up" | "copy" | "credit-card" | "descending" | "download" | "dollar-badge" | "drained" | "error" | "exit" | "external-link" | "eye-hide" | "eye-show" | "feather" | "feed" | "feedback-circle" | "feedback" | "flag" | "file-import" | "file-upload" | "filter" | "filter-solid" | "fire-extinguisher" | "github" | "graph" | "heartbeat" | "hyphen" | "inactive" | "import" | "info" | "json" | "keyboard" | "labs" | "lightning-bolt" | "link" | "lock" | "logout" | "marker" | "merge" | "moon" | "namespace-switcher" | "namespace" | "nexus" | "office-buildings" | "play" | "pause" | "pin-filled" | "pin" | "regions" | "relationship" | "retention" | "retry" | "robot" | "rocket-ship" | "schedules" | "search" | "settings" | "signal" | "sliders" | "spinner" | "star-empty" | "star-filled" | "success" | "sun" | "summary" | "support" | "spinner-solid" | "table" | "target" | "temporal-logo" | "terminal" | "timeline" | "toolbox" | "transcoder-error" | "transcoder-on" | "transcoder-off" | "trash" | "trending-up" | "trending-down" | "tutorial" | "update" | "upload" | "usage" | "vertical-ellipsis" | "warning" | "workflow" | "xmark-filled";
        minSize?: number;
        maxSize?: number;
        'data-testid'?: string;
        error?: string;
        valid?: boolean;
        actionTooltip?: string;
        href?: string;
        hrefDisabled?: boolean;
        loading?: boolean;
        loadingText?: string;
        open?: Writable<boolean>;
        maxMenuHeight?: string;
    } & {
        options: string[];
        optionValueKey?: never;
        optionLabelKey?: never;
        displayValue?: never;
    } & {
        multiselect?: false;
        value: string;
        chipLimit?: never;
    }) | (HTMLInputAttributes & {
        id: string;
        label: string;
        noResultsText: string;
        disabled?: boolean;
        labelHidden?: boolean;
        placeholder?: string;
        readonly?: boolean;
        required?: boolean;
        leadingIcon?: "activity" | "add" | "archives" | "arrow-down" | "arrow-left" | "arrow-up" | "arrow-right" | "ascending" | "astronaut" | "batch-operation" | "book" | "bookmark" | "calendar-plus" | "calendar" | "canceled" | "chart-ascending" | "chart" | "checkmark" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "chevron-selector-vertical" | "circle-check-filled" | "clock" | "close" | "comet-solid" | "comet" | "compact" | "connection" | "converter-down" | "converter-up" | "copy" | "credit-card" | "descending" | "download" | "dollar-badge" | "drained" | "error" | "exit" | "external-link" | "eye-hide" | "eye-show" | "feather" | "feed" | "feedback-circle" | "feedback" | "flag" | "file-import" | "file-upload" | "filter" | "filter-solid" | "fire-extinguisher" | "github" | "graph" | "heartbeat" | "hyphen" | "inactive" | "import" | "info" | "json" | "keyboard" | "labs" | "lightning-bolt" | "link" | "lock" | "logout" | "marker" | "merge" | "moon" | "namespace-switcher" | "namespace" | "nexus" | "office-buildings" | "play" | "pause" | "pin-filled" | "pin" | "regions" | "relationship" | "retention" | "retry" | "robot" | "rocket-ship" | "schedules" | "search" | "settings" | "signal" | "sliders" | "spinner" | "star-empty" | "star-filled" | "success" | "sun" | "summary" | "support" | "spinner-solid" | "table" | "target" | "temporal-logo" | "terminal" | "timeline" | "toolbox" | "transcoder-error" | "transcoder-on" | "transcoder-off" | "trash" | "trending-up" | "trending-down" | "tutorial" | "update" | "upload" | "usage" | "vertical-ellipsis" | "warning" | "workflow" | "xmark-filled";
        minSize?: number;
        maxSize?: number;
        'data-testid'?: string;
        error?: string;
        valid?: boolean;
        actionTooltip?: string;
        href?: string;
        hrefDisabled?: boolean;
        loading?: boolean;
        loadingText?: string;
        open?: Writable<boolean>;
        maxMenuHeight?: string;
    } & {
        options: string[];
        optionValueKey?: never;
        optionLabelKey?: never;
        displayValue?: never;
    } & {
        multiselect: true;
        value: string[];
        displayChips?: boolean;
        chipLimit?: number;
        removeChipLabel?: string;
        selectAllLabel?: string;
        selectNoneLabel?: string;
        numberOfItemsSelectedLabel?: (count: number) => string;
    }) | (HTMLInputAttributes & {
        id: string;
        label: string;
        noResultsText: string;
        disabled?: boolean;
        labelHidden?: boolean;
        placeholder?: string;
        readonly?: boolean;
        required?: boolean;
        leadingIcon?: "activity" | "add" | "archives" | "arrow-down" | "arrow-left" | "arrow-up" | "arrow-right" | "ascending" | "astronaut" | "batch-operation" | "book" | "bookmark" | "calendar-plus" | "calendar" | "canceled" | "chart-ascending" | "chart" | "checkmark" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "chevron-selector-vertical" | "circle-check-filled" | "clock" | "close" | "comet-solid" | "comet" | "compact" | "connection" | "converter-down" | "converter-up" | "copy" | "credit-card" | "descending" | "download" | "dollar-badge" | "drained" | "error" | "exit" | "external-link" | "eye-hide" | "eye-show" | "feather" | "feed" | "feedback-circle" | "feedback" | "flag" | "file-import" | "file-upload" | "filter" | "filter-solid" | "fire-extinguisher" | "github" | "graph" | "heartbeat" | "hyphen" | "inactive" | "import" | "info" | "json" | "keyboard" | "labs" | "lightning-bolt" | "link" | "lock" | "logout" | "marker" | "merge" | "moon" | "namespace-switcher" | "namespace" | "nexus" | "office-buildings" | "play" | "pause" | "pin-filled" | "pin" | "regions" | "relationship" | "retention" | "retry" | "robot" | "rocket-ship" | "schedules" | "search" | "settings" | "signal" | "sliders" | "spinner" | "star-empty" | "star-filled" | "success" | "sun" | "summary" | "support" | "spinner-solid" | "table" | "target" | "temporal-logo" | "terminal" | "timeline" | "toolbox" | "transcoder-error" | "transcoder-on" | "transcoder-off" | "trash" | "trending-up" | "trending-down" | "tutorial" | "update" | "upload" | "usage" | "vertical-ellipsis" | "warning" | "workflow" | "xmark-filled";
        minSize?: number;
        maxSize?: number;
        'data-testid'?: string;
        error?: string;
        valid?: boolean;
        actionTooltip?: string;
        href?: string;
        hrefDisabled?: boolean;
        loading?: boolean;
        loadingText?: string;
        open?: Writable<boolean>;
        maxMenuHeight?: string;
    } & {
        options: T[];
        optionValueKey: keyof T;
        optionLabelKey?: keyof T;
    } & {
        multiselect?: false;
        value: string;
        chipLimit?: never;
    }) | (HTMLInputAttributes & {
        id: string;
        label: string;
        noResultsText: string;
        disabled?: boolean;
        labelHidden?: boolean;
        placeholder?: string;
        readonly?: boolean;
        required?: boolean;
        leadingIcon?: "activity" | "add" | "archives" | "arrow-down" | "arrow-left" | "arrow-up" | "arrow-right" | "ascending" | "astronaut" | "batch-operation" | "book" | "bookmark" | "calendar-plus" | "calendar" | "canceled" | "chart-ascending" | "chart" | "checkmark" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "chevron-selector-vertical" | "circle-check-filled" | "clock" | "close" | "comet-solid" | "comet" | "compact" | "connection" | "converter-down" | "converter-up" | "copy" | "credit-card" | "descending" | "download" | "dollar-badge" | "drained" | "error" | "exit" | "external-link" | "eye-hide" | "eye-show" | "feather" | "feed" | "feedback-circle" | "feedback" | "flag" | "file-import" | "file-upload" | "filter" | "filter-solid" | "fire-extinguisher" | "github" | "graph" | "heartbeat" | "hyphen" | "inactive" | "import" | "info" | "json" | "keyboard" | "labs" | "lightning-bolt" | "link" | "lock" | "logout" | "marker" | "merge" | "moon" | "namespace-switcher" | "namespace" | "nexus" | "office-buildings" | "play" | "pause" | "pin-filled" | "pin" | "regions" | "relationship" | "retention" | "retry" | "robot" | "rocket-ship" | "schedules" | "search" | "settings" | "signal" | "sliders" | "spinner" | "star-empty" | "star-filled" | "success" | "sun" | "summary" | "support" | "spinner-solid" | "table" | "target" | "temporal-logo" | "terminal" | "timeline" | "toolbox" | "transcoder-error" | "transcoder-on" | "transcoder-off" | "trash" | "trending-up" | "trending-down" | "tutorial" | "update" | "upload" | "usage" | "vertical-ellipsis" | "warning" | "workflow" | "xmark-filled";
        minSize?: number;
        maxSize?: number;
        'data-testid'?: string;
        error?: string;
        valid?: boolean;
        actionTooltip?: string;
        href?: string;
        hrefDisabled?: boolean;
        loading?: boolean;
        loadingText?: string;
        open?: Writable<boolean>;
        maxMenuHeight?: string;
    } & {
        options: T[];
        optionValueKey: keyof T;
        optionLabelKey?: keyof T;
    } & {
        multiselect: true;
        value: string[];
        displayChips?: boolean;
        chipLimit?: number;
        removeChipLabel?: string;
        selectAllLabel?: string;
        selectNoneLabel?: string;
        numberOfItemsSelectedLabel?: (count: number) => string;
    });
    events(): {
        change: CustomEvent<{
            value: string | T;
        }>;
        filter: CustomEvent<string>;
        close: CustomEvent<{
            selectedOption: string | T;
        }>;
        input: CustomEvent<string>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        action: {};
    };
}
export type ComboboxProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export type ComboboxEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export type ComboboxSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Combobox<T> extends SvelteComponentTyped<ComboboxProps<T>, ComboboxEvents<T>, ComboboxSlots<T>> {
}
export {};
