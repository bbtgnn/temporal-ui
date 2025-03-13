import { derived } from 'svelte/store';
import { page } from '$app/stores';
import { namespaces } from './namespaces';
import { persistStore } from './persist-store';
import { customSearchAttributes } from './search-attributes';
export const MAX_PINNED_COLUMNS = 2;
export const WorkflowHeaderLabels = [
    'Status',
    'Workflow ID',
    'Run ID',
    'Type',
    'Start',
    'End',
    'History Size',
    'History Length',
    'Execution Time',
    'Execution Duration',
    'State Transitions',
    'Parent Namespace',
    'Task Queue',
    'Scheduled By ID',
    'Scheduled Start Time',
];
export const TABLE_TYPE = {
    WORKFLOWS: 'workflows',
    SCHEDULES: 'schedules',
};
const DEFAULT_WORKFLOWS_COLUMNS = [
    { label: 'Status', pinned: true },
    { label: 'Workflow ID', pinned: true },
    { label: 'Run ID', pinned: false },
    { label: 'Type', pinned: false },
    { label: 'Start', pinned: false },
    { label: 'End', pinned: false },
];
const DEFAULT_AVAILABLE_WORKFLOWS_COLUMNS = [
    { label: 'History Size', pinned: false },
    { label: 'History Length', pinned: false },
    { label: 'Execution Time', pinned: false },
    { label: 'Execution Duration', pinned: false },
    { label: 'State Transitions', pinned: false },
    { label: 'Parent Namespace', pinned: false },
    { label: 'Task Queue', pinned: false },
    { label: 'Scheduled By ID', pinned: false },
    { label: 'Scheduled Start Time', pinned: false },
    { label: 'Deployment', pinned: false },
    { label: 'Deployment Version', pinned: false },
    { label: 'Versioning Behavior', pinned: false },
];
const DEFAULT_SCHEDULES_COLUMNS = [
    { label: 'Status', pinned: false },
    { label: 'Schedule ID', pinned: false },
    { label: 'Workflow Type', pinned: false },
    { label: 'Recent Runs', pinned: false },
    { label: 'Upcoming Runs', pinned: false },
    { label: 'Schedule Spec', pinned: false },
];
const isNotParentWorkflowIdColumn = (column) => column.label !== 'Parent Workflow ID';
const getDefaultWorkflowsTableColumns = () => {
    let columns;
    try {
        // try to get the list of columns that was stored last time they interacted
        // with the table before we made it namespace-specific
        const stringifiedOldColumns = window.localStorage.getItem('workflow-table-columns');
        const parsedOldColumns = JSON.parse(stringifiedOldColumns);
        if (stringifiedOldColumns && (parsedOldColumns === null || parsedOldColumns === void 0 ? void 0 : parsedOldColumns.length)) {
            const filteredOldColumns = parsedOldColumns.filter(isNotParentWorkflowIdColumn);
            columns = filteredOldColumns;
        }
        else {
            columns = DEFAULT_WORKFLOWS_COLUMNS;
        }
    }
    catch {
        columns = DEFAULT_WORKFLOWS_COLUMNS;
    }
    return columns;
};
export const persistedWorkflowTableColumns = persistStore('namespace-workflow-table-columns', {});
export const persistedSchedulesTableColumns = persistStore('namespace-schedules-table-columns', {});
export const configurableTableColumns = derived([
    namespaces,
    page,
    persistedWorkflowTableColumns,
    persistedSchedulesTableColumns,
], ([$namespaces, $page, $persistedWorkflowTableColumns, $persistedSchedulesTableColumns,]) => {
    var _a;
    const state = {};
    const useOrAddDefaultTableColumnsToNamespace = (columns, namespace, defaultColumns, update) => {
        var _a;
        if (!((_a = columns === null || columns === void 0 ? void 0 : columns[namespace]) === null || _a === void 0 ? void 0 : _a.length)) {
            columns[namespace] = [...defaultColumns];
            return columns[namespace];
        }
        const filteredColumns = columns[namespace].filter(isNotParentWorkflowIdColumn);
        if (filteredColumns.length !== columns[namespace].length) {
            columns[namespace] = filteredColumns;
            update(columns);
        }
        return columns[namespace];
    };
    const getTableColumns = (namespace) => ({
        workflows: useOrAddDefaultTableColumnsToNamespace($persistedWorkflowTableColumns, namespace, getDefaultWorkflowsTableColumns(), (columns) => persistedWorkflowTableColumns.set(columns)),
        schedules: useOrAddDefaultTableColumnsToNamespace($persistedSchedulesTableColumns, namespace, DEFAULT_SCHEDULES_COLUMNS, (columns) => persistedSchedulesTableColumns.set(columns)),
    });
    const namespaceColumns = (_a = $namespaces === null || $namespaces === void 0 ? void 0 : $namespaces.reduce((namespaceToColumnsMap, { namespaceInfo: { name } }) => {
        return {
            ...namespaceToColumnsMap,
            [name]: getTableColumns(name),
        };
    }, state)) !== null && _a !== void 0 ? _a : {};
    const { namespace: currentNamespace } = $page.params;
    return namespaceColumns[currentNamespace]
        ? namespaceColumns
        : {
            ...namespaceColumns,
            [currentNamespace]: getTableColumns(currentNamespace),
        };
});
export const pinnedColumnsWidth = persistStore('workflow-table-pinned-columns-width');
export const availableWorkflowSystemSearchAttributeColumns = (namespace, settings) => derived(configurableTableColumns, ($configurableTableColumns) => {
    var _a;
    return [
        ...DEFAULT_WORKFLOWS_COLUMNS,
        ...(((_a = settings === null || settings === void 0 ? void 0 : settings.runtimeEnvironment) === null || _a === void 0 ? void 0 : _a.isCloud)
            ? DEFAULT_AVAILABLE_WORKFLOWS_COLUMNS.filter((col) => col.label !== 'Parent Namespace')
            : DEFAULT_AVAILABLE_WORKFLOWS_COLUMNS),
    ].filter((header) => {
        var _a, _b;
        return !((_b = (_a = $configurableTableColumns[namespace]) === null || _a === void 0 ? void 0 : _a.workflows) === null || _b === void 0 ? void 0 : _b.some((column) => column.label === header.label));
    });
});
export const availableScheduleColumns = (namespace) => derived(configurableTableColumns, ($configurableTableColumns) => [...DEFAULT_SCHEDULES_COLUMNS].filter((header) => {
    var _a, _b;
    return !((_b = (_a = $configurableTableColumns[namespace]) === null || _a === void 0 ? void 0 : _a.schedules) === null || _b === void 0 ? void 0 : _b.some((column) => column.label === header.label));
}));
export const availableCustomSearchAttributeColumns = (namespace, table = TABLE_TYPE.WORKFLOWS) => derived([customSearchAttributes, configurableTableColumns], ([$customSearchAttributes, $configurableTableColumns]) => Object.keys($customSearchAttributes)
    .filter((searchAttribute) => {
    var _a, _b;
    return !((_b = (_a = $configurableTableColumns[namespace]) === null || _a === void 0 ? void 0 : _a[table]) === null || _b === void 0 ? void 0 : _b.some((column) => column.label === searchAttribute));
})
    .map((key) => ({
    label: key,
    pinned: false,
})));
const getDefaultColumns = (table) => {
    switch (table) {
        case TABLE_TYPE.WORKFLOWS:
            return DEFAULT_WORKFLOWS_COLUMNS;
        case TABLE_TYPE.SCHEDULES:
            return DEFAULT_SCHEDULES_COLUMNS;
    }
};
const reducer = (action, state) => {
    var _a, _b, _c, _d;
    const defaultColumns = getDefaultColumns(action.payload.table);
    switch (action.type) {
        case 'CONFIGURABLE_COLUMN.ADD': {
            const { label, namespace } = action.payload;
            const columns = (_a = state === null || state === void 0 ? void 0 : state[namespace]) !== null && _a !== void 0 ? _a : defaultColumns;
            return {
                ...state,
                [namespace]: [...columns, { label, pinned: false }],
            };
        }
        case 'CONFIGURABLE_COLUMN.REMOVE': {
            const { label: labelToRemove, namespace } = action.payload;
            const columns = (_b = state === null || state === void 0 ? void 0 : state[namespace]) !== null && _b !== void 0 ? _b : defaultColumns;
            return {
                ...state,
                [namespace]: columns.filter(({ label }) => label !== labelToRemove),
            };
        }
        case 'CONFIGURABLE_COLUMN.PIN': {
            const { label: labelToPin, namespace } = action.payload;
            const columns = (_c = state === null || state === void 0 ? void 0 : state[namespace]) !== null && _c !== void 0 ? _c : defaultColumns;
            const index = columns.findIndex(({ label }) => label === labelToPin);
            const isPinned = columns[index].pinned;
            let lastPinned = -1;
            for (let i = columns.length - 1; i >= 0; i--) {
                if (columns[i].pinned) {
                    lastPinned = i;
                    break;
                }
            }
            const newColumns = [...columns];
            newColumns[index].pinned = !isPinned;
            if (index > lastPinned && !isPinned) {
                newColumns.splice(lastPinned + 1, 0, newColumns.splice(index, 1)[0]);
            }
            else if (index < lastPinned && isPinned) {
                newColumns.splice(lastPinned, 0, newColumns.splice(index, 1)[0]);
            }
            return {
                ...state,
                [namespace]: newColumns,
            };
        }
        case 'CONFIGURABLE_COLUMN.MOVE': {
            const { from, to, namespace } = action.payload;
            const columns = (_d = state === null || state === void 0 ? void 0 : state[namespace]) !== null && _d !== void 0 ? _d : DEFAULT_WORKFLOWS_COLUMNS;
            const isPinned = columns[from].pinned;
            let lastPinned = 0;
            for (let i = columns.length - 1; i >= 0; i--) {
                if (columns[i].pinned) {
                    lastPinned = i;
                    break;
                }
            }
            const tempColumns = [...columns];
            if (to <= lastPinned && !isPinned) {
                tempColumns[from].pinned = true;
            }
            else if (to > lastPinned && isPinned) {
                tempColumns[from].pinned = false;
            }
            tempColumns.splice(to, 0, tempColumns.splice(from, 1)[0]);
            return {
                ...state,
                [namespace]: tempColumns.map((c, idx) => idx > MAX_PINNED_COLUMNS - 1 ? { ...c, pinned: false } : c),
            };
        }
        default:
            return state;
    }
};
const getPersistedColumns = (table) => {
    switch (table) {
        case TABLE_TYPE.WORKFLOWS:
            return persistedWorkflowTableColumns;
        case TABLE_TYPE.SCHEDULES:
            return persistedSchedulesTableColumns;
    }
};
const dispatch = (action) => {
    const columns = getPersistedColumns(action.payload.table);
    columns.update((previousState) => reducer(action, previousState));
};
export const addColumn = (label, namespace, table) => {
    dispatch({
        type: 'CONFIGURABLE_COLUMN.ADD',
        payload: { label, namespace, table },
    });
};
export const removeColumn = (label, namespace, table) => {
    dispatch({
        type: 'CONFIGURABLE_COLUMN.REMOVE',
        payload: { label, namespace, table },
    });
};
export const moveColumn = (from, to, namespace, table) => {
    dispatch({
        type: 'CONFIGURABLE_COLUMN.MOVE',
        payload: { from, to, namespace, table },
    });
};
export const pinColumn = (label, namespace, table) => {
    dispatch({
        type: 'CONFIGURABLE_COLUMN.PIN',
        payload: { label, namespace, table },
    });
};
