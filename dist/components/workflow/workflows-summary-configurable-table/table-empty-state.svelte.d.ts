/** @typedef {typeof __propDef.props}  TableEmptyStateProps */
/** @typedef {typeof __propDef.events}  TableEmptyStateEvents */
/** @typedef {typeof __propDef.slots}  TableEmptyStateSlots */
export default class TableEmptyState extends SvelteComponentTyped<{
    updating?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    cloud: {};
}> {
}
export type TableEmptyStateProps = typeof __propDef.props;
export type TableEmptyStateEvents = typeof __propDef.events;
export type TableEmptyStateSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        updating?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        cloud: {};
    };
};
export {};
