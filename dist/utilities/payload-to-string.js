export const payloadToString = (value) => {
    if (Array.isArray(value))
        return value.join(', ');
    return value;
};
