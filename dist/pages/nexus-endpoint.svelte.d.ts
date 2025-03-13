import { SvelteComponentTyped } from "svelte";
import type { NexusEndpoint } from '../types/nexus';
declare const __propDef: {
    props: {
        endpoint: NexusEndpoint;
        editDisabled?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NexusEndpointProps = typeof __propDef.props;
export type NexusEndpointEvents = typeof __propDef.events;
export type NexusEndpointSlots = typeof __propDef.slots;
export default class NexusEndpoint extends SvelteComponentTyped<NexusEndpointProps, NexusEndpointEvents, NexusEndpointSlots> {
}
export {};
