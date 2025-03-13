import { Action } from '../models/workflow-actions';
export declare const getPlacholder: (action: Action, email?: string) => string;
export declare const formatReason: ({ action, reason, email, }: {
    action: Action;
    reason: string;
    email?: string;
}) => string;
