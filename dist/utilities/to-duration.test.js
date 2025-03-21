import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { durations, fromDate, fromSeconds, isDuration, isDurationKey, isDurationString, isValidDurationQuery, toDate, toDuration, tomorrow, toString, } from './to-duration';
describe('toDuration', () => {
    it('should correctly parse "Last 10 minutes"', () => {
        expect(toDuration('Last 10 minutes')).toEqual({ minutes: 10 });
    });
    it('should correctly parse "Last 60 minutes"', () => {
        expect(toDuration('Last 60 minutes')).toEqual({ minutes: 60 });
    });
    it('should correctly parse "Last 3 hours"', () => {
        expect(toDuration('Last 3 hours')).toEqual({ hours: 3 });
    });
    it('should correctly parse "Last 24 hours"', () => {
        expect(toDuration('Last 24 hours')).toEqual({ hours: 24 });
    });
    it('should correctly parse "Last 3 days"', () => {
        expect(toDuration('Last 3 days')).toEqual({ days: 3 });
    });
    it('should correctly parse "Last 7 days"', () => {
        expect(toDuration('Last 7 days')).toEqual({ days: 7 });
    });
    it('should correctly parse "Last 30 days"', () => {
        expect(toDuration('Last 30 days')).toEqual({ days: 30 });
    });
    it('should correctly parse "Last 3 months"', () => {
        expect(toDuration('Last 3 months')).toEqual({ months: 3 });
    });
    it('should correctly parse "10 minutes"', () => {
        expect(toDuration('10 minutes')).toEqual({ minutes: 10 });
    });
    it('should correctly parse "60 minutes"', () => {
        expect(toDuration('60 minutes')).toEqual({ minutes: 60 });
    });
    it('should correctly parse "3 hours"', () => {
        expect(toDuration('3 hours')).toEqual({ hours: 3 });
    });
    it('should correctly parse "24 hours"', () => {
        expect(toDuration('24 hours')).toEqual({ hours: 24 });
    });
    it('should correctly parse "3 days"', () => {
        expect(toDuration('3 days')).toEqual({ days: 3 });
    });
    it('should correctly parse "7 days"', () => {
        expect(toDuration('7 days')).toEqual({ days: 7 });
    });
    it('should correctly parse "30 days"', () => {
        expect(toDuration('30 days')).toEqual({ days: 30 });
    });
    it('should correctly parse "3 months"', () => {
        expect(toDuration('3 months')).toEqual({ months: 3 });
    });
    it('should correctly parse "1 day"', () => {
        expect(toDuration('1 day')).toEqual({ days: 1 });
    });
    it('should correctly parse "1 month"', () => {
        expect(toDuration('1 month')).toEqual({ months: 1 });
    });
    it('should correctly parse "3 months"', () => {
        expect(toDuration('3 months, 4 days')).toEqual({ months: 3, days: 4 });
    });
});
describe('toDate', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date('2020-01-01').getTime());
    });
    afterEach(() => {
        vi.useRealTimers();
    });
    it('should produce a date based on a duration', () => {
        const ninetyDaysEarlier = '2019-10-03T00:00:00.000Z';
        const result = toDate({ days: 90 });
        expect(result).toBe(ninetyDaysEarlier);
    });
    it('should produce a date based on a duration string', () => {
        const ninetyDaysEarlier = '2019-10-03T00:00:00.000Z';
        const result = toDate('90 days');
        expect(result).toBe(ninetyDaysEarlier);
    });
});
describe('tomorrow', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date('2020-01-01').getTime());
    });
    afterEach(() => {
        vi.useRealTimers();
    });
    it('should create a date 24 hours in the future', () => {
        expect(tomorrow()).toBe('2020-01-02T00:00:00.000Z');
    });
    it('should create a date 24 hours in the future from an argument', () => {
        expect(tomorrow(new Date('2022-07-01'))).toBe('2022-07-02T00:00:00.000Z');
    });
});
describe('fromDate', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date('2020-01-01').getTime());
    });
    afterEach(() => {
        vi.useRealTimers();
    });
    it('should produce a duration based on a 2 years in the past', () => {
        const twoYearsEarlier = '2018-01-01T00:00:00Z';
        const result = fromDate(twoYearsEarlier);
        expect(result).toMatchObject({ years: 2 });
    });
    it('should produce a duration based on a 90 days in the past', () => {
        const ninetyDaysEarlier = '2019-10-03T00:00:00Z';
        const result = fromDate(ninetyDaysEarlier);
        expect(result).toMatchObject({ months: 2, days: 29 });
    });
    it('should produce a duration based on a 60 days in the past', () => {
        const sixtyDaysEarlier = '2019-11-01T00:00:00Z';
        const result = fromDate(sixtyDaysEarlier);
        expect(result).toMatchObject({ months: 2 });
    });
    it('should produce a duration based on 23 hours in the past', () => {
        const twentyThreeHoursEarlier = '2019-12-31T01:00:00Z';
        const result = fromDate(twentyThreeHoursEarlier);
        expect(result).toMatchObject({ hours: 23 });
    });
    it('should produce a duration based on 30 minutes in the past', () => {
        const thirtyMinutesEarlier = '2019-12-31T23:30:00Z';
        const result = fromDate(thirtyMinutesEarlier);
        expect(result).toMatchObject({ minutes: 30 });
    });
    it('should produce a duration based on 10 seconds in the past', () => {
        const tenSecondsEarlier = '2019-12-31T23:59:50Z';
        const result = fromDate(tenSecondsEarlier);
        expect(result).toMatchObject({ seconds: 10 });
    });
    it('should determine a duration from a provided end date', () => {
        const endDate = '2022-07-01T11:11:11Z';
        const elevenMinutesAndElevenSecondsEarlier = '2022-07-01T11:00:00Z';
        const result = fromDate(elevenMinutesAndElevenSecondsEarlier, endDate);
        expect(result).toMatchObject({ minutes: 11, seconds: 11 });
    });
});
describe('isDuration', () => {
    it('should return false if given null', () => {
        expect(isDuration(null)).toBe(false);
    });
    it('should return false if given an object with an invalid key', () => {
        expect(isDuration({ invalid: 4 })).toBe(false);
    });
    it('should return true if given an object with an valid key', () => {
        expect(isDuration({ years: 4 })).toBe(true);
    });
});
describe('isDurationKey', () => {
    it('should return false if given a number', () => {
        expect(isDurationKey(2)).toBe(false);
    });
    it('should return false if given a boolean', () => {
        expect(isDurationKey(true)).toBe(false);
    });
    it('should return false if given an object', () => {
        expect(isDurationKey({})).toBe(false);
    });
    it('should return false if given an array', () => {
        expect(isDurationKey([])).toBe(false);
    });
    it('should return true if given "years" as a duration key', () => {
        expect(isDurationKey('years')).toBe(true);
    });
    it('should return true if given "months" as a duration key', () => {
        expect(isDurationKey('months')).toBe(true);
    });
    it('should return true if given "weeks" as a duration key', () => {
        expect(isDurationKey('weeks')).toBe(true);
    });
    it('should return true if given "days" as a duration key', () => {
        expect(isDurationKey('days')).toBe(true);
    });
    it('should return true if given "hours" as a duration key', () => {
        expect(isDurationKey('hours')).toBe(true);
    });
    it('should return true if given "minutes" as a duration key', () => {
        expect(isDurationKey('minutes')).toBe(true);
    });
    it('should return true if given "seconds" as a duration key', () => {
        expect(isDurationKey('seconds')).toBe(true);
    });
    it('should return false if given an invalid string', () => {
        expect(isDurationKey('not valid')).toBe(false);
    });
});
describe('isDurationString', () => {
    it('should return true for "24 hours"', () => {
        expect(isDurationString('24 hours')).toBe(true);
    });
    it('should return true for "3 days, 24 hours"', () => {
        expect(isDurationString('24 hours, 3 days')).toBe(true);
    });
    it('should return false for null', () => {
        expect(isDurationString(null)).toBe(false);
    });
    it('should return false for undefined', () => {
        expect(isDurationString(undefined)).toBe(false);
    });
    it('should return false for "undefined"', () => {
        expect(isDurationString('undefined')).toBe(false);
    });
});
describe('toString', () => {
    it('should correctly format 3 years', () => {
        expect(toString({ years: 3 })).toBe('3 years');
    });
    it('should correctly format 3 months', () => {
        expect(toString({ months: 3 })).toBe('3 months');
    });
    it('should correctly format 3 weeks', () => {
        expect(toString({ weeks: 3 })).toBe('3 weeks');
    });
    it('should correctly format 3 days', () => {
        expect(toString({ days: 3 })).toBe('3 days');
    });
    it('should correctly format 3 hours', () => {
        expect(toString({ hours: 3 })).toBe('3 hours');
    });
    it('should correctly format 3 minutes', () => {
        expect(toString({ minutes: 3 })).toBe('3 minutes');
    });
    it('should correctly format 3 seconds', () => {
        expect(toString({ seconds: 3 })).toBe('3 seconds');
    });
    it('should correctly format 1 year', () => {
        expect(toString({ years: 1 })).toBe('1 year');
    });
    it('should correctly format 1 month', () => {
        expect(toString({ months: 1 })).toBe('1 month');
    });
    it('should correctly format 1 week', () => {
        expect(toString({ weeks: 1 })).toBe('1 week');
    });
    it('should correctly format 1 day', () => {
        expect(toString({ days: 1 })).toBe('1 day');
    });
    it('should correctly format 1 hour', () => {
        expect(toString({ hours: 1 })).toBe('1 hour');
    });
    it('should correctly format 1 minute', () => {
        expect(toString({ minutes: 1 })).toBe('1 minute');
    });
    it('should correctly format 1 second', () => {
        expect(toString({ seconds: 1 })).toBe('1 second');
    });
});
describe('fromSeconds', () => {
    it('should return an empty string given a string that does not end in seconds', () => {
        expect(fromSeconds('3600m')).toEqual('');
    });
    it('should correctly format milliseconds', () => {
        expect(fromSeconds('0.001s')).toEqual('1 millisecond');
        expect(fromSeconds('0.006s')).toEqual('6 milliseconds');
        expect(fromSeconds('0.6s')).toEqual('600 milliseconds');
        expect(fromSeconds('0.06s')).toEqual('60 milliseconds');
        expect(fromSeconds('0.0006s')).toEqual('0.6 milliseconds');
        expect(fromSeconds('0.00006s')).toEqual('0.06 milliseconds');
        expect(fromSeconds('0.000000001s')).toEqual('0.000001 milliseconds');
        expect(fromSeconds('0.000000006s')).toEqual('0.000006 milliseconds');
    });
    it('should correctly format seconds', () => {
        expect(fromSeconds('0s')).toEqual('');
        expect(fromSeconds('0.00s')).toEqual('');
        expect(fromSeconds('1s')).toEqual('1 second');
        expect(fromSeconds('6s')).toEqual('6 seconds');
        expect(fromSeconds('6.00s')).toEqual('6 seconds');
        expect(fromSeconds('6.412382134s')).toEqual('6 seconds, 412 milliseconds');
        expect(fromSeconds('59.32322s')).toEqual('59 seconds, 323 milliseconds');
    });
    it('should correctly format minutes', () => {
        expect(fromSeconds('60s')).toEqual('1 minute');
        expect(fromSeconds('61.1234123412s')).toEqual('1 minute, 1 second');
    });
    it('should correctly format hours', () => {
        expect(fromSeconds('3600s')).toEqual('1 hour');
    });
    it('should correctly format hours and minutes', () => {
        expect(fromSeconds('3660s')).toEqual('1 hour, 1 minute');
    });
    it('should correctly format hours, minutes and seconds', () => {
        expect(fromSeconds('3661s')).toEqual('1 hour, 1 minute, 1 second');
        expect(fromSeconds('3666s')).toEqual('1 hour, 1 minute, 6 seconds');
    });
    it('should correctly format hours, minutes, seconds and milliseconds', () => {
        expect(fromSeconds('3661s')).toEqual('1 hour, 1 minute, 1 second');
        expect(fromSeconds('3661.06s')).toEqual('1 hour, 1 minute, 1 second');
        expect(fromSeconds('3661.006s')).toEqual('1 hour, 1 minute, 1 second');
        expect(fromSeconds('2148128.1234123412s')).toEqual('24 days, 20 hours, 42 minutes, 8 seconds');
    });
    it('should return an empty string if given bogus input', () => {
        expect(fromSeconds('bogus')).toEqual('');
        expect(fromSeconds('bogus.01')).toEqual('');
        expect(fromSeconds('10.bogus')).toEqual('');
    });
});
describe('durations', () => {
    it('should validate that durations has not accidentally changed', () => {
        expect(durations).toMatchInlineSnapshot(`
      [
        "15 minutes",
        "1 hour",
        "3 hours",
        "24 hours",
        "3 days",
        "7 days",
        "30 days",
        "90 days",
      ]
    `);
    });
});
describe('isValidDurationQuery', () => {
    it('should return true if the value is a valid number (for nanoseconds)', () => {
        expect(isValidDurationQuery('01')).toBe(true);
        expect(isValidDurationQuery('-01')).toBe(true);
        expect(isValidDurationQuery('1')).toBe(true);
        expect(isValidDurationQuery('-1')).toBe(true);
        expect(isValidDurationQuery('10')).toBe(true);
        expect(isValidDurationQuery('-10')).toBe(true);
    });
    it('should return false if the value is not a valid number (for nanoseconds)', () => {
        expect(isValidDurationQuery('test')).toBe(false);
        expect(isValidDurationQuery('1e6t')).toBe(false);
    });
    it('should return true if the value is in a valid HH:MM:SS format', () => {
        expect(isValidDurationQuery('00')).toBe(true);
        expect(isValidDurationQuery('00:00:00')).toBe(true);
        expect(isValidDurationQuery('0:00:00')).toBe(true);
        expect(isValidDurationQuery('01:00:00')).toBe(true);
        expect(isValidDurationQuery('90:00:00')).toBe(true);
        expect(isValidDurationQuery('10000:00:00')).toBe(true);
        expect(isValidDurationQuery('00:01:00')).toBe(true);
        expect(isValidDurationQuery('00:59:00')).toBe(true);
        expect(isValidDurationQuery('00:00:01')).toBe(true);
        expect(isValidDurationQuery('00:00:59')).toBe(true);
    });
    it('should return false if the value is not in a valid HH:MM:SS format', () => {
        expect(isValidDurationQuery('00:00')).toBe(false);
        expect(isValidDurationQuery('00:60:00')).toBe(false);
        expect(isValidDurationQuery('00:00:60')).toBe(false);
    });
    it('should return true if the value is in valid Golang duration format', () => {
        expect(isValidDurationQuery('1000ns')).toBe(true);
        expect(isValidDurationQuery('-1000ns')).toBe(true);
        expect(isValidDurationQuery('2us')).toBe(true);
        expect(isValidDurationQuery('-2us')).toBe(true);
        expect(isValidDurationQuery('3µs')).toBe(true);
        expect(isValidDurationQuery('-3µs')).toBe(true);
        expect(isValidDurationQuery('4ms')).toBe(true);
        expect(isValidDurationQuery('-4ms')).toBe(true);
        expect(isValidDurationQuery('5s')).toBe(true);
        expect(isValidDurationQuery('-5s')).toBe(true);
        expect(isValidDurationQuery('60m')).toBe(true);
        expect(isValidDurationQuery('-60m')).toBe(true);
        expect(isValidDurationQuery('700h')).toBe(true);
        expect(isValidDurationQuery('-700h')).toBe(true);
        expect(isValidDurationQuery('2h30m')).toBe(true);
    });
    it('should return false if the value is not in a valid Golang duration format', () => {
        expect(isValidDurationQuery('1 hour')).toBe(false);
        expect(isValidDurationQuery('60min')).toBe(false);
        expect(isValidDurationQuery('10 s')).toBe(false);
        expect(isValidDurationQuery(' 100 ms')).toBe(false);
    });
});
