import { SvelteComponentTyped } from "svelte";
import type { WorkerDeploymentVersionInfo } from '../../types/deployments';
declare const __propDef: {
    props: {
        version: WorkerDeploymentVersionInfo;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type VersionDetailsProps = typeof __propDef.props;
export type VersionDetailsEvents = typeof __propDef.events;
export type VersionDetailsSlots = typeof __propDef.slots;
export default class VersionDetails extends SvelteComponentTyped<VersionDetailsProps, VersionDetailsEvents, VersionDetailsSlots> {
}
export {};
