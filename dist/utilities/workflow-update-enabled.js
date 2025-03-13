export const workflowUpdateEnabled = (settings, coreUser, namespace) => {
    return (!settings.disableWriteActions &&
        !settings.workflowUpdateDisabled &&
        !coreUser.namespaceWriteDisabled(namespace));
};
