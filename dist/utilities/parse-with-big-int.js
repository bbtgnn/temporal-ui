import JSONbig from 'json-bigint';
const JSONBigNative = JSONbig({
    useNativeBigInt: true,
    constructorAction: 'preserve',
});
export const parseWithBigInt = (content) => {
    try {
        return JSONBigNative.parse(content);
    }
    catch (e) {
        return JSON.parse(content);
    }
};
export const stringifyWithBigInt = (value, replacer, space) => JSONBigNative.stringify(value, replacer, space);
