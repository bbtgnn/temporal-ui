import { derived } from 'svelte/store';
import { page } from '$app/stores';
import { authUser } from './auth-user';
import { lastDataConverterStatus } from './data-converter-config';
import { codecEndpoint, lastDataEncoderStatus, overrideRemoteCodecConfiguration, } from './data-encoder-config';
export const dataEncoder = derived([
    page,
    codecEndpoint,
    overrideRemoteCodecConfiguration,
    lastDataEncoderStatus,
    lastDataConverterStatus,
    authUser,
], ([$page, $codecEndpoint, $overrideRemoteCodecConfiguration, $lastDataEncoderStatus, $lastDataConverterStatus, $authUser,]) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const namespace = $page.params.namespace;
    const settingsEndpoint = (_c = (_b = (_a = $page === null || $page === void 0 ? void 0 : $page.data) === null || _a === void 0 ? void 0 : _a.settings) === null || _b === void 0 ? void 0 : _b.codec) === null || _c === void 0 ? void 0 : _c.endpoint;
    const settingsPassAccessToken = Boolean((_f = (_e = (_d = $page === null || $page === void 0 ? void 0 : $page.data) === null || _d === void 0 ? void 0 : _d.settings) === null || _e === void 0 ? void 0 : _e.codec) === null || _f === void 0 ? void 0 : _f.passAccessToken);
    const settingsIncludeCredentials = Boolean((_j = (_h = (_g = $page === null || $page === void 0 ? void 0 : $page.data) === null || _g === void 0 ? void 0 : _g.settings) === null || _h === void 0 ? void 0 : _h.codec) === null || _j === void 0 ? void 0 : _j.includeCredentials);
    const endpoint = $overrideRemoteCodecConfiguration
        ? $codecEndpoint
        : settingsEndpoint || $codecEndpoint;
    const accessToken = $authUser === null || $authUser === void 0 ? void 0 : $authUser.accessToken;
    const hasNotRequested = endpoint
        ? $lastDataEncoderStatus === 'notRequested'
        : $lastDataConverterStatus === 'notRequested';
    const hasError = endpoint
        ? $lastDataEncoderStatus === 'error'
        : $lastDataConverterStatus === 'error';
    const hasSuccess = endpoint
        ? $lastDataEncoderStatus === 'success'
        : $lastDataConverterStatus === 'success';
    return {
        namespace,
        settingsEndpoint,
        settingsPassAccessToken,
        settingsIncludeCredentials,
        endpoint,
        accessToken,
        hasNotRequested,
        hasError,
        hasSuccess,
    };
});
