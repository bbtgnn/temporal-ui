export const fromScreamingEnum = (potentialScreamingEnum, prefix) => {
    if (!potentialScreamingEnum)
        return potentialScreamingEnum;
    const stringEnum = String(potentialScreamingEnum);
    const split = stringEnum.split('_');
    if (!split || split.length <= 1)
        return potentialScreamingEnum;
    const formatted = split
        .map((word) => {
        return word.charAt(0) + word.substring(1).toLowerCase();
    })
        .join('');
    return formatted.replace(prefix, '');
};
export const toSearchAttributeTypeReadable = (status) => {
    return fromScreamingEnum(status, 'IndexedValueType');
};
export const toWorkflowStatusReadable = (status) => {
    return fromScreamingEnum(status, 'WorkflowExecutionStatus');
};
export const toNamespaceArchivalStateReadable = (status) => {
    return fromScreamingEnum(status, 'ArchivalState');
};
export const toNamespaceStateReadable = (status) => {
    return fromScreamingEnum(status, 'NamespaceState');
};
export const toEventNameReadable = (status) => {
    return fromScreamingEnum(status, 'EventType');
};
export const toBatchOperationStateReadable = (status) => {
    return fromScreamingEnum(status, 'BatchOperationState');
};
export const toBatchOperationTypeReadable = (status) => {
    return fromScreamingEnum(status, 'BatchOperationType');
};
export const toWorkflowTaskFailureReadable = (cause) => {
    if (!cause)
        return 'Unspecified';
    return fromScreamingEnum(cause, 'WorkflowTaskFailedCause');
};
export const toPendingNexusOperationStateReadable = (state) => {
    if (!state)
        return state;
    return fromScreamingEnum(state, 'PendingNexusOperationState');
};
export const toCallbackStateReadable = (state) => {
    if (!state)
        return state;
    return fromScreamingEnum(state, 'CallbackState');
};
