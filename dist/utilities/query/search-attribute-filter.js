import { get } from 'svelte/store';
import { searchAttributes } from '../../stores/search-attributes';
import { SEARCH_ATTRIBUTE_TYPE } from '../../types/workflows';
export function isStatusFilter({ attribute }) {
    return attribute === 'ExecutionStatus';
}
export function isTextFilter(filter, attributes = searchAttributes) {
    const { attribute, type } = filter;
    if (isStatusFilter(filter))
        return false;
    if (type === SEARCH_ATTRIBUTE_TYPE.KEYWORD)
        return true;
    const searchAttributeType = get(attributes)[attribute];
    return [
        SEARCH_ATTRIBUTE_TYPE.KEYWORD,
        SEARCH_ATTRIBUTE_TYPE.TEXT,
        'String',
    ].includes(searchAttributeType);
}
export function isListFilter({ attribute, type }, attributes = searchAttributes) {
    if (type === SEARCH_ATTRIBUTE_TYPE.KEYWORDLIST)
        return true;
    const searchAttributeType = get(attributes)[attribute];
    return searchAttributeType === SEARCH_ATTRIBUTE_TYPE.KEYWORDLIST;
}
export function isNumberFilter({ attribute, type }, attributes = searchAttributes) {
    if (type === SEARCH_ATTRIBUTE_TYPE.INT)
        return true;
    const searchAttributeType = get(attributes)[attribute];
    return (searchAttributeType === SEARCH_ATTRIBUTE_TYPE.INT ||
        searchAttributeType === SEARCH_ATTRIBUTE_TYPE.DOUBLE);
}
export function isDurationFilter({ attribute }) {
    return ['ExecutionDuration'].includes(attribute);
}
export function isDateTimeFilter({ attribute, type }, attributes = searchAttributes) {
    if (type === SEARCH_ATTRIBUTE_TYPE.DATETIME)
        return true;
    const searchAttributeType = get(attributes)[attribute];
    return searchAttributeType === SEARCH_ATTRIBUTE_TYPE.DATETIME;
}
export function isBooleanFilter({ attribute, type }, attributes = searchAttributes) {
    if (type === SEARCH_ATTRIBUTE_TYPE.BOOL)
        return true;
    const searchAttributeType = get(attributes)[attribute];
    return searchAttributeType === SEARCH_ATTRIBUTE_TYPE.BOOL;
}
export function getFocusedElementId(filter) {
    if (isStatusFilter(filter))
        return 'status-filter';
    if (isTextFilter(filter) ||
        isNumberFilter(filter) ||
        isDateTimeFilter(filter))
        return 'conditional-menu-button';
    if (isListFilter(filter))
        return 'list-filter';
    if (isBooleanFilter(filter))
        return 'boolean-filter';
    return '';
}
export function formatListFilterValue(value) {
    if (value.startsWith('(') && value.endsWith(')')) {
        return value
            .slice(1, -1)
            .split(',')
            .map((v) => v.trim().slice(1, -1));
    }
    if (value)
        return [value];
    return [];
}
