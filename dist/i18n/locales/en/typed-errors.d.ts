export declare const Namespace = "typed-errors";
export declare const Strings: {
    readonly 'link-preface': "Learn more about ";
    readonly Unspecified: {
        readonly title: "Unspecified";
        readonly description: "The Workflow Task failed. See error for details.";
    };
    readonly UnhandledCommand: {
        readonly title: "Unhandled Command";
        readonly description: "The Workflow Task failed because there are new available events since the last Workflow Task started. A retry Workflow Task has been scheduled and the Workflow will have a chance to handle those new events.";
    };
    readonly BadScheduleActivityAttributes: {
        readonly title: "Bad Schedule Activity Attributes";
        readonly description: "The Workflow Task failed because of missing or incorrect ScheduleActivity attributes.";
    };
    readonly BadRequestCancelActivityAttributes: {
        readonly title: "Bad Request Cancel Activity Attributes";
        readonly description: "The Workflow Task failed because of bad RequestCancelActivity attributes. An Activity was scheduled to cancel, but the scheduled event id was never set.";
    };
    readonly BadStartTimerAttributes: {
        readonly title: "Bad Start Timer Attributes";
        readonly description: "The Workflow Task failed because the scheduled event is missing a timer id.";
    };
    readonly BadCancelTimerAttributes: {
        readonly title: "Bad Cancel Timer Attributes";
        readonly description: "The Workflow Task failed when trying to cancel a timer due to an unset timer id.";
    };
    readonly BadRecordMarkerAttributes: {
        readonly title: "Bad Record Marker Attributes";
        readonly description: "The Workflow Task failed because of a missing or invalid Marker name.";
    };
    readonly BadCompleteWorkflowExecutionAttributes: {
        readonly title: "Bad Complete Workflow Execution Attributes";
        readonly description: "The Workflow Task failed because of an unset attribute on CompleteWorkflowExecution.";
    };
    readonly BadFailWorkflowExecutionAttributes: {
        readonly title: "Bad Fail Workflow Execution Attributes";
        readonly description: "The Workflow Task failed because of an unset FailWorkflowExecution attribute or failure.";
    };
    readonly BadCancelWorkflowExecutionAttributes: {
        readonly title: "Bad Cancel Workflow Execution Attributes";
        readonly description: "The Workflow Task failed because of an unset attribute on CancelWorkflowExecution.";
    };
    readonly BadRequestCancelExternalAttributes: {
        readonly title: "Bad Request Cancel External Attributes";
        readonly description: "The Workflow Task failed due to an invalid attribute on a request to cancel an external Workflow. Check the Failure Message for more details.";
    };
    readonly BadContinueAsNewAttributes: {
        readonly title: "Bad Continue As New Attributes";
        readonly description: "The Workflow Task failed because it failed to validate on a ContinueAsNew attribute. Check the Failure Message for more details.";
    };
    readonly StartTimerDuplicateId: {
        readonly title: "Start Timer Duplicate ID";
        readonly description: "The Workflow Task failed because a timer with the given timer id has already started.";
    };
    readonly ResetStickyTaskQueue: {
        readonly title: "Reset Sticky Task Queue";
        readonly description: "The Workflow Task failed because the Sticky Task Queue needs to be reset. The system will automatically retry.";
    };
    readonly WorkflowWorkerUnhandledFailure: {
        readonly title: "Workflow Worker Unhandled Failure";
        readonly description: "The Workflow Task failed due to an unhandled failure from the Workflow code.";
        readonly action: "deterministic constraints";
        readonly link: "https://docs.temporal.io/workflows/#deterministic-constraints";
    };
    readonly WorkflowTaskHeartbeatError: {
        readonly title: "Workflow Task Heartbeat Error";
        readonly description: "The Workflow Task failed to send a heartbeat while executing long-running local Activities. These local Activities will re-execute on the next Workflow Task attempt. If this error is persistent, these local Activities will run repeatedly until the Workflow times out.";
    };
    readonly BadSignalWorkflowExecutionAttributes: {
        readonly title: "Bad Signal Workflow Execution Attributes";
        readonly description: "The Workflow Task failed to validate attributes for SignalWorkflowExecution. Check the Failure Message for more details.";
    };
    readonly BadStartChildExecutionAttributes: {
        readonly title: "Bad Start Child Execution Attributes";
        readonly description: "The Workflow Task failed to validate attributes needed for StartChildWorkflowExecution. Check the Failure Message for more details.";
    };
    readonly ForceCloseCommand: {
        readonly title: "Force Close Command";
        readonly description: "The Workflow Task was forced to close. A retry will be scheduled if the error is recoverable.";
    };
    readonly FailoverCloseCommand: {
        readonly title: "Failover Close Command";
        readonly description: "The Workflow Task was forced to close due to a Namespace failover. A retry will be scheduled automatically.";
    };
    readonly BadSignalInputSize: {
        readonly title: "Bad Signal Input Size";
        readonly description: "The payload has exceeded the available input size on a Signal.";
    };
    readonly BadBinary: {
        readonly title: "Bad Binary";
        readonly description: "The system failed this Workflow Task because the deployment of this Worker is marked as bad binary.";
    };
    readonly ScheduleActivityDuplicateId: {
        readonly title: "Schedule Activity Duplicate ID";
        readonly description: "The Workflow Task failed because the Activity ID is already in use, please check if you have specified the same Activity ID in your workflow.";
    };
    readonly BadSearchAttributes: {
        readonly title: "Bad Search Attributes";
        readonly description: "A Search attribute is either missing or the value exceeds the limit. This might cause Workflow tasks to continue to retry without success.";
        readonly action: "configuring search attributes";
        readonly link: "https://docs.temporal.io/visibility#search-attribute";
    };
    readonly NonDeterministicError: {
        readonly title: "Non Deterministic Error";
        readonly description: "A non-deterministic error has caused the Workflow Task to fail. This usually means the workflow code has a non-backward compatible change without a proper versioning branch.";
    };
    readonly BadModifyWorkflowPropertiesAttributes: {
        readonly title: "Bad Modify Workflow Properties Attributes";
        readonly description: "The Workflow Task failed to validate attributes on ModifyWorkflowProperty on the upsert memo. Check the Failure Message for more details.";
    };
    readonly PendingChildWorkflowsLimitExceeded: {
        readonly title: "Pending Child Workflows Limit Exceeded";
        readonly description: "The capacity for pending child Workflows has been reached. The Workflow Task was failed to prevent any more child Workflows from being added.";
    };
    readonly PendingActivitiesLimitExceeded: {
        readonly title: "Pending Activities Limit Exceeded";
        readonly description: "The capacity for pending Activities has been reached. The Workflow Task was failed to prevent another Activity from being created.";
    };
    readonly PendingSignalsLimitExceeded: {
        readonly title: "Pending Signals Limit Exceeded";
        readonly description: "The capacity for pending Signals to be sent from this Workflow has been reached.";
    };
    readonly PendingRequestCancelLimitExceeded: {
        readonly title: "Pending Request Cancel Limit Exceeded";
        readonly description: "The capacity for pending requests to cancel other Workflows has been reached.";
    };
    readonly BadUpdateWorkflowExecutionMessage: {
        readonly title: "Bad Update";
        readonly description: "A Workflow Execution tried to complete before receiving an Update.";
    };
    readonly UnhandledUpdate: {
        readonly title: "Unhandled Update";
        readonly description: "A Workflow Update was received by the Temporal Server while a Workflow Task was being processed on a Worker.";
    };
    readonly BadScheduleNexusOperationAttributes: {
        readonly title: "Bad Schedule Nexus Operation Attributes";
        readonly description: "A workflow task completed with an invalid ScheduleNexusOperation command.";
    };
    readonly PendingNexusOperationsLimitExceeded: {
        readonly title: "Pending Nexus Operations Limit Exceeded";
        readonly description: "A workflow task completed requesting to schedule a Nexus Operation exceeding the server configured limit.";
    };
    readonly BadRequestCancelNexusOperationAttributes: {
        readonly title: "Bad Request Cancel Nexus Operation Attributes";
        readonly description: "A workflow task completed with an invalid RequestCancelNexusOperation command.";
    };
    readonly FeatureDisabled: {
        readonly title: "Feature Disabled";
        readonly description: "A workflow task completed requesting a feature that's disabled on the server (either system wide or - typically - for the workflow's namespace). Check the workflow task failure message for more information.";
    };
};
