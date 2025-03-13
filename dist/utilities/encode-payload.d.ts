import type { PayloadInputEncoding } from '../components/payload-input-with-encoding.svelte';
import type { Payloads } from '../types';
export declare const getSinglePayload: (decodedValue: string) => string;
export declare const setBase64Payload: (payload: unknown, encoding?: PayloadInputEncoding, messageType?: string) => {
    metadata: {
        encoding: string;
        messageType: string;
    };
    data: string;
} | {
    metadata: {
        encoding: string;
        messageType?: undefined;
    };
    data: string;
};
type EncodePayloads = {
    input: string;
    encoding: PayloadInputEncoding;
    messageType?: string;
    encodeWithCodec?: boolean;
};
export declare const encodePayloads: ({ input, encoding, messageType, encodeWithCodec, }: EncodePayloads) => Promise<Payloads>;
export {};
