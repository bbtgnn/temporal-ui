import { SvelteComponentTyped } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAttributes<HTMLDivElement> & {
        intent: "error" | "info" | "nexus" | "success" | "warning";
        title?: string;
        icon?: "error" | "info" | "nexus" | "success" | "warning";
        'data-testid'?: string;
        hidden?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type AlertProps = typeof __propDef.props;
export type AlertEvents = typeof __propDef.events;
export type AlertSlots = typeof __propDef.slots;
export default class Alert extends SvelteComponentTyped<AlertProps, AlertEvents, AlertSlots> {
}
export {};
