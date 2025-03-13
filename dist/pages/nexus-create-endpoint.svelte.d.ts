import { SvelteComponentTyped } from "svelte";
import type { NetworkError } from '../types/global';
declare const __propDef: {
    props: {
        onCreate: () => void;
        targetNamespaceList?: {
            namespace: string;
        }[];
        callerNamespaceList?: {
            namespace: string;
        }[];
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
export type NexusCreateEndpointProps = typeof __propDef.props;
export type NexusCreateEndpointEvents = typeof __propDef.events;
export type NexusCreateEndpointSlots = typeof __propDef.slots;
export default class NexusCreateEndpoint extends SvelteComponentTyped<NexusCreateEndpointProps, NexusCreateEndpointEvents, NexusCreateEndpointSlots> {
}
export {};
