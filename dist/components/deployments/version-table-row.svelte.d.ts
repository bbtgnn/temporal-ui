import { SvelteComponentTyped } from "svelte";
import type { ConfigurableTableHeader } from '../../stores/configurable-table-columns';
import type { RoutingConfig, VersionSummary } from '../../types/deployments';
declare const __propDef: {
    props: {
        routingConfig: RoutingConfig;
        version: VersionSummary;
        columns: ConfigurableTableHeader[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type VersionTableRowProps = typeof __propDef.props;
export type VersionTableRowEvents = typeof __propDef.events;
export type VersionTableRowSlots = typeof __propDef.slots;
export default class VersionTableRow extends SvelteComponentTyped<VersionTableRowProps, VersionTableRowEvents, VersionTableRowSlots> {
}
export {};
