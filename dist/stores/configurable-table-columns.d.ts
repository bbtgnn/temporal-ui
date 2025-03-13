/// <reference types="svelte" />
import { type Readable, type Writable } from 'svelte/store';
import type { Settings } from '../types/global';
export declare const MAX_PINNED_COLUMNS = 2;
export declare const WorkflowHeaderLabels: readonly ["Status", "Workflow ID", "Run ID", "Type", "Start", "End", "History Size", "History Length", "Execution Time", "Execution Duration", "State Transitions", "Parent Namespace", "Task Queue", "Scheduled By ID", "Scheduled Start Time"];
export type WorkflowHeaderLabel = (typeof WorkflowHeaderLabels)[number];
type AnyWorkflowHeaderLabel = WorkflowHeaderLabel | (string & {});
export type ConfigurableTableHeader = {
    label: AnyWorkflowHeaderLabel;
    pinned: boolean;
};
export declare const TABLE_TYPE: {
    readonly WORKFLOWS: "workflows";
    readonly SCHEDULES: "schedules";
};
type Keys = keyof typeof TABLE_TYPE;
export type ConfigurableTableType = (typeof TABLE_TYPE)[Keys];
type TableColumns = {
    [namespace: string]: {
        [key in ConfigurableTableType]: ConfigurableTableHeader[];
    } | undefined;
};
type State = {
    [namespace: string]: ConfigurableTableHeader[] | undefined;
};
export declare const persistedWorkflowTableColumns: Pick<Writable<State>, "update" | "subscribe" | "set">;
export declare const persistedSchedulesTableColumns: Pick<Writable<State>, "update" | "subscribe" | "set">;
export declare const configurableTableColumns: Readable<TableColumns>;
export declare const pinnedColumnsWidth: Pick<Writable<number>, "update" | "subscribe" | "set">;
export declare const availableWorkflowSystemSearchAttributeColumns: (namespace: string, settings: Settings) => Readable<ConfigurableTableHeader[]>;
export declare const availableScheduleColumns: (namespace: string) => Readable<ConfigurableTableHeader[]>;
export declare const availableCustomSearchAttributeColumns: (namespace: string, table?: ConfigurableTableType) => Readable<ConfigurableTableHeader[]>;
export declare const addColumn: (label: AnyWorkflowHeaderLabel, namespace: string, table: ConfigurableTableType) => void;
export declare const removeColumn: (label: AnyWorkflowHeaderLabel, namespace: string, table: ConfigurableTableType) => void;
export declare const moveColumn: (from: number, to: number, namespace: string, table: ConfigurableTableType) => void;
export declare const pinColumn: (label: AnyWorkflowHeaderLabel, namespace: string, table: ConfigurableTableType) => void;
export {};
