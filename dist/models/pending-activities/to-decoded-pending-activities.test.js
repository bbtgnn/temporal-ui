import { describe, expect, it } from 'vitest';
import { toDecodedPendingActivities } from './index';
import settingsFixture from '$fixtures/settings.json';
import pendingActivityWorkflow from '$fixtures/workflow.pending-activities.json';
const namespace = 'unit-tests';
const settings = settingsFixture;
const accessToken = 'access-token';
describe('toDecodedPendingActivities', () => {
    it('should decode heartbeatDetails', async () => {
        const workflow = pendingActivityWorkflow;
        const decodedHeartbeatDetails = await toDecodedPendingActivities(workflow, namespace, settings, accessToken);
        expect(decodedHeartbeatDetails[0].heartbeatDetails.payloads[0]).toBe(2);
        expect(decodedHeartbeatDetails[1].heartbeatDetails.payloads[0]).toBe(8);
    });
});
