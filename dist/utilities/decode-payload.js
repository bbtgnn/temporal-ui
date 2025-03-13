import { get } from 'svelte/store';
import { page } from '$app/stores';
import { decodePayloadsWithCodec } from '../services/data-encoder';
import { authUser } from '../stores/auth-user';
import { atob } from './atob';
import { getCodecEndpoint } from './get-codec';
import { has } from './has';
import { isObject } from './is';
import { parseWithBigInt } from './parse-with-big-int';
const toArray = (payloads) => {
    if (Array.isArray(payloads)) {
        return payloads;
    }
    else {
        return [payloads];
    }
};
const decodeMetadata = (metadata) => {
    return Object.entries(metadata).reduce((acc, [key, value]) => {
        acc[key] = atob(String(value));
        return acc;
    }, {});
};
export function decodePayload(payload, returnDataOnly = true) {
    var _a, _b, _c;
    if (payload === null) {
        return payload;
    }
    try {
        const data = parseWithBigInt(atob(String((_a = payload === null || payload === void 0 ? void 0 : payload.data) !== null && _a !== void 0 ? _a : '')));
        if (returnDataOnly)
            return data;
        const metadata = decodeMetadata(payload === null || payload === void 0 ? void 0 : payload.metadata);
        return {
            metadata,
            data,
        };
    }
    catch (_e) {
        console.warn('Could not parse payload: ', _e);
        // Couldn't correctly decode this just let the user deal with the data as is
    }
    const encoding = atob(String((_c = (_b = payload === null || payload === void 0 ? void 0 : payload.metadata) === null || _b === void 0 ? void 0 : _b.encoding) !== null && _c !== void 0 ? _c : ''));
    if (encoding === 'binary/null') {
        if (returnDataOnly)
            return null;
        const metadata = decodeMetadata(payload === null || payload === void 0 ? void 0 : payload.metadata);
        return {
            metadata,
            data: null,
        };
    }
    return payload;
}
export const decodePayloadAttributes = (eventAttribute, returnDataOnly = true) => {
    // Decode Search Attributes
    if (has(eventAttribute, 'searchAttributes') &&
        has(eventAttribute.searchAttributes, 'indexedFields')) {
        const searchAttributes = eventAttribute.searchAttributes.indexedFields;
        Object.entries(searchAttributes).forEach(([key, value]) => {
            searchAttributes[key] = decodePayload(value, returnDataOnly);
        });
    }
    else if (has(eventAttribute, 'searchAttributes')) {
        // Decode Search Attributes on UpsertWorkflowSearchAttributes
        const searchAttributes = eventAttribute.searchAttributes;
        Object.entries(searchAttributes).forEach(([key, value]) => {
            searchAttributes[key] = decodePayload(value, returnDataOnly);
        });
    }
    // Decode Memo
    if (has(eventAttribute, 'memo') && has(eventAttribute.memo, 'fields')) {
        const memo = eventAttribute.memo.fields;
        Object.entries(memo).forEach(([key, value]) => {
            memo[key] = decodePayload(value, returnDataOnly);
        });
    }
    // Decode Header
    if (has(eventAttribute, 'header') && has(eventAttribute.header, 'fields')) {
        const header = eventAttribute.header.fields;
        Object.entries(header).forEach(([key, value]) => {
            header[key] = decodePayload(value, returnDataOnly);
        });
    }
    // Decode Query Result
    // This one is a best guess from the previous codebase and needs verified
    if (has(eventAttribute, 'queryResult')) {
        const queryResult = eventAttribute === null || eventAttribute === void 0 ? void 0 : eventAttribute.queryResult;
        Object.entries(queryResult).forEach(([key, value]) => {
            queryResult[key] = decodePayload(value, returnDataOnly);
        });
    }
    return eventAttribute;
};
const decodeReadablePayloads = (settings) => async (payloads, returnDataOnly = true) => {
    var _a;
    if (getCodecEndpoint(settings)) {
        // Convert Payload data
        const awaitData = await decodePayloadsWithCodec({
            payloads: { payloads },
            settings,
        });
        return ((_a = awaitData === null || awaitData === void 0 ? void 0 : awaitData.payloads) !== null && _a !== void 0 ? _a : []).map((p) => decodePayload(p, returnDataOnly));
    }
    else {
        return payloads.map((p) => decodePayload(p, returnDataOnly));
    }
};
const decodePayloads = (settings) => async (payloads) => {
    var _a;
    if (getCodecEndpoint(settings)) {
        // Convert Payload data
        const awaitData = await decodePayloadsWithCodec({
            payloads: { payloads },
            settings,
        });
        return (_a = awaitData === null || awaitData === void 0 ? void 0 : awaitData.payloads) !== null && _a !== void 0 ? _a : [];
    }
    else {
        return payloads;
    }
};
const keyIs = (key, ...validKeys) => {
    for (const validKey of validKeys) {
        if (key === validKey)
            return true;
    }
    return false;
};
export const decodeSingleReadablePayloadWithCodec = async (payload, settings = get(page).data.settings) => {
    try {
        const decode = decodeReadablePayloads(settings);
        const data = await decode([payload]);
        const result = data[0];
        return result || '';
    }
    catch {
        return '';
    }
};
export const decodeAllPotentialPayloadsWithCodec = async (anyAttributes, namespace = get(page).params.namespace, settings = get(page).data.settings, accessToken = get(authUser).accessToken) => {
    const decode = decodeReadablePayloads(settings);
    if (anyAttributes) {
        for (const key of Object.keys(anyAttributes)) {
            if (keyIs(key, 'payloads', 'encodedAttributes') && anyAttributes[key]) {
                const data = toArray(anyAttributes[key]);
                const decoded = await decode(data);
                anyAttributes[key] = keyIs(key, 'encodedAttributes')
                    ? decoded[0]
                    : decoded;
            }
            else {
                const next = anyAttributes[key];
                if (isObject(next)) {
                    anyAttributes[key] = await decodeAllPotentialPayloadsWithCodec(next, namespace, settings, accessToken);
                }
            }
        }
    }
    return anyAttributes;
};
export const isSinglePayload = (payload) => {
    if (!isObject(payload))
        return false;
    const keys = Object.keys(payload);
    return (keys.length === 2 && keys.includes('metadata') && keys.includes('data'));
};
export const cloneAllPotentialPayloadsWithCodec = async (anyAttributes, namespace, settings, accessToken, decodeSetting = 'readable', returnDataOnly = true) => {
    if (!anyAttributes)
        return anyAttributes;
    const decode = decodeSetting === 'readable'
        ? decodeReadablePayloads(settings)
        : decodePayloads(settings);
    const clone = { ...anyAttributes };
    if (anyAttributes) {
        // Now that we can have single Payload that is not an array (Nexus)
        if (isSinglePayload(clone)) {
            const data = toArray(clone);
            const decoded = await decode(data, returnDataOnly);
            return (decoded === null || decoded === void 0 ? void 0 : decoded[0]) || clone;
        }
        for (const key of Object.keys(clone)) {
            if (keyIs(key, 'payloads', 'encodedAttributes') && clone[key]) {
                const data = toArray(clone[key]);
                const decoded = await decode(data, returnDataOnly);
                clone[key] = keyIs(key, 'encodedAttributes') ? decoded[0] : decoded;
            }
            else {
                const next = clone[key];
                if (isObject(next)) {
                    clone[key] = await cloneAllPotentialPayloadsWithCodec(next, namespace, settings, accessToken, decodeSetting, returnDataOnly);
                }
            }
        }
    }
    return clone;
};
export const convertPayloadToJsonWithCodec = async ({ attributes, namespace, settings, accessToken, }) => {
    const decodedAttributes = await decodeAllPotentialPayloadsWithCodec(attributes, namespace, settings, accessToken);
    return decodedAttributes;
};
