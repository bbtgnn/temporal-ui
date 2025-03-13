import type { DeploymentParameters, DeploymentVersionParameters, WorkerDeploymentResponse, WorkerDeploymentSummary, WorkerDeploymentVersionResponse } from '../types/deployments';
import type { ErrorCallback } from '../utilities/request-from-api';
type PaginatedDeploymentsPromise = (pageSize: number, token: string) => Promise<{
    items: WorkerDeploymentSummary[];
    nextPageToken: string;
}>;
export declare const fetchPaginatedDeployments: (namespace: string, query: string, onError: ErrorCallback, request?: typeof fetch) => Promise<PaginatedDeploymentsPromise>;
export declare const fetchDeployment: (parameters: DeploymentParameters, request?: typeof fetch) => Promise<WorkerDeploymentResponse>;
export declare const fetchDeploymentVersion: (parameters: DeploymentVersionParameters, request?: typeof fetch) => Promise<WorkerDeploymentVersionResponse>;
export {};
