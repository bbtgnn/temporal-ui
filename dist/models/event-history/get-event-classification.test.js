import { describe, expect, it } from 'vitest';
import { eventClassifications, getEventClassification, } from './get-event-classification';
describe('eventClassifications', () => {
    it('should match the last snapshot of the classifications', () => {
        expect(eventClassifications).toEqual([
            'Unspecified',
            'Scheduled',
            'Open',
            'New',
            'Started',
            'Initiated',
            'Running',
            'Completed',
            'Fired',
            'CancelRequested',
            'TimedOut',
            'Signaled',
            'Canceled',
            'Failed',
            'Terminated',
        ]);
    });
});
describe('getEventClassification', () => {
    it('should return "Started" for WorkflowExecutionStarted', () => {
        const eventType = 'WorkflowExecutionStarted';
        expect(getEventClassification(eventType)).toBe('Started');
    });
    it('should return "Completed" for WorkflowExecutionCompleted', () => {
        const eventType = 'WorkflowExecutionCompleted';
        expect(getEventClassification(eventType)).toBe('Completed');
    });
    it('should return "Failed" for WorkflowExecutionFailed', () => {
        const eventType = 'WorkflowExecutionFailed';
        expect(getEventClassification(eventType)).toBe('Failed');
    });
    it('should return "TimedOut" for WorkflowExecutionTimedOut', () => {
        const eventType = 'WorkflowExecutionTimedOut';
        expect(getEventClassification(eventType)).toBe('TimedOut');
    });
    it('should return "Scheduled" for WorkflowTaskScheduled', () => {
        const eventType = 'WorkflowTaskScheduled';
        expect(getEventClassification(eventType)).toBe('Scheduled');
    });
    it('should return "Started" for WorkflowTaskStarted', () => {
        const eventType = 'WorkflowTaskStarted';
        expect(getEventClassification(eventType)).toBe('Started');
    });
    it('should return "Completed" for WorkflowTaskCompleted', () => {
        const eventType = 'WorkflowTaskCompleted';
        expect(getEventClassification(eventType)).toBe('Completed');
    });
    it('should return "TimedOut" for WorkflowTaskTimedOut', () => {
        const eventType = 'WorkflowTaskTimedOut';
        expect(getEventClassification(eventType)).toBe('TimedOut');
    });
    it('should return "Failed" for WorkflowTaskFailed', () => {
        const eventType = 'WorkflowTaskFailed';
        expect(getEventClassification(eventType)).toBe('Failed');
    });
    it('should return "Scheduled" for ActivityTaskScheduled', () => {
        const eventType = 'ActivityTaskScheduled';
        expect(getEventClassification(eventType)).toBe('Scheduled');
    });
    it('should return "Started" for ActivityTaskStarted', () => {
        const eventType = 'ActivityTaskStarted';
        expect(getEventClassification(eventType)).toBe('Started');
    });
    it('should return "Completed" for ActivityTaskCompleted', () => {
        const eventType = 'ActivityTaskCompleted';
        expect(getEventClassification(eventType)).toBe('Completed');
    });
    it('should return "Failed" for ActivityTaskFailed', () => {
        const eventType = 'ActivityTaskFailed';
        expect(getEventClassification(eventType)).toBe('Failed');
    });
    it('should return "TimedOut" for ActivityTaskTimedOut', () => {
        const eventType = 'ActivityTaskTimedOut';
        expect(getEventClassification(eventType)).toBe('TimedOut');
    });
    it('should return "Started" for TimerStartedEven', () => {
        const eventType = 'TimerStarted';
        expect(getEventClassification(eventType)).toBe('Started');
    });
    it('should return "Fired" for TimerFiredEven', () => {
        const eventType = 'TimerFired';
        expect(getEventClassification(eventType)).toBe('Fired');
    });
    it('should return "CancelRequested" for ActivityTaskCancelRequested', () => {
        const eventType = 'ActivityTaskCancelRequested';
        expect(getEventClassification(eventType)).toBe('CancelRequested');
    });
    it('should return "Canceled" for ActivityTaskCanceled', () => {
        const eventType = 'ActivityTaskCanceled';
        expect(getEventClassification(eventType)).toBe('Canceled');
    });
    it('should return "Canceled" for TimerCanceled', () => {
        const eventType = 'TimerCanceled';
        expect(getEventClassification(eventType)).toBe('Canceled');
    });
    it('should return undefined for MarkerRecorded', () => {
        const eventType = 'MarkerRecorded';
        expect(getEventClassification(eventType)).toBeUndefined();
    });
    it('should return "Signaled" for WorkflowExecutionSignaled', () => {
        const eventType = 'WorkflowExecutionSignaled';
        expect(getEventClassification(eventType)).toBe('Signaled');
    });
    it('should return "Terminated" for WorkflowExecutionTerminated', () => {
        const eventType = 'WorkflowExecutionTerminated';
        expect(getEventClassification(eventType)).toBe('Terminated');
    });
    it('should return "CancelRequested" for WorkflowExecutionCancelRequested', () => {
        expect(getEventClassification('WorkflowExecutionCancelRequested')).toBe('CancelRequested');
    });
    it('should return "Canceled" for WorkflowExecutionCanceled', () => {
        const eventType = 'WorkflowExecutionCanceled';
        expect(getEventClassification(eventType)).toBe('Canceled');
    });
    it('should return "$x" for RequestCancelExternalWorkflowExecutionInitiated', () => {
        expect(getEventClassification('RequestCancelExternalWorkflowExecutionInitiated')).toBe('CancelRequested');
    });
    it('should return "$x" for RequestCancelExternalWorkflowExecutionFailed', () => {
        expect(getEventClassification('RequestCancelExternalWorkflowExecutionFailed')).toBe('CancelRequested');
    });
    it('should return "CancelRequested" for ExternalWorkflowExecutionCancelRequested', () => {
        expect(getEventClassification('ExternalWorkflowExecutionCancelRequested')).toBe('CancelRequested');
    });
    it('should return "New" for WorkflowExecutionContinuedAsNew', () => {
        const eventType = 'WorkflowExecutionContinuedAsNew';
        expect(getEventClassification(eventType)).toBe('New');
    });
    it('should return "$x" for StartChildWorkflowExecutionInitiated', () => {
        expect(getEventClassification('StartChildWorkflowExecutionInitiated')).toBe('Initiated');
    });
    it('should return "Failed" for StartChildWorkflowExecutionFailed', () => {
        expect(getEventClassification('StartChildWorkflowExecutionFailed')).toBe('Failed');
    });
    it('should return "Started" for ChildWorkflowExecutionStarted', () => {
        const eventType = 'ChildWorkflowExecutionStarted';
        expect(getEventClassification(eventType)).toBe('Started');
    });
    it('should return "Completed" for ChildWorkflowExecutionCompleted', () => {
        const eventType = 'ChildWorkflowExecutionCompleted';
        expect(getEventClassification(eventType)).toBe('Completed');
    });
    it('should return "Failed" for ChildWorkflowExecutionFailed', () => {
        const eventType = 'ChildWorkflowExecutionFailed';
        expect(getEventClassification(eventType)).toBe('Failed');
    });
    it('should return "Canceled" for ChildWorkflowExecutionCanceled', () => {
        const eventType = 'ChildWorkflowExecutionCanceled';
        expect(getEventClassification(eventType)).toBe('Canceled');
    });
    it('should return "TimedOut" for ChildWorkflowExecutionTimedOut', () => {
        const eventType = 'ChildWorkflowExecutionTimedOut';
        expect(getEventClassification(eventType)).toBe('TimedOut');
    });
    it('should return "Terminated" for ChildWorkflowExecutionTerminated', () => {
        expect(getEventClassification('ChildWorkflowExecutionTerminated')).toBe('Terminated');
    });
    it('should return "Initiated" for SignalExternalWorkflowExecutionInitiated', () => {
        expect(getEventClassification('SignalExternalWorkflowExecutionInitiated')).toBe('Initiated');
    });
    it('should return "Failed" for SignalExternalWorkflowExecutionFailed', () => {
        expect(getEventClassification('SignalExternalWorkflowExecutionFailed')).toBe('Failed');
    });
    it('should return "Signaled" for ExternalWorkflowExecutionSignaled', () => {
        expect(getEventClassification('ExternalWorkflowExecutionSignaled')).toBe('Signaled');
    });
    it('should return undefined for UpsertWorkflowSearchAttributes', () => {
        expect(getEventClassification('UpsertWorkflowSearchAttributes')).toBeUndefined();
    });
});
