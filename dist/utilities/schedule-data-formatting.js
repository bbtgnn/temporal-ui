const parseTime = (time) => (time ? parseInt(time) : 0);
export const timeToInterval = (days, hour, minute, second) => {
    const interval = parseTime(days) * 60 * 60 * 24 +
        parseTime(hour) * 60 * 60 +
        parseTime(minute) * 60 +
        parseTime(second);
    return `${interval}s`;
};
export const convertDaysAndMonths = ({ months = [], daysOfMonth = [], daysOfWeek = [], }) => {
    var _a, _b;
    const month = months
        .sort((a, b) => parseInt(a) - parseInt(b))
        .join(',');
    const dayOfMonth = daysOfMonth
        .sort((a, b) => a - b)
        .join(',');
    const normalizedDaysOfWeek = ((_b = (_a = daysOfWeek === null || daysOfWeek === void 0 ? void 0 : daysOfWeek[0]) === null || _a === void 0 ? void 0 : _a.split(',')) === null || _b === void 0 ? void 0 : _b.length) > 1
        ? daysOfWeek[0].split(',')
        : daysOfWeek;
    const dayOfWeek = normalizedDaysOfWeek
        .sort((a, b) => parseInt(a) - parseInt(b))
        .join(',');
    return { month, dayOfMonth, dayOfWeek };
};
