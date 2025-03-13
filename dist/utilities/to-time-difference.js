export const toTimeDifference = ({ date, now = Date.now(), negativeDefault, }) => {
    if (!date)
        return '';
    const start = String(date);
    try {
        const scheduled = Number(new Date(start));
        const timeFromNow = (scheduled - now) / 1000;
        if (negativeDefault && timeFromNow < 0) {
            return negativeDefault;
        }
        return !isNaN(timeFromNow) ? `${timeFromNow.toFixed(0)}s` : '';
    }
    catch (error) {
        return '';
    }
};
