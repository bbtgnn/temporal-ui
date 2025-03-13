import type { SearchAttributeFilter } from '../../models/search-attribute-filters';
import { type FilterParameters, type SearchAttributes } from '../../types/workflows';
export type ParsedParameters = FilterParameters & {
    timeRange?: string;
};
export declare const getLargestDurationUnit: (duration: Duration) => Duration;
export declare const emptyFilter: () => SearchAttributeFilter;
export declare const toListWorkflowFilters: (query: string, attributes?: SearchAttributes) => SearchAttributeFilter[];
export declare const combineDropdownFilters: (filters: SearchAttributeFilter[]) => SearchAttributeFilter[];
export declare const combineFilters: (filters: SearchAttributeFilter[]) => SearchAttributeFilter[];
export declare const updateQueryParamsFromFilter: (url: URL, filters: SearchAttributeFilter[], isDropdownFilter?: any) => void;
