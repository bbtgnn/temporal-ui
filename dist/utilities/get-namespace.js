export const getNamespace = ({ namespace, defaultNamespace, namespaces, }) => {
    if (!namespace)
        return defaultNamespace;
    if (!(namespaces === null || namespaces === void 0 ? void 0 : namespaces.length))
        return defaultNamespace;
    if (namespaces.find((ns) => { var _a; return ((_a = ns === null || ns === void 0 ? void 0 : ns.namespaceInfo) === null || _a === void 0 ? void 0 : _a.name) === namespace; })) {
        return namespace;
    }
    return undefined;
};
