import { derived, get, writable } from 'svelte/store';
import { page } from '$app/stores';
import { allEventTypeOptions } from '../models/event-history/get-event-categorization';
import { persistStore } from './persist-store';
export const query = derived([page], ([$page]) => $page.url.searchParams.get('query'));
export const showChildWorkflows = persistStore('showChildWorkflows', true, true);
export const hideChildWorkflows = persistStore('hideChildWorkflows', false, true);
const category = derived([page], ([$page]) => $page.url.searchParams.get('category'));
const classification = derived([page], ([$page]) => $page.url.searchParams.get('classification'));
const parameters = derived([query, category, classification], ([$query, $category, $classification]) => {
    return {
        query: $query,
        category: $category,
        classification: $classification,
    };
});
const updateWorkflowFilters = (set) => {
    return parameters.subscribe(({ query }) => {
        if (!query && get(workflowFilters).length) {
            // Clear filters if there is no query
            set([]);
        }
    });
};
export const searchInputViewOpen = persistStore('searchInputView', false, true);
export const workflowFilters = writable([], updateWorkflowFilters);
const updateScheduleFilters = (set) => {
    return parameters.subscribe(({ query }) => {
        if (!query && get(scheduleFilters).length) {
            // Clear filters if there is no query
            set([]);
        }
    });
};
export const scheduleFilters = writable([], updateScheduleFilters);
const updateEventCategoryFilter = (set) => {
    return parameters.subscribe(({ category }) => {
        if (!category && get(eventCategoryFilter)) {
            // Clear filter if there is no category
            set(null);
        }
    });
};
export const eventCategoryFilter = writable(undefined, updateEventCategoryFilter);
const updateEventClassificationFilter = (set) => {
    return parameters.subscribe(({ classification }) => {
        if (!classification && get(eventClassificationFilter)) {
            // Clear filter if there is no category
            set(null);
        }
    });
};
export const eventClassificationFilter = writable(undefined, updateEventClassificationFilter);
const defaultOptions = allEventTypeOptions.map(({ value }) => value);
export const eventTypeFilter = writable(defaultOptions);
export const eventStatusFilter = writable(false);
