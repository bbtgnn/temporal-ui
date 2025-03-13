import { SvelteComponentTyped } from "svelte";
import type { NexusEndpoint } from '../types/nexus';
declare const __propDef: {
    props: {
        endpoints?: NexusEndpoint[];
        searchPlaceholder?: string;
        createDisabled?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type NexusEndpointsProps = typeof __propDef.props;
export type NexusEndpointsEvents = typeof __propDef.events;
export type NexusEndpointsSlots = typeof __propDef.slots;
export default class NexusEndpoints extends SvelteComponentTyped<NexusEndpointsProps, NexusEndpointsEvents, NexusEndpointsSlots> {
}
export {};
