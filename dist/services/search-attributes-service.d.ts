import type { SearchAttributesResponse } from '../types/workflows';
export declare const fetchSearchAttributesForNamespace: (namespace: string, request?: typeof fetch) => Promise<Omit<SearchAttributesResponse, 'storageSchema'>>;
