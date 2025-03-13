import type { DownloadEventHistorySetting } from '../stores/events';
import type { Settings } from '../types/global';
export declare const exportHistory: ({ namespace, workflowId, runId, settings, decodeSetting, }: {
    namespace: string;
    workflowId: string;
    runId: string;
    settings: Settings;
    decodeSetting: DownloadEventHistorySetting;
}) => Promise<void>;
