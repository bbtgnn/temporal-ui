import { BROWSER } from 'esm-env';
import { parseWithBigInt, stringifyWithBigInt } from './parse-with-big-int';
function createAtobStringForUnicode(str) {
    return window
        .atob(str)
        .split('')
        .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    })
        .join('');
}
export function base64DecodeUnicode(str) {
    return decodeURIComponent(createAtobStringForUnicode(str));
}
function base64DecodeUnicodeFallback(str) {
    try {
        return stringifyWithBigInt(parseWithBigInt(window.atob(str)));
    }
    catch (e) {
        return str;
    }
}
export const atob = (str, isBrowser = BROWSER) => {
    if (!isBrowser)
        return str;
    try {
        return base64DecodeUnicode(str);
    }
    catch (e) {
        return base64DecodeUnicodeFallback(str);
    }
};
