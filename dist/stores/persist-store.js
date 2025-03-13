import { writable } from 'svelte/store';
import { BROWSER } from 'esm-env';
import { isFunction } from '../utilities/is-function';
import { parseWithBigInt, stringifyWithBigInt, } from '../utilities/parse-with-big-int';
export function persistStore(name, initialValue = null, broadcastToAll = false) {
    var _a, _b, _c;
    let initialStoreValue = isFunction(initialValue)
        ? initialValue()
        : initialValue;
    let broadcaster;
    if (BROWSER) {
        try {
            if ((_a = window === null || window === void 0 ? void 0 : window.localStorage) === null || _a === void 0 ? void 0 : _a.getItem(name)) {
                initialStoreValue = parseWithBigInt((_c = (_b = window === null || window === void 0 ? void 0 : window.localStorage) === null || _b === void 0 ? void 0 : _b.getItem(name)) !== null && _c !== void 0 ? _c : '');
            }
        }
        catch (_err) {
            initialStoreValue = null;
        }
    }
    const { subscribe, set, update } = writable(initialStoreValue);
    if (BROWSER && broadcastToAll) {
        try {
            broadcaster = new BroadcastChannel(`persist-store-${name}`);
            broadcaster === null || broadcaster === void 0 ? void 0 : broadcaster.addEventListener('message', (event) => {
                set(event.data);
            });
        }
        catch (e) {
            console.error('Browser does not support BroadcastChannel');
        }
    }
    return {
        subscribe,
        set: (x) => {
            var _a, _b;
            if (BROWSER) {
                if (broadcaster)
                    broadcaster.postMessage(x);
                if (x === null) {
                    (_a = window === null || window === void 0 ? void 0 : window.localStorage) === null || _a === void 0 ? void 0 : _a.removeItem(name);
                }
                else {
                    (_b = window === null || window === void 0 ? void 0 : window.localStorage) === null || _b === void 0 ? void 0 : _b.setItem(name, stringifyWithBigInt(x));
                }
            }
            set(x);
        },
        update: (updater) => {
            var _a;
            if (BROWSER) {
                (_a = window === null || window === void 0 ? void 0 : window.localStorage) === null || _a === void 0 ? void 0 : _a.removeItem(name);
                update((previousValue) => {
                    var _a;
                    const updatedValue = updater(previousValue);
                    (_a = window === null || window === void 0 ? void 0 : window.localStorage) === null || _a === void 0 ? void 0 : _a.setItem(name, stringifyWithBigInt(updatedValue));
                    return updatedValue;
                });
            }
        },
    };
}
