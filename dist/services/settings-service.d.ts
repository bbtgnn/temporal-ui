import type { Settings } from '../types/global';
export declare const isCloudMatch: RegExp;
export declare const fetchSettings: (request?: typeof fetch) => Promise<Settings>;
