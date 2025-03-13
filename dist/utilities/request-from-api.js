import { BROWSER } from 'esm-env';
import { getAuthUser } from '../stores/auth-user';
import { handleError as handleRequestError } from './handle-error';
import { isFunction } from './is-function';
import { toURL } from './to-url';
export const isTemporalAPIError = (obj) => (obj === null || obj === void 0 ? void 0 : obj.message) !== undefined &&
    typeof (obj === null || obj === void 0 ? void 0 : obj.message) === 'string';
/**
 *  A utility method for making requests to the Temporal API.
 *
 * @param endpoint The path of the API endpoint you want to request data from.
 *
 * @param options.params Query (or search) parameters to be suffixed to the
 * path.
 * @param options.token Shorthand for a `nextPageToken` query parameter.
 * @param options.request A replacement for the native `fetch` function.
 *
 * @returns Promise with the response from the API parsed into an object.
 */
export const requestFromAPI = async (endpoint, init = {}) => {
    var _a;
    const { params = {}, request = fetch, token, notifyOnError = true, handleError = handleRequestError, onError, isBrowser = BROWSER, } = init;
    let { options } = init;
    let query = new URLSearchParams();
    if (params === null || params === void 0 ? void 0 : params.entries) {
        query = params;
        if (token)
            query.set('nextPageToken', token);
    }
    else {
        const nextPageToken = token ? { next_page_token: token } : {};
        query = new URLSearchParams({
            ...params,
            ...nextPageToken,
        });
    }
    const url = toURL(endpoint, query);
    try {
        options = withSecurityOptions(options, isBrowser);
        if (!endpoint.endsWith('api/v1/settings')) {
            options = await withAuth(options, isBrowser);
        }
        const response = await request(url, options);
        const body = await response.json();
        const { status, statusText } = response;
        if (!response.ok) {
            if (onError && isFunction(onError)) {
                onError({ status, statusText, body });
            }
            else {
                throw {
                    statusCode: response.status,
                    statusText: response.statusText,
                    response,
                    message: (_a = body === null || body === void 0 ? void 0 : body.message) !== null && _a !== void 0 ? _a : response.statusText,
                };
            }
        }
        return body;
    }
    catch (error) {
        if (notifyOnError) {
            handleError(error);
        }
        else {
            throw error;
        }
    }
};
const withSecurityOptions = (options, isBrowser = BROWSER) => {
    const opts = { credentials: 'include', ...options };
    opts.headers = withCsrf(options === null || options === void 0 ? void 0 : options.headers, isBrowser);
    return opts;
};
const withAuth = async (options, isBrowser = BROWSER) => {
    if (globalThis === null || globalThis === void 0 ? void 0 : globalThis.AccessToken) {
        options.headers = await withBearerToken(options === null || options === void 0 ? void 0 : options.headers, globalThis.AccessToken, isBrowser);
    }
    else if (getAuthUser().accessToken) {
        options.headers = await withBearerToken(options === null || options === void 0 ? void 0 : options.headers, async () => getAuthUser().accessToken, isBrowser);
        options.headers = withIdToken(options === null || options === void 0 ? void 0 : options.headers, getAuthUser().idToken, isBrowser);
    }
    return options;
};
const withBearerToken = async (headers, accessToken, isBrowser = BROWSER) => {
    // At this point in the code path, headers will always be set.
    /* c8 ignore next */
    if (!headers)
        headers = {};
    if (!isBrowser)
        return headers;
    try {
        const token = await accessToken();
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        /* c8 ignore next 4 */
    }
    catch (e) {
        console.error(e);
    }
    return headers;
};
const withIdToken = (headers = {}, idToken, isBrowser = BROWSER) => {
    if (!isBrowser)
        return headers;
    if (idToken) {
        headers['Authorization-Extras'] = idToken;
    }
    return headers;
};
const withCsrf = (headers, isBrowser = BROWSER) => {
    if (!headers)
        headers = {};
    headers['Caller-Type'] = 'operator';
    if (!isBrowser)
        return headers;
    const csrfCookie = '_csrf=';
    const csrfHeader = 'X-CSRF-TOKEN';
    try {
        const cookies = document.cookie.split(';');
        let csrf = cookies.find((c) => c.includes(csrfCookie));
        if (csrf && !headers[csrfHeader]) {
            csrf = csrf.trim().slice(csrfCookie.length);
            headers[csrfHeader] = csrf;
        }
        /* c8 ignore next 4 */
    }
    catch (error) {
        console.error(error);
    }
    return headers;
};
