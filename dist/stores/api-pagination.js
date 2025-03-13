import { derived, writable } from 'svelte/store';
import { page } from '$app/stores';
import { defaultItemsPerPage, options, perPageFromSearchParameter, perPageKey, } from './pagination';
const defaultStore = {
    key: perPageKey,
    loading: true,
    updating: false,
    hasNext: false,
    hasPrevious: false,
    index: 0,
    previousPageSize: defaultItemsPerPage,
    pageSize: defaultItemsPerPage,
    indexData: {},
    visibleItems: [],
    hasNextIndexData: false,
    indexStart: 0,
    indexEnd: 0,
    activeIndex: 0,
};
const setFirstOption = (options) => {
    const defaultOption = options[0];
    if (!defaultOption)
        return defaultItemsPerPage;
    const optionAsInt = parseInt(defaultOption.toString());
    if (isNaN(optionAsInt))
        return defaultItemsPerPage;
    return optionAsInt;
};
export const getInitialPageSize = (options, defaultPageSize = undefined) => {
    if (defaultPageSize) {
        const optionAsInt = parseInt(defaultPageSize.toString());
        if (isNaN(optionAsInt))
            return setFirstOption(options);
        return optionAsInt;
    }
    else {
        return setFirstOption(options);
    }
};
export function createPaginationStore(pageSizeOptions = options, defaultPageSize = undefined) {
    const initialPageSize = getInitialPageSize(pageSizeOptions, defaultPageSize);
    const paginationStore = writable({
        ...defaultStore,
        previousPageSize: initialPageSize,
        pageSize: initialPageSize,
    });
    const { set, update } = paginationStore;
    const pageSize = derived([page], ([$page]) => {
        const perPage = $page.url.searchParams.get(perPageKey);
        return perPage ? perPageFromSearchParameter(perPage) : undefined;
    });
    const { subscribe } = derived([paginationStore, pageSize], ([$pagination, $pageSize]) => {
        var _a, _b, _c, _d, _e, _f;
        const visibleItems = (_b = (_a = $pagination.indexData[$pagination.index]) === null || _a === void 0 ? void 0 : _a.items) !== null && _b !== void 0 ? _b : [];
        const indexStart = (_d = (_c = $pagination.indexData[$pagination.index]) === null || _c === void 0 ? void 0 : _c.start) !== null && _d !== void 0 ? _d : 0;
        const indexEnd = (_f = (_e = $pagination.indexData[$pagination.index]) === null || _e === void 0 ? void 0 : _e.end) !== null && _f !== void 0 ? _f : 0;
        const hasNextIndexData = Boolean($pagination.indexData[$pagination.index + 1]);
        return {
            ...$pagination,
            visibleItems,
            indexStart,
            indexEnd,
            hasNextIndexData,
            pageSize: $pageSize !== null && $pageSize !== void 0 ? $pageSize : $pagination.pageSize,
        };
    });
    const setNextPageWithItems = (nextToken, items, _store) => {
        const currentIndex = _store.index;
        const store = {
            ..._store,
            indexData: { ..._store.indexData },
            hasNext: Boolean(nextToken),
            updating: false,
            loading: false,
        };
        if (!items.length)
            return { ...store, hasNext: false };
        if (!store.indexData[currentIndex]) {
            store.indexData[currentIndex] = {
                nextToken,
                start: 1,
                end: items.length,
                items,
            };
            store.hasPrevious = false;
        }
        else {
            (store.index = currentIndex + 1),
                (store.indexData[store.index] = {
                    nextToken,
                    start: store.indexData[currentIndex].end + 1,
                    end: store.indexData[currentIndex].end + items.length,
                    items,
                });
            store.hasPrevious = true;
        }
        return store;
    };
    const setNextPage = (_store) => {
        var _a;
        const store = {
            ..._store,
            index: _store.index + 1,
            hasPrevious: true,
            loading: false,
            updating: false,
        };
        if (!((_a = store.indexData[store.index]) === null || _a === void 0 ? void 0 : _a.nextToken)) {
            store.hasNext = false;
        }
        return store;
    };
    const setPreviousPage = (_store) => {
        const store = {
            ..._store,
            hasNext: true,
            updating: false,
            loading: false,
            index: _store.index > 0 ? _store.index - 1 : 0,
        };
        if (store.index === 0) {
            store.hasPrevious = false;
        }
        return store;
    };
    const setNextRow = (_store) => {
        var _a, _b, _c;
        const store = { ..._store };
        const indexLength = (_c = (_b = (_a = store.indexData[store.index]) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0;
        if (store.activeIndex < indexLength - 1) {
            store.activeIndex = store.activeIndex + 1;
        }
        return store;
    };
    const setPreviousRow = (_store) => {
        const store = { ..._store };
        const activeIndex = store.activeIndex >= 1 ? store.activeIndex - 1 : 0;
        store.activeIndex = activeIndex;
        return store;
    };
    const setActiveIndex = (_store, activeIndex) => {
        return { ..._store, activeIndex };
    };
    const resetPageSize = (_store, pageSize) => {
        return {
            ..._store,
            pageSize,
            previousPageSize: pageSize,
            index: 0,
            indexData: {},
            loading: true,
            updating: false,
        };
    };
    return {
        subscribe,
        nextPageWithItems: (token, items) => update((store) => setNextPageWithItems(token, items, store)),
        nextPage: () => update((store) => setNextPage(store)),
        previousPage: () => update((store) => setPreviousPage(store)),
        setUpdating: () => update((store) => ({ ...store, updating: true })),
        reset: () => set(defaultStore),
        resetPageSize: (pageSize) => update((store) => resetPageSize(store, pageSize)),
        nextRow: () => update((store) => setNextRow(store)),
        previousRow: () => update((store) => setPreviousRow(store)),
        setActiveIndex: (activeIndex) => update((store) => setActiveIndex(store, activeIndex)),
    };
}
