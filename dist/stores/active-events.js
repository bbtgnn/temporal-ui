import { get, writable } from 'svelte/store';
export const indexPageSize = 200;
export const startIndex = writable(0);
export const endIndex = writable(indexPageSize);
export const activeGroups = writable([]);
export const activeGroupHeight = writable(0);
export const clearActives = () => {
    activeGroups.set([]);
    activeGroupHeight.set(0);
    startIndex.set(0);
    endIndex.set(indexPageSize);
};
export const clearActiveGroups = () => {
    activeGroups.set([]);
    activeGroupHeight.set(0);
};
export const setActiveGroup = (group) => {
    if (!get(activeGroups).includes(group.id)) {
        activeGroups.set([group.id]);
    }
    else {
        activeGroupHeight.set(0);
        activeGroups.set([]);
    }
};
