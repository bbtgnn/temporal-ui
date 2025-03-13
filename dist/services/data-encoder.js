import { get } from 'svelte/store';
import { page } from '$app/stores';
import { translate } from '../i18n/translate';
import { authUser } from '../stores/auth-user';
import { setLastDataEncoderFailure, setLastDataEncoderSuccess, } from '../stores/data-encoder-config';
import { getCodecEndpoint, getCodecIncludeCredentials, getCodecPassAccessToken, } from '../utilities/get-codec';
import { validateHttps } from '../utilities/is-http';
import { stringifyWithBigInt } from '../utilities/parse-with-big-int';
export async function codeServerRequest({ type, payloads, namespace = get(page).params.namespace, settings = get(page).data.settings, }) {
    const endpoint = getCodecEndpoint(settings);
    const passAccessToken = getCodecPassAccessToken(settings);
    const includeCredentials = getCodecIncludeCredentials(settings);
    const headers = {
        'Content-Type': 'application/json',
        'X-Namespace': namespace,
    };
    if (passAccessToken) {
        if (validateHttps(endpoint)) {
            let accessToken = get(authUser).accessToken;
            const accessTokenExtras = get(authUser).idToken;
            if (globalThis === null || globalThis === void 0 ? void 0 : globalThis.AccessToken) {
                accessToken = await (globalThis === null || globalThis === void 0 ? void 0 : globalThis.AccessToken());
            }
            else if (accessTokenExtras) {
                headers['Authorization-Extras'] = accessTokenExtras;
            }
            headers['Authorization'] = `Bearer ${accessToken}`;
        }
        else {
            setLastDataEncoderFailure();
            return payloads;
        }
    }
    const requestOptions = includeCredentials
        ? {
            headers,
            credentials: 'include',
            method: 'POST',
            body: stringifyWithBigInt(payloads),
        }
        : {
            headers,
            method: 'POST',
            body: stringifyWithBigInt(payloads),
        };
    const decoderResponse = fetch(endpoint + `/${type}`, requestOptions)
        .then((response) => {
        if (response.ok === false) {
            throw {
                statusCode: response.status,
                statusText: response.statusText,
                response,
                message: translate(`common.${type}-failed`),
            };
        }
        else {
            return response.json();
        }
    })
        .then((response) => {
        setLastDataEncoderSuccess();
        return response;
    })
        .catch((err) => {
        setLastDataEncoderFailure(err);
        if (type === 'decode') {
            return payloads;
        }
        else {
            throw err;
        }
    });
    return decoderResponse;
}
export async function decodePayloadsWithCodec({ payloads, namespace = get(page).params.namespace, settings = get(page).data.settings, }) {
    return codeServerRequest({ type: 'decode', payloads, namespace, settings });
}
export async function encodePayloadsWithCodec({ payloads, namespace = get(page).params.namespace, settings = get(page).data.settings, }) {
    return codeServerRequest({ type: 'encode', payloads, namespace, settings });
}
