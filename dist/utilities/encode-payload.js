import { get } from 'svelte/store';
import { encodePayloadsWithCodec } from '../services/data-encoder';
import { dataEncoder } from '../stores/data-encoder';
import { btoa } from './btoa';
import { parseWithBigInt, stringifyWithBigInt, } from './parse-with-big-int';
export const getSinglePayload = (decodedValue) => {
    if (decodedValue) {
        const parsedValue = parseWithBigInt(decodedValue);
        const firstPayload = parsedValue === null || parsedValue === void 0 ? void 0 : parsedValue[0];
        if (firstPayload) {
            return stringifyWithBigInt(firstPayload);
        }
    }
    return '';
};
export const setBase64Payload = (payload, encoding = 'json/plain', messageType = '') => {
    if (messageType) {
        return {
            metadata: {
                encoding: btoa(encoding),
                messageType: btoa(messageType),
            },
            data: btoa(JSON.stringify(payload)),
        };
    }
    return {
        metadata: {
            encoding: btoa(encoding),
        },
        data: btoa(JSON.stringify(payload)),
    };
};
export const encodePayloads = async ({ input, encoding, messageType = '', encodeWithCodec = true, }) => {
    var _a;
    let payloads = null;
    if (input) {
        const parsedInput = JSON.parse(input);
        payloads = [setBase64Payload(parsedInput, encoding, messageType)];
        const endpoint = get(dataEncoder).endpoint;
        if (endpoint && encodeWithCodec) {
            const awaitData = await encodePayloadsWithCodec({
                payloads: { payloads },
            });
            payloads = (_a = awaitData === null || awaitData === void 0 ? void 0 : awaitData.payloads) !== null && _a !== void 0 ? _a : null;
        }
    }
    return payloads;
};
