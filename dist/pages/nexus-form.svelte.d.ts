import { SvelteComponentTyped } from "svelte";
export declare const endpointForm: import("svelte/store").Writable<Partial<NexusEndpoint>>;
import type { NetworkError } from '../types/global';
import type { NexusEndpoint } from '../types/nexus';
declare const __propDef: {
    props: {
        endpoint?: NexusEndpoint | undefined;
        targetNamespaceList?: {
            namespace: string;
        }[];
        callerNamespaceList?: {
            namespace: string;
        }[];
        error?: NetworkError | undefined;
        nameDisabled?: boolean;
        isCloud?: boolean;
        nameHintText: string;
        nameRegexPattern: RegExp;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        footer: {};
    };
};
export type NexusFormProps = typeof __propDef.props;
export type NexusFormEvents = typeof __propDef.events;
export type NexusFormSlots = typeof __propDef.slots;
export default class NexusForm extends SvelteComponentTyped<NexusFormProps, NexusFormEvents, NexusFormSlots> {
}
export {};
