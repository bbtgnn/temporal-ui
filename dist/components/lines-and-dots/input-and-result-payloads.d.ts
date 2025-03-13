import type { Payload } from '../../types';
import type { PotentiallyDecodable } from '../../utilities/decode-payload';
export declare const parseContent: (c: string) => PotentiallyDecodable | undefined;
export declare const parsePayloads: (c: string) => unknown[];
export declare const getPayloads: (value: PotentiallyDecodable | undefined) => Payload[];
