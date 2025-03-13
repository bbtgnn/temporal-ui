import type { NexusEndpoint } from '../types/nexus';
export declare const fetchNexusEndpoints: (search?: string, request?: typeof fetch) => Promise<NexusEndpoint[]>;
export declare const fetchNexusEndpoint: (id: string, request?: typeof fetch) => Promise<{
    endpoint: NexusEndpoint;
}>;
export declare const createNexusEndpoint: (body: Partial<NexusEndpoint>, request?: typeof fetch) => Promise<NexusEndpoint>;
export declare const updateNexusEndpoint: (id: string, body: Partial<NexusEndpoint>, request?: typeof fetch) => Promise<NexusEndpoint>;
export declare const deleteNexusEndpoint: (id: string, version: string, request?: typeof fetch) => Promise<NexusEndpoint>;
