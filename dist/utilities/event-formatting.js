export const getDateFilterValue = ({ compact, sortOrder, showElapsed, }) => {
    const isDefaultSortOrder = compact || sortOrder === 'descending';
    const isNotElapsedTime = showElapsed === 'false';
    const allDefaults = isDefaultSortOrder && isNotElapsedTime;
    if (allDefaults) {
        return undefined;
    }
    return `${sortOrder}:${showElapsed}`;
};
