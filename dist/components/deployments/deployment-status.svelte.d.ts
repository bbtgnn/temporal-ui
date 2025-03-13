import { SvelteComponentTyped } from "svelte";
import type { DeploymentStatus } from '../../types/deployments';
declare const __propDef: {
    props: {
        status: DeploymentStatus;
        version: string;
        label: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DeploymentStatusProps = typeof __propDef.props;
export type DeploymentStatusEvents = typeof __propDef.events;
export type DeploymentStatusSlots = typeof __propDef.slots;
export default class DeploymentStatus extends SvelteComponentTyped<DeploymentStatusProps, DeploymentStatusEvents, DeploymentStatusSlots> {
}
export {};
