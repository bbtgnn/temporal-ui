const isUpperCase = (label, index) => {
    const charCode = label.charCodeAt(index);
    return charCode >= 65 && charCode <= 90;
};
export const capitalize = (word) => {
    if (!word)
        return '';
    return word[0].toUpperCase() + word.slice(1);
};
export const spaceBetweenCapitalLetters = (word) => {
    return capitalize(word)
        .replace(/([A-Z])/g, ' $1')
        .trim();
};
const labelsToAddName = new Set(['workflowType']);
const labelsToChange = {
    workflowExecutionWorkflowId: 'workflowId',
    workflowExecutionRunId: 'runId',
    protocolInstanceId: 'updateId',
    metaUpdateId: 'updateId',
};
const formatLabel = (label) => {
    if (!label)
        return '';
    // Add name if needed
    if (labelsToAddName.has(label)) {
        return `${label}Name`;
    }
    // Change label if needed
    if (labelsToChange[label]) {
        return labelsToChange[label];
    }
    return label;
};
export const format = (label) => {
    if (!label)
        return '';
    if (label === 'id')
        return 'ID';
    let result = '';
    let index = 0;
    label = formatLabel(label);
    while (index < label.length) {
        const current = label[index];
        const next = label[index + 1];
        if (index === 0) {
            result += label[index].toUpperCase();
            index++;
            continue;
        }
        if (current + next === 'Id') {
            result += ' ID';
            index += 2;
            continue;
        }
        if (isUpperCase(label, index)) {
            result += ' ';
            result += current.toUpperCase();
            index++;
            continue;
        }
        result += current;
        index++;
    }
    return result;
};
