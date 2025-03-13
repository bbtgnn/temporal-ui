export function encodeURIForSvelte(uri) {
    if (uri)
        return encodeURIComponent(uri);
    return uri;
}
export function decodeURIForSvelte(uri) {
    if (uri)
        return decodeURIComponent(uri);
    return uri;
}
