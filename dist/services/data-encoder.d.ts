import type { Settings } from '../types/global';
export type PotentialPayloads = {
    payloads: unknown[];
};
export declare function codeServerRequest({ type, payloads, namespace, settings, }: {
    type: 'decode' | 'encode';
    payloads: PotentialPayloads;
    namespace?: string;
    settings?: Settings;
}): Promise<PotentialPayloads>;
export declare function decodePayloadsWithCodec({ payloads, namespace, settings, }: {
    payloads: PotentialPayloads;
    namespace?: string;
    settings?: Settings;
}): Promise<PotentialPayloads>;
export declare function encodePayloadsWithCodec({ payloads, namespace, settings, }: {
    payloads: PotentialPayloads;
    namespace?: string;
    settings?: Settings;
}): Promise<PotentialPayloads>;
