import type { PendingActivity, PendingActivityWithMetadata } from '../../types/events';
import type { Settings } from '../../types/global';
import type { WorkflowExecution } from '../../types/workflows';
import { type DecodeFunctions } from '../../utilities/decode-payload';
export declare function getActivityAttributes({ activity, namespace, settings, accessToken }: PendingActivityWithMetadata, { convertWithCodec, decodeAttributes, }?: DecodeFunctions): Promise<PendingActivity>;
export declare const toDecodedPendingActivities: (workflow: WorkflowExecution, namespace?: string, settings?: Settings, accessToken?: string) => Promise<PendingActivity[]>;
