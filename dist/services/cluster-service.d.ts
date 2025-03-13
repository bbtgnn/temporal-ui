import type { GetClusterInfoResponse, GetSystemInfoResponse } from '../types';
import type { Settings } from '../types/global';
export declare const fetchCluster: (settings: Settings, request?: typeof fetch) => Promise<GetClusterInfoResponse>;
export declare const fetchSystemInfo: (settings: Settings, request?: typeof fetch) => Promise<GetSystemInfoResponse>;
