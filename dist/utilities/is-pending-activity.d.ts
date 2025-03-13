import type { PendingActivity, PendingNexusOperation } from '../types/events';
export declare const isPendingActivity: (event: unknown) => event is PendingActivity;
export declare const isPendingNexusOperation: (event: unknown) => event is PendingNexusOperation;
