import type { codecEndpoint, includeCredentials, passAccessToken } from '../stores/data-encoder-config';
import type { DownloadEventHistorySetting } from '../stores/events';
import type { Failure, Memo, Payloads, Payload as RawPayload } from '../types';
import type { EventAttribute, EventRequestMetadata, Payload, WorkflowEvent } from '../types/events';
import type { Optional, Replace, Settings } from '../types/global';
export type PotentiallyDecodable = Payloads | Record<string | number | symbol, unknown>;
export type Decode = {
    convertPayloadToJsonWithCodec: typeof convertPayloadToJsonWithCodec;
    decodePayloadAttributes: typeof decodePayloadAttributes;
};
export type DecodeFunctions = {
    convertWithCodec?: Decode['convertPayloadToJsonWithCodec'];
    decodeAttributes?: Decode['decodePayloadAttributes'];
    encoderEndpoint?: typeof codecEndpoint;
    codecPassAccessToken?: typeof passAccessToken;
    codecIncludeCredentials?: typeof includeCredentials;
};
export declare function decodePayload(payload: Payload, returnDataOnly?: boolean): unknown | Payload | null;
export declare const decodePayloadAttributes: <T extends Optional<EventAttribute | WorkflowEvent | PotentiallyDecodable>>(eventAttribute: T, returnDataOnly?: boolean) => Replace<T, Optional<EventAttribute | WorkflowEvent | PotentiallyDecodable>>;
export declare const decodeSingleReadablePayloadWithCodec: (payload: RawPayload | Payload, settings?: Settings) => Promise<string | Payload>;
export declare const decodeAllPotentialPayloadsWithCodec: (anyAttributes: EventAttribute | PotentiallyDecodable | Failure, namespace?: string, settings?: Settings, accessToken?: string) => Promise<EventAttribute | PotentiallyDecodable | Failure>;
export declare const isSinglePayload: (payload: unknown) => boolean;
export declare const cloneAllPotentialPayloadsWithCodec: (anyAttributes: PotentiallyDecodable | EventAttribute | WorkflowEvent | Memo | null, namespace: string, settings: Settings, accessToken: string, decodeSetting?: DownloadEventHistorySetting, returnDataOnly?: boolean) => Promise<PotentiallyDecodable | EventAttribute | WorkflowEvent | Memo | null>;
export declare const convertPayloadToJsonWithCodec: ({ attributes, namespace, settings, accessToken, }: {
    attributes: EventAttribute | PotentiallyDecodable | Failure;
} & EventRequestMetadata) => Promise<EventAttribute | PotentiallyDecodable | Failure>;
