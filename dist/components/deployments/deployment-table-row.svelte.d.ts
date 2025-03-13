import { SvelteComponentTyped } from "svelte";
import type { ConfigurableTableHeader } from '../../stores/configurable-table-columns';
import type { WorkerDeploymentSummary } from '../../types/deployments';
declare const __propDef: {
    props: {
        deployment: WorkerDeploymentSummary;
        columns: ConfigurableTableHeader[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DeploymentTableRowProps = typeof __propDef.props;
export type DeploymentTableRowEvents = typeof __propDef.events;
export type DeploymentTableRowSlots = typeof __propDef.slots;
export default class DeploymentTableRow extends SvelteComponentTyped<DeploymentTableRowProps, DeploymentTableRowEvents, DeploymentTableRowSlots> {
}
export {};
