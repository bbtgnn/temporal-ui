import { SvelteComponentTyped } from "svelte";
import type { Payload } from '../../types';
declare const __propDef: {
    props: {
        value?: Payload | undefined;
        fallback?: string;
        prefix?: string;
        onDecode?: (decodedValue: string) => void | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            decodedValue: string;
        };
    };
};
export type MetadataDecoderProps = typeof __propDef.props;
export type MetadataDecoderEvents = typeof __propDef.events;
export type MetadataDecoderSlots = typeof __propDef.slots;
export default class MetadataDecoder extends SvelteComponentTyped<MetadataDecoderProps, MetadataDecoderEvents, MetadataDecoderSlots> {
}
export {};
