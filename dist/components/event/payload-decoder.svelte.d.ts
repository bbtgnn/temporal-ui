import { SvelteComponentTyped } from "svelte";
import type { Memo } from '../../types';
import type { EventAttribute, WorkflowEvent } from '../../types/events';
import { type PotentiallyDecodable } from '../../utilities/decode-payload';
declare const __propDef: {
    props: {
        value: PotentiallyDecodable | EventAttribute | WorkflowEvent | Memo;
        key?: string;
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
export type PayloadDecoderProps = typeof __propDef.props;
export type PayloadDecoderEvents = typeof __propDef.events;
export type PayloadDecoderSlots = typeof __propDef.slots;
export default class PayloadDecoder extends SvelteComponentTyped<PayloadDecoderProps, PayloadDecoderEvents, PayloadDecoderSlots> {
}
export {};
