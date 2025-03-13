import { formatDistanceToNow, formatDistanceToNowStrict, parseISO, parseJSON, } from 'date-fns';
import * as dateTz from 'date-fns-tz'; // `build` script fails on importing some of named CommonJS modules
import { getTimezone, TimezoneOptions, Timezones, } from '../stores/time-format';
import { isTimestamp, timestampToDate } from './format-time';
const pattern = 'yyyy-MM-dd z HH:mm:ss.SS';
export function formatDate(date, timeFormat = 'UTC', options = {}) {
    if (!date)
        return '';
    const { relative = false, relativeLabel = 'ago', relativeStrict = false, abbrFormat = false, } = options;
    try {
        if (isTimestamp(date)) {
            date = timestampToDate(date);
        }
        const parsed = parseJSON(date);
        const format = abbrFormat
            ? parsed.getSeconds()
                ? 'yyyy-MM-dd HH:mm:ss a'
                : 'yyyy-MM-dd HH:mm a'
            : pattern;
        if (timeFormat === 'local') {
            if (relative)
                return relativeStrict
                    ? formatDistanceToNowStrict(parsed) + ` ${relativeLabel}`
                    : formatDistanceToNow(parsed) + ` ${relativeLabel}`;
            return dateTz.format(parsed, format);
        }
        const timezone = getTimezone(timeFormat);
        return dateTz.formatInTimeZone(parsed, timezone, format);
    }
    catch (e) {
        console.error('Error formatting date:', e);
        return '';
    }
}
export function isValidDate(date) {
    const d = parseISO(date);
    return d instanceof Date && !isNaN(d.getTime());
}
export function formatUTCOffset(offset, utc) {
    if (offset === undefined)
        return '';
    if (offset === 0)
        return `${utc}±00:00`;
    const absoluteValue = Math.abs(offset);
    const formattedOffset = absoluteValue > 9 ? `${absoluteValue}:00` : `0${absoluteValue}:00`;
    if (offset > 0)
        return `${utc}+${formattedOffset}`;
    if (offset < 0)
        return `${utc}-${formattedOffset}`;
}
export function getLocalTimezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
export function getLocalTime() {
    const localTimezone = getLocalTimezone();
    const localOption = TimezoneOptions.find(({ zones }) => zones === null || zones === void 0 ? void 0 : zones.includes(localTimezone));
    return localOption
        ? `${localOption.label} (${localOption.abbr})`
        : localTimezone;
}
export function getSelectedTimezone(timeFormat) {
    if (timeFormat === 'local')
        return getLocalTime();
    const selectedTimezone = Timezones[timeFormat];
    if (selectedTimezone)
        return `${timeFormat} (${selectedTimezone.abbr})`;
    return timeFormat;
}
export function getUTCString({ date = new Date(), hour = 0, minute = 0, second = 0, } = {}) {
    const utcTime = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), Number(hour), Number(minute), Number(second));
    return new Date(utcTime).toISOString();
}
