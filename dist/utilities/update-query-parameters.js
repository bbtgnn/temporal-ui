import { BROWSER } from 'esm-env';
import { goto as navigateTo } from '$app/navigation';
export const gotoOptions = {
    keepFocus: true,
    noScroll: true,
    replaceState: false,
};
export const updateQueryParameters = async ({ parameter, value, url, goto = navigateTo, allowEmpty = false, clearParameters = [], options = gotoOptions, }) => {
    const next = String(value);
    const params = {};
    let replaced = false;
    url.searchParams.forEach((value, key) => {
        if (key !== parameter) {
            params[key] = value;
        }
        else {
            if (next) {
                params[key] = next;
                replaced = true;
            }
            else if (allowEmpty) {
                params[key] = '';
                replaced = true;
            }
        }
    });
    const newQuery = new URLSearchParams(params);
    if (value && !replaced) {
        newQuery.set(parameter, next);
    }
    else if (allowEmpty && !replaced) {
        newQuery.set(parameter, '');
    }
    if (clearParameters.length) {
        clearParameters.forEach((parameter) => {
            newQuery.delete(parameter);
        });
    }
    if (BROWSER) {
        const query = newQuery === null || newQuery === void 0 ? void 0 : newQuery.toString();
        const newUrl = query ? `${url.pathname}?${query}` : url.pathname;
        goto(newUrl, options);
    }
    return value;
};
export const updateMultipleQueryParameters = async ({ parameters, url, goto = navigateTo, clearParameters = [], }) => {
    const params = {};
    url.searchParams.forEach((value, key) => {
        if (!parameters.find(({ parameter }) => parameter === key)) {
            params[key] = value;
        }
    });
    const newQuery = new URLSearchParams(params);
    parameters.forEach(({ parameter, value }) => {
        if (value || value === false) {
            newQuery.set(parameter, String(value));
        }
    });
    if (clearParameters.length) {
        clearParameters.forEach((parameter) => {
            newQuery.delete(parameter);
        });
    }
    if (BROWSER) {
        const query = newQuery === null || newQuery === void 0 ? void 0 : newQuery.toString();
        const newUrl = query ? `${url.pathname}?${query}` : url.pathname;
        goto(newUrl, gotoOptions);
    }
};
