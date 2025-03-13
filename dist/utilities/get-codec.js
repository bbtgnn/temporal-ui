import { get } from 'svelte/store';
import { codecEndpoint, includeCredentials, overrideRemoteCodecConfiguration, passAccessToken, } from '../stores/data-encoder-config';
export const getCodecEndpoint = (settings, endpoint = codecEndpoint, override = overrideRemoteCodecConfiguration) => {
    var _a;
    const overrideEndpoint = get(override) && get(endpoint);
    return overrideEndpoint || ((_a = settings === null || settings === void 0 ? void 0 : settings.codec) === null || _a === void 0 ? void 0 : _a.endpoint) || get(endpoint) || '';
};
export const getCodecPassAccessToken = (settings, passToken = passAccessToken, endpoint = codecEndpoint, override = overrideRemoteCodecConfiguration) => {
    var _a, _b;
    const overrideEndpoint = get(override) && get(endpoint);
    const nonOverrideOption = ((_a = settings === null || settings === void 0 ? void 0 : settings.codec) === null || _a === void 0 ? void 0 : _a.endpoint)
        ? !!((_b = settings === null || settings === void 0 ? void 0 : settings.codec) === null || _b === void 0 ? void 0 : _b.passAccessToken)
        : !!get(passToken);
    return overrideEndpoint ? !!get(passToken) : nonOverrideOption;
};
export const getCodecIncludeCredentials = (settings, includeCreds = includeCredentials, endpoint = codecEndpoint, override = overrideRemoteCodecConfiguration) => {
    var _a, _b;
    const overrideEndpoint = get(override) && get(endpoint);
    const nonOverrideOption = ((_a = settings === null || settings === void 0 ? void 0 : settings.codec) === null || _a === void 0 ? void 0 : _a.endpoint)
        ? !!((_b = settings === null || settings === void 0 ? void 0 : settings.codec) === null || _b === void 0 ? void 0 : _b.includeCredentials)
        : !!get(includeCreds);
    return overrideEndpoint ? !!get(includeCreds) : nonOverrideOption;
};
