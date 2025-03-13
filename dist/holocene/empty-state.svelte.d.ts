import { SvelteComponentTyped } from "svelte";
import type { IconName } from './icon';
declare const __propDef: {
    props: {
        [x: string]: any;
        title: string;
        content?: string;
        error?: string;
        icon?: IconName;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type EmptyStateProps = typeof __propDef.props;
export type EmptyStateEvents = typeof __propDef.events;
export type EmptyStateSlots = typeof __propDef.slots;
export default class EmptyState extends SvelteComponentTyped<EmptyStateProps, EmptyStateEvents, EmptyStateSlots> {
}
export {};
