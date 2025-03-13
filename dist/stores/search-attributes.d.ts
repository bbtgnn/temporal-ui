/// <reference types="svelte" />
import { type Readable } from 'svelte/store';
import type { SEARCH_ATTRIBUTE_TYPE, SearchAttributes, SearchAttributeType, WorkflowExecution } from '../types/workflows';
type SearchAttributesStore = {
    customAttributes: SearchAttributes;
    systemAttributes: SearchAttributes;
};
export declare const allSearchAttributes: import("svelte/store").Writable<SearchAttributesStore>;
export declare const searchAttributes: Readable<SearchAttributes>;
export declare const internalSearchAttributes: Readable<SearchAttributes>;
export declare const customSearchAttributes: Readable<SearchAttributes>;
export declare const customSearchAttributeOptions: Readable<{
    label: string;
    value: string;
    type: SearchAttributeType;
}[]>;
export declare const isCustomSearchAttribute: (key: string) => boolean;
export declare const workflowIncludesSearchAttribute: (workflow: WorkflowExecution, searchAttribute: string) => boolean;
export type SearchAttributeOption = {
    label: string;
    value: string;
    type: SearchAttributeType;
};
type BaseSearchAttributeInput = {
    label: string;
};
type BoolSearchAttributeInput = BaseSearchAttributeInput & {
    value: boolean;
    type: typeof SEARCH_ATTRIBUTE_TYPE.BOOL;
};
type NumberSearchAttributeInput = BaseSearchAttributeInput & {
    value: number;
    type: typeof SEARCH_ATTRIBUTE_TYPE.INT | typeof SEARCH_ATTRIBUTE_TYPE.DOUBLE;
};
type StringSearchAttributeInput = BaseSearchAttributeInput & {
    value: string;
    type: typeof SEARCH_ATTRIBUTE_TYPE.TEXT | typeof SEARCH_ATTRIBUTE_TYPE.KEYWORD | typeof SEARCH_ATTRIBUTE_TYPE.DATETIME;
};
type ListSearchAttributeInput = BaseSearchAttributeInput & {
    value: string[];
    type: typeof SEARCH_ATTRIBUTE_TYPE.KEYWORDLIST;
};
export type SearchAttributeInput = {
    label: null;
    value: null;
    type: typeof SEARCH_ATTRIBUTE_TYPE.UNSPECIFIED;
} | BoolSearchAttributeInput | NumberSearchAttributeInput | StringSearchAttributeInput | ListSearchAttributeInput;
export declare const searchAttributeOptions: Readable<SearchAttributeOption[]>;
export declare const sortedSearchAttributeOptions: Readable<SearchAttributeOption[]>;
export {};
