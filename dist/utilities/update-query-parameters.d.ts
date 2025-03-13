import { goto as navigateTo } from '$app/navigation';
type UpdateQueryParams = {
    parameter: string;
    value?: string | number | boolean;
    url: URL;
    goto?: typeof navigateTo;
    allowEmpty?: boolean;
    clearParameters?: string[];
    options?: typeof gotoOptions;
};
export declare const gotoOptions: {
    keepFocus: boolean;
    noScroll: boolean;
    replaceState: boolean;
};
export declare const updateQueryParameters: ({ parameter, value, url, goto, allowEmpty, clearParameters, options, }: UpdateQueryParams) => Promise<string | number | boolean>;
export type QueryParameter = {
    parameter: string;
    value?: string | number | boolean;
};
type UpdateMultipleQueryParams = {
    parameters: QueryParameter[];
    url: URL;
    goto?: typeof navigateTo;
    clearParameters?: string[];
};
export declare const updateMultipleQueryParameters: ({ parameters, url, goto, clearParameters, }: UpdateMultipleQueryParams) => Promise<void>;
export {};
