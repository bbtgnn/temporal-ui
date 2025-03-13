import { has } from './has';
const executionStatuses = [
    'Running',
    'TimedOut',
    'Completed',
    'Failed',
    'Completed',
    'ContinuedAsNew',
    'Canceled',
    'Terminated',
];
const operators = [
    '===',
    '!==',
    '>=',
    '<=',
    '==',
    '!=',
    '=',
    '>',
    '<',
    '!',
    'and',
    'or',
    'between',
    'order by',
    'in',
    '(',
    ')',
    'starts_with',
];
const conditionals = [
    '===',
    '!==',
    '>=',
    '<=',
    '==',
    '!=',
    '=',
    '>',
    '<',
    '!',
    'starts_with',
    'is',
    'is not',
    'in',
];
const joins = ['and', 'or'];
const parenthesis = ['(', ')'];
export const isString = (x) => typeof x === 'string';
export const isNull = (x) => x === null;
export const isObject = (x) => {
    if (isNull(x))
        return false;
    if (Array.isArray(x))
        return false;
    if (typeof x === 'object')
        return true;
    return false;
};
export const isNumber = (x) => {
    if (typeof x === 'number')
        return true;
    return false;
};
export const isExecutionStatus = (x) => {
    if (!isString(x))
        return false;
    for (const status of executionStatuses) {
        if (x === status)
            return true;
    }
    return false;
};
export const isSpace = (x) => {
    return x === ' ';
};
export const isQuote = (x) => {
    if (x === "'")
        return true;
    if (x === '"')
        return true;
    return false;
};
export const isBacktick = (x) => {
    return x === '`';
};
export const isOperator = (x) => {
    if (!isString(x))
        return false;
    x = x.toLocaleLowerCase();
    for (const operator of operators) {
        if (x === operator)
            return true;
    }
    return false;
};
export const isConditional = (x) => {
    if (!isString(x))
        return false;
    x = x.toLocaleLowerCase();
    for (const condition of conditionals) {
        if (x === condition)
            return true;
    }
    return false;
};
export const isParenthesis = (x) => {
    if (!isString(x))
        return false;
    x = x.toLocaleLowerCase();
    for (const paren of parenthesis) {
        if (x === paren)
            return true;
    }
    return false;
};
export const isEndParenthesis = (x) => {
    if (!isString(x))
        return false;
    return x.toLocaleLowerCase() === ')';
};
export const isJoin = (x) => {
    if (!isString(x))
        return false;
    x = x.toLocaleLowerCase();
    for (const join of joins) {
        if (x === join)
            return true;
    }
    return false;
};
export const isBetween = (x) => {
    if (!isString(x))
        return false;
    x = x.toLocaleLowerCase();
    return x === 'between';
};
export const isNullConditional = (x) => {
    if (!isString(x))
        return false;
    x = x.toLocaleLowerCase();
    return x === 'is' || x === 'is not';
};
export const isSortOrder = (sortOrder) => {
    if (sortOrder === 'ascending')
        return true;
    if (sortOrder === 'descending')
        return true;
    return false;
};
export const isError = (e) => {
    return has(e, 'name', 'message');
};
export const isStartsWith = (x) => {
    if (!isString(x))
        return false;
    return x.toLocaleLowerCase() === 'starts_with';
};
export const isInConditional = (x) => {
    if (!isString(x))
        return false;
    return x.toLocaleLowerCase() === 'in';
};
