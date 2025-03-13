import { isObject } from './is';
export const has = (target, ...properties) => {
    if (!hasAnyProperties(target))
        return false;
    for (const property of properties) {
        if (!Object.prototype.hasOwnProperty.call(target, property))
            return false;
    }
    return true;
};
export const hasAnyProperties = (obj) => {
    if (!isObject(obj))
        return false;
    return !!Object.getOwnPropertyNames(obj).length;
};
