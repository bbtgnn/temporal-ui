import { derived, get, writable } from 'svelte/store';
export const allSearchAttributes = writable({
    customAttributes: {},
    systemAttributes: {},
});
export const searchAttributes = derived([allSearchAttributes], ([$allSearchAttributes]) => ({
    ...$allSearchAttributes.customAttributes,
    ...$allSearchAttributes.systemAttributes,
}));
export const internalSearchAttributes = derived([allSearchAttributes], ([$allSearchAttributes]) => $allSearchAttributes.systemAttributes);
export const customSearchAttributes = derived([allSearchAttributes], ([$allSearchAttributes]) => $allSearchAttributes.customAttributes);
export const customSearchAttributeOptions = derived([customSearchAttributes], ([$customSearchAttributes]) => Object.entries($customSearchAttributes).map(([key, value]) => ({
    label: key,
    value: key,
    type: value,
})));
export const isCustomSearchAttribute = (key) => {
    const customSearchAttrs = get(customSearchAttributes);
    return key in customSearchAttrs;
};
export const workflowIncludesSearchAttribute = (workflow, searchAttribute) => {
    var _a, _b;
    return searchAttribute in ((_b = (_a = workflow === null || workflow === void 0 ? void 0 : workflow.searchAttributes) === null || _a === void 0 ? void 0 : _a.indexedFields) !== null && _b !== void 0 ? _b : {});
};
export const searchAttributeOptions = derived([searchAttributes], ([$searchAttributes]) => {
    return $searchAttributes
        ? Object.entries($searchAttributes).map(([key, value]) => {
            return {
                label: key,
                value: key,
                type: value,
            };
        })
        : [];
});
export const sortedSearchAttributeOptions = derived([searchAttributeOptions], ([$searchAttributeOptions]) => {
    const popularOptions = [
        'ExecutionStatus',
        'WorkflowId',
        'WorkflowType',
        'RunId',
        'StartTime',
        'CloseTime',
    ];
    return $searchAttributeOptions
        .sort((a, b) => {
        if (a.label < b.label)
            return -1;
        if (a.label > b.label)
            return 1;
        return 0;
    })
        .sort((a, b) => {
        const indexA = popularOptions.indexOf(a.value);
        const indexB = popularOptions.indexOf(b.value);
        if (indexA < 0)
            return 1;
        if (indexB < 0)
            return -1;
        return indexA - indexB;
    });
});
