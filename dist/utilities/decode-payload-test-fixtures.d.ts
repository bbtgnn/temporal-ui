export declare const workflowStartedEvent: {
    type: string;
    workflowType: {
        name: string;
    };
    parentWorkflowNamespace: string;
    parentWorkflowExecution: any;
    parentInitiatedEventId: string;
    taskQueue: {
        name: string;
        kind: string;
    };
    input: {
        payloads: {
            metadata: {
                encoding: string;
            };
            data: string;
        }[];
    };
    workflowExecutionTimeout: string;
    workflowRunTimeout: string;
    workflowTaskTimeout: string;
    continuedExecutionRunId: string;
    initiator: string;
    continuedFailure: any;
    lastCompletionResult: any;
    originalExecutionRunId: string;
    identity: string;
    firstExecutionRunId: string;
    retryPolicy: any;
    attempt: number;
    workflowExecutionExpirationTime: any;
    cronSchedule: string;
    firstWorkflowTaskBackoff: string;
    memo: any;
    searchAttributes: {
        indexedFields: {
            CandidateEmail: {
                metadata: {
                    encoding: string;
                    type: string;
                };
                data: string;
            };
        };
    };
    prevAutoResetPoints: any;
    header: {
        fields: {
            encryption: any;
        };
    };
};
export declare const dataConvertedWorkflowStartedEvent: {
    type: string;
    workflowType: {
        name: string;
    };
    parentWorkflowNamespace: string;
    parentWorkflowExecution: any;
    parentInitiatedEventId: string;
    taskQueue: {
        name: string;
        kind: string;
    };
    input: {
        payloads: string[];
    };
    workflowExecutionTimeout: string;
    workflowRunTimeout: string;
    workflowTaskTimeout: string;
    continuedExecutionRunId: string;
    initiator: string;
    continuedFailure: any;
    lastCompletionResult: any;
    originalExecutionRunId: string;
    identity: string;
    firstExecutionRunId: string;
    retryPolicy: any;
    attempt: number;
    workflowExecutionExpirationTime: any;
    cronSchedule: string;
    firstWorkflowTaskBackoff: string;
    memo: any;
    searchAttributes: {
        indexedFields: {
            CandidateEmail: string;
        };
    };
    prevAutoResetPoints: any;
    header: {
        fields: {
            encryption: any;
        };
    };
};
export declare const dataConvertedFailureWorkflowStartedEvent: {
    type: string;
    workflowType: {
        name: string;
    };
    parentWorkflowNamespace: string;
    parentWorkflowExecution: any;
    parentInitiatedEventId: string;
    taskQueue: {
        name: string;
        kind: string;
    };
    input: {
        payloads: {
            metadata: {
                encoding: string;
            };
            data: string;
        }[];
    };
    workflowExecutionTimeout: string;
    workflowRunTimeout: string;
    workflowTaskTimeout: string;
    continuedExecutionRunId: string;
    initiator: string;
    continuedFailure: any;
    lastCompletionResult: any;
    originalExecutionRunId: string;
    identity: string;
    firstExecutionRunId: string;
    retryPolicy: any;
    attempt: number;
    workflowExecutionExpirationTime: any;
    cronSchedule: string;
    firstWorkflowTaskBackoff: string;
    memo: any;
    searchAttributes: {
        indexedFields: {
            CandidateEmail: string;
        };
    };
    prevAutoResetPoints: any;
    header: {
        fields: {
            encryption: any;
        };
    };
};
export declare const noRemoteDataConverterWorkflowStartedEvent: {
    type: string;
    workflowType: {
        name: string;
    };
    parentWorkflowNamespace: string;
    parentWorkflowExecution: any;
    parentInitiatedEventId: string;
    taskQueue: {
        name: string;
        kind: string;
    };
    input: {
        payloads: string[];
    };
    workflowExecutionTimeout: string;
    workflowRunTimeout: string;
    workflowTaskTimeout: string;
    continuedExecutionRunId: string;
    initiator: string;
    continuedFailure: any;
    lastCompletionResult: any;
    originalExecutionRunId: string;
    identity: string;
    firstExecutionRunId: string;
    retryPolicy: any;
    attempt: number;
    workflowExecutionExpirationTime: any;
    cronSchedule: string;
    firstWorkflowTaskBackoff: string;
    memo: any;
    searchAttributes: {
        indexedFields: {
            CandidateEmail: string;
        };
    };
    prevAutoResetPoints: any;
    header: {
        fields: {
            encryption: any;
        };
    };
};
export declare const workflowStartedHistoryEvent: {
    workflowExecutionStartedEventAttributes: {
        workflowType: {
            name: string;
        };
        parentWorkflowNamespace: string;
        parentWorkflowExecution: any;
        parentInitiatedEventId: string;
        taskQueue: {
            name: string;
            kind: string;
        };
        input: {
            payloads: {
                metadata: {
                    encoding: string;
                    'encryption-key-id': string;
                };
                data: string;
            }[];
        };
        workflowExecutionTimeout: string;
        workflowRunTimeout: string;
        workflowTaskTimeout: string;
        continuedExecutionRunId: string;
        initiator: string;
        continuedFailure: any;
        lastCompletionResult: any;
        originalExecutionRunId: string;
        identity: string;
        firstExecutionRunId: string;
        retryPolicy: any;
        attempt: number;
        workflowExecutionExpirationTime: any;
        cronSchedule: string;
        firstWorkflowTaskBackoff: string;
        memo: any;
        searchAttributes: {
            indexedFields: {
                CandidateEmail: {
                    metadata: {
                        encoding: string;
                        type: string;
                    };
                    data: string;
                };
            };
        };
        prevAutoResetPoints: any;
        header: {
            fields: {
                encryption: any;
            };
        };
    };
};
export declare const getTestPayloadEvent: () => {
    type: string;
    workflowType: {
        name: string;
    };
    parentWorkflowNamespace: string;
    parentWorkflowExecution: any;
    parentInitiatedEventId: string;
    taskQueue: {
        name: string;
        kind: string;
    };
    input: {
        payloads: {
            metadata: {
                encoding: string;
            };
            data: string;
        }[];
    };
    details: {
        detail1: {
            payloads: {
                metadata: {
                    encoding: string;
                };
                data: string;
            }[];
        };
    };
    encodedAttributes: {
        metadata: {
            encoding: string;
        };
        data: string;
    };
    workflowExecutionTimeout: string;
    workflowRunTimeout: string;
    workflowTaskTimeout: string;
    continuedExecutionRunId: string;
    initiator: string;
    continuedFailure: any;
    lastCompletionResult: any;
    originalExecutionRunId: string;
    identity: string;
    firstExecutionRunId: string;
    retryPolicy: any;
    attempt: number;
    workflowExecutionExpirationTime: any;
    cronSchedule: string;
    firstWorkflowTaskBackoff: string;
    memo: any;
    prevAutoResetPoints: any;
};
export declare const getTestPayloadEventWithNullEncodedAttributes: () => {
    type: string;
    workflowType: {
        name: string;
    };
    parentWorkflowNamespace: string;
    parentWorkflowExecution: any;
    parentInitiatedEventId: string;
    taskQueue: {
        name: string;
        kind: string;
    };
    input: {
        payloads: {
            metadata: {
                encoding: string;
            };
            data: string;
        }[];
    };
    details: {
        detail1: {
            payloads: {
                metadata: {
                    encoding: string;
                };
                data: string;
            }[];
        };
    };
    encodedAttributes: any;
    workflowExecutionTimeout: string;
    workflowRunTimeout: string;
    workflowTaskTimeout: string;
    continuedExecutionRunId: string;
    initiator: string;
    continuedFailure: any;
    lastCompletionResult: any;
    originalExecutionRunId: string;
    identity: string;
    firstExecutionRunId: string;
    retryPolicy: any;
    attempt: number;
    workflowExecutionExpirationTime: any;
    cronSchedule: string;
    firstWorkflowTaskBackoff: string;
    memo: any;
    prevAutoResetPoints: any;
};
