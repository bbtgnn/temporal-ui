import { get } from 'svelte/store';
import { supportsAdvancedVisibility } from '../../stores/advanced-visibility';
import { SEARCH_ATTRIBUTE_TYPE, } from '../../types/workflows';
import { isInConditional, isNullConditional, isStartsWith } from '../is';
import { isDuration, isDurationString, toDate, tomorrow } from '../to-duration';
const filterKeys = {
    workflowId: 'WorkflowId',
    workflowType: 'WorkflowType',
    timeRange: 'StartTime',
    executionStatus: 'ExecutionStatus',
    closeTime: 'CloseTime',
    runId: 'RunId',
};
const isValid = (value, conditional) => {
    if (value === null && !isNullConditional(conditional))
        return false;
    if (value === undefined)
        return false;
    if (value === '')
        return false;
    if (typeof value === 'string' && value === 'undefined')
        return false;
    return true;
};
const formatValue = ({ value, type, conditional, }) => {
    if (type === SEARCH_ATTRIBUTE_TYPE.BOOL) {
        return value.toLowerCase() === 'true' ? true : false;
    }
    if (type === SEARCH_ATTRIBUTE_TYPE.KEYWORDLIST &&
        isInConditional(conditional)) {
        return value;
    }
    return `"${value}"`;
};
const getQueryKey = (attribute) => {
    var _a;
    const key = (_a = filterKeys[attribute]) !== null && _a !== void 0 ? _a : attribute;
    if (typeof key === 'string' && /\s/g.test(key)) {
        return '`' + key + '`';
    }
    return key;
};
const toFilterQueryStatement = (attribute, type, value, conditional = '=', archived, customDate) => {
    const queryKey = getQueryKey(attribute);
    if (value === 'All')
        return '';
    // Custom Dates...
    if (customDate) {
        return `${queryKey} ${value}`;
    }
    if (isNullConditional(conditional)) {
        return `\`${queryKey}\` ${conditional} ${value}`;
    }
    if (isDuration(value) || isDurationString(value)) {
        if (archived || get(supportsAdvancedVisibility)) {
            return `${queryKey} ${conditional} "${toDate(value)}"`;
        }
        return `${queryKey} BETWEEN "${toDate(value)}" AND "${tomorrow()}"`;
    }
    if (isStartsWith(conditional)) {
        return `\`${queryKey}\` ${conditional} ${formatValue({
            value,
            type,
            conditional,
        })}`;
    }
    return `\`${queryKey}\`${conditional}${formatValue({
        value,
        type,
        conditional,
    })}`;
};
const toQueryStatementsFromFilters = (filters, archived) => {
    return filters
        .map(({ attribute, type, value, conditional, operator, parenthesis, customDate, }) => {
        if (isValid(value, conditional)) {
            let statement = toFilterQueryStatement(attribute, type, value, conditional, archived, customDate);
            if (parenthesis === '(') {
                statement = `(${statement}`;
            }
            else if (parenthesis === ')') {
                statement = `${statement})`;
            }
            if (operator) {
                statement = `${statement} ${operator}` + ' ';
            }
            return statement;
        }
    })
        .filter(Boolean);
};
export const toListWorkflowQueryFromFilters = (filters = [], archived = false) => {
    return toQueryStatementsFromFilters(filters, archived).join('');
};
