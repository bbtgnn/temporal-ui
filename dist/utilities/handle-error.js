import { BROWSER } from 'esm-env';
import { networkError } from '../stores/error';
import { toaster } from '../stores/toaster';
import { has } from './has';
import { isNetworkError } from './is-network-error';
import { routeForLoginPage } from './route-for';
export const handleError = (error, toasts = toaster, errors = networkError, isBrowser = BROWSER) => {
    if (error instanceof DOMException && error.name === 'AbortError') {
        return;
    }
    if (typeof error === 'string') {
        toasts.push({ variant: 'error', message: error });
    }
    else {
        error.report = false;
    }
    if (error instanceof Error) {
        toasts.push({ variant: 'error', message: error.message });
    }
    if (isUnauthorized(error) && isBrowser) {
        window.location.assign(routeForLoginPage(error === null || error === void 0 ? void 0 : error.message));
    }
    if (isForbidden(error) && isBrowser) {
        window.location.assign(routeForLoginPage(error === null || error === void 0 ? void 0 : error.message));
    }
    if (isNetworkError(error)) {
        toasts.push({
            variant: 'error',
            message: `${error.statusCode} ${error.statusText}`,
        });
        // Re-throw error to prevent other code from attempting to render
        errors.set(error);
    }
    throw error;
};
export const handleUnauthorizedOrForbiddenError = (error, isBrowser = BROWSER) => {
    var _a;
    const msg = `${error === null || error === void 0 ? void 0 : error.status} ${(_a = error === null || error === void 0 ? void 0 : error.body) === null || _a === void 0 ? void 0 : _a.message}`;
    if (isUnauthorized(error) && isBrowser) {
        window.location.assign(routeForLoginPage(msg));
        return;
    }
    if (isForbidden(error) && isBrowser) {
        window.location.assign(routeForLoginPage(msg));
        return;
    }
};
export const isUnauthorized = (error) => {
    return hasStatusCode(error, 401);
};
export const isForbidden = (error) => {
    return hasStatusCode(error, 403);
};
const hasStatusCode = (error, statusCode) => {
    if (has(error, 'statusCode')) {
        return error.statusCode === statusCode;
    }
    if (has(error, 'status')) {
        return error.status === statusCode;
    }
    return false;
};
