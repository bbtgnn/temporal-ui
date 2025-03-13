import { SvelteComponentTyped } from "svelte";
import type { ButtonStyles } from '../button.svelte';
declare const __propDef: {
    props: {
        disabled?: boolean;
        loading?: boolean;
        leadingIcon?: "activity" | "add" | "archives" | "arrow-down" | "arrow-left" | "arrow-up" | "arrow-right" | "ascending" | "astronaut" | "batch-operation" | "book" | "bookmark" | "calendar-plus" | "calendar" | "canceled" | "chart-ascending" | "chart" | "checkmark" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "chevron-selector-vertical" | "circle-check-filled" | "clock" | "close" | "comet-solid" | "comet" | "compact" | "connection" | "converter-down" | "converter-up" | "copy" | "credit-card" | "descending" | "download" | "dollar-badge" | "drained" | "error" | "exit" | "external-link" | "eye-hide" | "eye-show" | "feather" | "feed" | "feedback-circle" | "feedback" | "flag" | "file-import" | "file-upload" | "filter" | "filter-solid" | "fire-extinguisher" | "github" | "graph" | "heartbeat" | "hyphen" | "inactive" | "import" | "info" | "json" | "keyboard" | "labs" | "lightning-bolt" | "link" | "lock" | "logout" | "marker" | "merge" | "moon" | "namespace-switcher" | "namespace" | "nexus" | "office-buildings" | "play" | "pause" | "pin-filled" | "pin" | "regions" | "relationship" | "retention" | "retry" | "robot" | "rocket-ship" | "schedules" | "search" | "settings" | "signal" | "sliders" | "spinner" | "star-empty" | "star-filled" | "success" | "sun" | "summary" | "support" | "spinner-solid" | "table" | "target" | "temporal-logo" | "terminal" | "timeline" | "toolbox" | "transcoder-error" | "transcoder-on" | "transcoder-off" | "trash" | "trending-up" | "trending-down" | "tutorial" | "update" | "upload" | "usage" | "vertical-ellipsis" | "warning" | "workflow" | "xmark-filled";
        trailingIcon?: "activity" | "add" | "archives" | "arrow-down" | "arrow-left" | "arrow-up" | "arrow-right" | "ascending" | "astronaut" | "batch-operation" | "book" | "bookmark" | "calendar-plus" | "calendar" | "canceled" | "chart-ascending" | "chart" | "checkmark" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "chevron-selector-vertical" | "circle-check-filled" | "clock" | "close" | "comet-solid" | "comet" | "compact" | "connection" | "converter-down" | "converter-up" | "copy" | "credit-card" | "descending" | "download" | "dollar-badge" | "drained" | "error" | "exit" | "external-link" | "eye-hide" | "eye-show" | "feather" | "feed" | "feedback-circle" | "feedback" | "flag" | "file-import" | "file-upload" | "filter" | "filter-solid" | "fire-extinguisher" | "github" | "graph" | "heartbeat" | "hyphen" | "inactive" | "import" | "info" | "json" | "keyboard" | "labs" | "lightning-bolt" | "link" | "lock" | "logout" | "marker" | "merge" | "moon" | "namespace-switcher" | "namespace" | "nexus" | "office-buildings" | "play" | "pause" | "pin-filled" | "pin" | "regions" | "relationship" | "retention" | "retry" | "robot" | "rocket-ship" | "schedules" | "search" | "settings" | "signal" | "sliders" | "spinner" | "star-empty" | "star-filled" | "success" | "sun" | "summary" | "support" | "spinner-solid" | "table" | "target" | "temporal-logo" | "terminal" | "timeline" | "toolbox" | "transcoder-error" | "transcoder-on" | "transcoder-off" | "trash" | "trending-up" | "trending-down" | "tutorial" | "update" | "upload" | "usage" | "vertical-ellipsis" | "warning" | "workflow" | "xmark-filled";
        count?: number;
        id?: string;
        'data-testid'?: string;
    } & ButtonStyles & import("svelte/elements").HTMLButtonAttributes & {
        controls: string;
        count?: number;
        hasIndicator?: boolean;
        label?: string;
        class?: string;
        active?: boolean;
    };
    events: {
        click: CustomEvent<{
            open: boolean;
        }>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        leading: {};
        default: {};
        trailing: {};
    };
};
export type MenuButtonProps = typeof __propDef.props;
export type MenuButtonEvents = typeof __propDef.events;
export type MenuButtonSlots = typeof __propDef.slots;
export default class MenuButton extends SvelteComponentTyped<MenuButtonProps, MenuButtonEvents, MenuButtonSlots> {
}
export {};
