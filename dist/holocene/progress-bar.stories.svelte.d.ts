import { SvelteComponentTyped } from "svelte";
import ProgressBar from './progress-bar.svelte';
export declare const meta: import("@storybook/csf").ComponentAnnotations<import("@storybook/svelte/dist/types-3695f681").S<ProgressBar>, {
    width?: string;
}>;
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ProgressBarProps = typeof __propDef.props;
export type ProgressBarEvents = typeof __propDef.events;
export type ProgressBarSlots = typeof __propDef.slots;
export default class ProgressBar extends SvelteComponentTyped<ProgressBarProps, ProgressBarEvents, ProgressBarSlots> {
}
export {};
