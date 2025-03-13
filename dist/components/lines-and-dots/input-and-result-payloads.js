import { parseWithBigInt } from '../../utilities/parse-with-big-int';
export const parseContent = (c) => {
    try {
        return parseWithBigInt(c);
    }
    catch {
        return undefined;
    }
};
export const parsePayloads = (c) => {
    try {
        const data = parseWithBigInt(c);
        return Array.isArray(data) ? parseWithBigInt(c) : [];
    }
    catch {
        return [];
    }
};
export const getPayloads = (value) => {
    try {
        const payloads = value === null || value === void 0 ? void 0 : value.payloads;
        return Array.isArray(payloads) ? payloads : [];
    }
    catch {
        return [];
    }
};
