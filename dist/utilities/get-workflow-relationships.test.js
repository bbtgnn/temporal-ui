import { describe, expect, it } from 'vitest';
import { toWorkflowExecution } from '../models/workflow-execution';
import { decodePayload } from './decode-payload';
import { getWorkflowRelationships } from './get-workflow-relationships';
import childEvents from '$fixtures/events.children.json';
import completedEvents from '$fixtures/events.completed.json';
import continuedAsNewEvents from '$fixtures/events.continued-as-new.json';
import failedEvents from '$fixtures/events.failed.json';
import timedOutEvents from '$fixtures/events.timed-out.json';
import namespaces from '$fixtures/namespaces.json';
import completedWorkflow from '$fixtures/workflow.completed.json';
import continuedAsNewWorkflow from '$fixtures/workflow.continued-as-new.json';
import failedWorkflow from '$fixtures/workflow.failed.json';
import pendingChildrenWorkflow from '$fixtures/workflow.pending-children.json';
import runningWorkflow from '$fixtures/workflow.running.json';
import scheduledWorkflow from '$fixtures/workflow.scheduled.json';
import timedOutWorkflow from '$fixtures/workflow.timed-out.json';
describe('getWorkflowRelationships', () => {
    it('hasChildren should return true if there are pending children', () => {
        expect(getWorkflowRelationships(toWorkflowExecution(pendingChildrenWorkflow), completedEvents, namespaces.namespaces).hasChildren).toBe(true);
    });
    it('hasChildren should return true if there are pending children and non-pending children', () => {
        expect(getWorkflowRelationships(toWorkflowExecution(pendingChildrenWorkflow), childEvents, namespaces.namespaces).hasChildren).toBe(true);
        expect(getWorkflowRelationships(toWorkflowExecution(pendingChildrenWorkflow), childEvents, namespaces.namespaces).children.length).toBe(15);
    });
    it('parentNamespaceName should return undefined if parentNamespaceId does not match namespaces list', () => {
        expect(getWorkflowRelationships(toWorkflowExecution(pendingChildrenWorkflow), childEvents, namespaces.namespaces).parentNamespaceName).toBe(undefined);
    });
    it('hasChildren should return true if there are no pending children and non-pending children', () => {
        expect(getWorkflowRelationships(toWorkflowExecution(runningWorkflow), childEvents, namespaces.namespaces).hasChildren).toBe(true);
        expect(getWorkflowRelationships(toWorkflowExecution(runningWorkflow), childEvents, namespaces.namespaces).children.length).toBe(15);
    });
    it('hasRelationships should return false if there are is not a parent, pending children, first, previous, or next', () => {
        expect(getWorkflowRelationships(toWorkflowExecution(runningWorkflow), completedEvents, namespaces.namespaces).hasChildren).toBe(false);
    });
    it('parentNamespaceName should return namespace name if parentNamespaceId does match namespaces list', () => {
        expect(getWorkflowRelationships(toWorkflowExecution(runningWorkflow), completedEvents, namespaces.namespaces).parentNamespaceName).toBe('canary');
    });
    it('should return the firstExecutionRunId for first on a workflowExecutionStartedEvent', () => {
        var _a;
        const workflowExecutionStartedEvent = continuedAsNewEvents.find((event) => (event === null || event === void 0 ? void 0 : event.name) === 'WorkflowExecutionStarted');
        const firstExecutionRunId = (_a = workflowExecutionStartedEvent === null || workflowExecutionStartedEvent === void 0 ? void 0 : workflowExecutionStartedEvent.attributes) === null || _a === void 0 ? void 0 : _a.firstExecutionRunId;
        expect(getWorkflowRelationships(toWorkflowExecution(continuedAsNewWorkflow), continuedAsNewEvents, namespaces.namespaces).first).toBe(firstExecutionRunId);
    });
    it('should not return the firstExecutionRunId for first on a workflowExecutionStartedEvent if the id matches the runId', () => {
        var _a;
        const workflowExecutionStartedEvent = continuedAsNewEvents.find((event) => (event === null || event === void 0 ? void 0 : event.name) === 'WorkflowExecutionStarted');
        const firstExecutionRunId = (_a = workflowExecutionStartedEvent === null || workflowExecutionStartedEvent === void 0 ? void 0 : workflowExecutionStartedEvent.attributes) === null || _a === void 0 ? void 0 : _a.firstExecutionRunId;
        const continuedAsNewWorkflowCopy = JSON.parse(JSON.stringify(continuedAsNewWorkflow));
        expect(getWorkflowRelationships(toWorkflowExecution(continuedAsNewWorkflowCopy), continuedAsNewEvents, namespaces.namespaces).first).toBe(firstExecutionRunId);
        continuedAsNewWorkflowCopy.workflowExecutionInfo.execution.runId =
            firstExecutionRunId;
        expect(getWorkflowRelationships(toWorkflowExecution(continuedAsNewWorkflowCopy), continuedAsNewEvents, namespaces.namespaces).first).toBe(undefined);
    });
    it('should return the continuedExecutionRunId for previous on a WorkflowExecutionStarted event', () => {
        var _a;
        const workflowExecutionStartedEvent = continuedAsNewEvents.find((event) => (event === null || event === void 0 ? void 0 : event.name) === 'WorkflowExecutionStarted');
        const continuedExecutionRunId = (_a = workflowExecutionStartedEvent === null || workflowExecutionStartedEvent === void 0 ? void 0 : workflowExecutionStartedEvent.attributes) === null || _a === void 0 ? void 0 : _a.continuedExecutionRunId;
        expect(getWorkflowRelationships(toWorkflowExecution(continuedAsNewWorkflow), continuedAsNewEvents, namespaces.namespaces).previous).toBe(continuedExecutionRunId);
    });
    it('should return the newExecutionRunId for next on a WorkflowExecutionContinuedAsNew event', () => {
        var _a;
        const workflowExecutionContinuedAsNewEvent = continuedAsNewEvents.find((event) => (event === null || event === void 0 ? void 0 : event.name) === 'WorkflowExecutionContinuedAsNew');
        const newExecutionRunId = (_a = workflowExecutionContinuedAsNewEvent === null || workflowExecutionContinuedAsNewEvent === void 0 ? void 0 : workflowExecutionContinuedAsNewEvent.attributes) === null || _a === void 0 ? void 0 : _a.newExecutionRunId;
        expect(getWorkflowRelationships(toWorkflowExecution(continuedAsNewWorkflow), continuedAsNewEvents, namespaces.namespaces).next).toBe(newExecutionRunId);
    });
    it('should return the newExecutionRunId for next on a WorkflowExecutionCompleted event', () => {
        var _a;
        const workflowExecutionCompletedEvent = completedEvents.find((event) => (event === null || event === void 0 ? void 0 : event.name) === 'WorkflowExecutionCompleted');
        const newExecutionRunId = (_a = workflowExecutionCompletedEvent === null || workflowExecutionCompletedEvent === void 0 ? void 0 : workflowExecutionCompletedEvent.attributes) === null || _a === void 0 ? void 0 : _a.newExecutionRunId;
        expect(getWorkflowRelationships(toWorkflowExecution(completedWorkflow), completedEvents, namespaces.namespaces).next).toBe(newExecutionRunId);
    });
    it('should return the newExecutionRunId for next on a WorkflowExecutionTimedOut event', () => {
        var _a;
        const workflowExecutionCompletedEvent = timedOutEvents.find((event) => (event === null || event === void 0 ? void 0 : event.name) === 'WorkflowExecutionTimedOut');
        const newExecutionRunId = (_a = workflowExecutionCompletedEvent === null || workflowExecutionCompletedEvent === void 0 ? void 0 : workflowExecutionCompletedEvent.attributes) === null || _a === void 0 ? void 0 : _a.newExecutionRunId;
        expect(getWorkflowRelationships(toWorkflowExecution(timedOutWorkflow), timedOutEvents, namespaces.namespaces).next).toBe(newExecutionRunId);
    });
    it('should return the newExecutionRunId for next on a WorkflowExecutionFailed event', () => {
        var _a;
        const workflowExecutionCompletedEvent = failedEvents.find((event) => (event === null || event === void 0 ? void 0 : event.name) === 'WorkflowExecutionFailed');
        const newExecutionRunId = (_a = workflowExecutionCompletedEvent === null || workflowExecutionCompletedEvent === void 0 ? void 0 : workflowExecutionCompletedEvent.attributes) === null || _a === void 0 ? void 0 : _a.newExecutionRunId;
        expect(getWorkflowRelationships(toWorkflowExecution(failedWorkflow), failedEvents, namespaces.namespaces).next).toBe(newExecutionRunId);
    });
    it('should return the decoded scheduleID for a scheduled workflows', () => {
        var _a, _b, _c;
        const workflowScheduledId = decodePayload((_c = (_b = (_a = scheduledWorkflow === null || scheduledWorkflow === void 0 ? void 0 : scheduledWorkflow.workflowExecutionInfo) === null || _a === void 0 ? void 0 : _a.searchAttributes) === null || _b === void 0 ? void 0 : _b.indexedFields) === null || _c === void 0 ? void 0 : _c.TemporalScheduledById);
        expect(getWorkflowRelationships(toWorkflowExecution(scheduledWorkflow), completedEvents, namespaces.namespaces).scheduleId).toBe(workflowScheduledId);
    });
    it('should return empty string for a non-scheduled workflows', () => {
        expect(getWorkflowRelationships(toWorkflowExecution(completedWorkflow), completedEvents, namespaces.namespaces).scheduleId).toBe('');
    });
});
