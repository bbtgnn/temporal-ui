import type { DescribeNamespaceResponse } from '../types';
type GetNamespaceParameters = {
    namespace?: string;
    defaultNamespace: string;
    namespaces: DescribeNamespaceResponse[];
};
export declare const getNamespace: ({ namespace, defaultNamespace, namespaces, }: GetNamespaceParameters) => string | undefined;
export {};
