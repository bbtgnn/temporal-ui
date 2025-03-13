export const validateHttps = (endpoint) => {
    return (endpoint === null || endpoint === void 0 ? void 0 : endpoint.substring(0, 8)) === 'https://';
};
export const validateHttp = (endpoint) => {
    return (endpoint === null || endpoint === void 0 ? void 0 : endpoint.substring(0, 7)) === 'http://';
};
export const validateHttpOrHttps = (endpoint) => {
    return validateHttp(endpoint) || validateHttps(endpoint);
};
