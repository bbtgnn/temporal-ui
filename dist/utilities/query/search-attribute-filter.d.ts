/// <reference types="svelte" />
import type { SearchAttributeFilter } from '../../models/search-attribute-filters';
export declare function isStatusFilter({ attribute }: SearchAttributeFilter): boolean;
export declare function isTextFilter(filter: SearchAttributeFilter, attributes?: import("svelte/store").Readable<import("../../types/workflows").SearchAttributes>): boolean;
export declare function isListFilter({ attribute, type }: SearchAttributeFilter, attributes?: import("svelte/store").Readable<import("../../types/workflows").SearchAttributes>): boolean;
export declare function isNumberFilter({ attribute, type }: SearchAttributeFilter, attributes?: import("svelte/store").Readable<import("../../types/workflows").SearchAttributes>): boolean;
export declare function isDurationFilter({ attribute }: SearchAttributeFilter): boolean;
export declare function isDateTimeFilter({ attribute, type }: SearchAttributeFilter, attributes?: import("svelte/store").Readable<import("../../types/workflows").SearchAttributes>): boolean;
export declare function isBooleanFilter({ attribute, type }: SearchAttributeFilter, attributes?: import("svelte/store").Readable<import("../../types/workflows").SearchAttributes>): boolean;
export declare function getFocusedElementId(filter: SearchAttributeFilter): "" | "status-filter" | "conditional-menu-button" | "list-filter" | "boolean-filter";
export declare function formatListFilterValue(value: string): string[];
