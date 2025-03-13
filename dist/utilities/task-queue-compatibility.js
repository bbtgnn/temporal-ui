export const getOrderedVersionSets = (compatibility) => {
    const sets = (compatibility === null || compatibility === void 0 ? void 0 : compatibility.majorVersionSets)
        ? [...compatibility.majorVersionSets]
        : [];
    return sets.reverse();
};
export const getDefaultVersionForSet = (buildIds) => {
    if (!buildIds || !buildIds.length)
        return undefined;
    return buildIds[buildIds.length - 1];
};
export const getDefaultVersionForSetFromABuildId = (compatibility, buildId) => {
    var _a;
    const buildIdSet = (_a = compatibility === null || compatibility === void 0 ? void 0 : compatibility.majorVersionSets) === null || _a === void 0 ? void 0 : _a.find((set) => { var _a; return (_a = set.buildIds) === null || _a === void 0 ? void 0 : _a.includes(buildId); });
    return getDefaultVersionForSet(buildIdSet === null || buildIdSet === void 0 ? void 0 : buildIdSet.buildIds);
};
export const getNonDefaultVersionsForSet = (buildIds) => {
    if (!buildIds)
        return [];
    return buildIds.slice(0, buildIds.length - 1).reverse();
};
export const getCurrentCompatibilityDefaultVersion = (compatibility) => {
    var _a;
    const orderedSets = getOrderedVersionSets(compatibility);
    if (!orderedSets.length)
        return undefined;
    const defaultVersionBuildIds = (_a = orderedSets[0]) === null || _a === void 0 ? void 0 : _a.buildIds;
    if (!(defaultVersionBuildIds === null || defaultVersionBuildIds === void 0 ? void 0 : defaultVersionBuildIds.length))
        return undefined;
    return getDefaultVersionForSet(orderedSets[0].buildIds);
};
export const getCurrentWorkflowBuildId = (workflow) => {
    var _a, _b;
    if (workflow === null || workflow === void 0 ? void 0 : workflow.assignedBuildId)
        return workflow.assignedBuildId;
    if ((_a = workflow === null || workflow === void 0 ? void 0 : workflow.mostRecentWorkerVersionStamp) === null || _a === void 0 ? void 0 : _a.useVersioning) {
        return ((_b = workflow.mostRecentWorkerVersionStamp) === null || _b === void 0 ? void 0 : _b.buildId) || undefined;
    }
    return undefined;
};
export const getCurrentPollerBuildId = (poller) => {
    var _a, _b;
    if ((_a = poller === null || poller === void 0 ? void 0 : poller.workerVersionCapabilities) === null || _a === void 0 ? void 0 : _a.useVersioning) {
        return ((_b = poller.workerVersionCapabilities) === null || _b === void 0 ? void 0 : _b.buildId) || undefined;
    }
    return undefined;
};
export const getUniqueBuildIdsFromPollers = (pollers) => {
    const buildIds = [
        ...new Set(pollers === null || pollers === void 0 ? void 0 : pollers.map(getCurrentPollerBuildId).filter(Boolean)),
    ];
    return buildIds;
};
export const pollerHasVersioning = (pollers) => {
    return pollers === null || pollers === void 0 ? void 0 : pollers.some((poller) => { var _a; return (_a = poller === null || poller === void 0 ? void 0 : poller.workerVersionCapabilities) === null || _a === void 0 ? void 0 : _a.useVersioning; });
};
export const workflowIsCompatibleWithWorkers = (workflow, pollers, compatibility) => {
    const workflowBuildId = getCurrentWorkflowBuildId(workflow);
    if (!workflowBuildId)
        return true;
    const defaultVersionForBuildId = getDefaultVersionForSetFromABuildId(compatibility, workflowBuildId);
    const buildIds = getUniqueBuildIdsFromPollers(pollers);
    return buildIds.includes(defaultVersionForBuildId);
};
