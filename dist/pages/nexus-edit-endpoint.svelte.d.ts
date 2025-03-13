import { SvelteComponentTyped } from "svelte";
import type { NetworkError } from '../types/global';
import type { NexusEndpoint } from '../types/nexus';
declare const __propDef: {
    props: {
        endpoint: NexusEndpoint;
        targetNamespaceList?: {
            namespace: string;
        }[];
        callerNamespaceList?: {
            namespace: string;
        }[];
        onUpdate: () => void;
        onDelete: () => void;
        error?: NetworkError | undefined;
        loading?: boolean;
        isCloud?: boolean;
        nameRegexPattern?: RegExp;
        nameHintText?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NexusEditEndpointProps = typeof __propDef.props;
export type NexusEditEndpointEvents = typeof __propDef.events;
export type NexusEditEndpointSlots = typeof __propDef.slots;
export default class NexusEditEndpoint extends SvelteComponentTyped<NexusEditEndpointProps, NexusEditEndpointEvents, NexusEditEndpointSlots> {
}
export {};
