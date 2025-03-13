import type { DescribeNamespaceResponse } from '../types';
import type { Settings } from '../types/global';
export declare function fetchNamespaces(settings: Settings, request?: typeof fetch): Promise<void>;
export declare function fetchNamespace(namespace: string, settings?: Settings, request?: typeof fetch): Promise<DescribeNamespaceResponse>;
