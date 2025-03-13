export const getExponentialBackoffSeconds = (initialIntervalSeconds, attempt, maxAttempts) => {
    const maxIntervalSeconds = 3600;
    const growthFactor = Math.pow(maxIntervalSeconds / initialIntervalSeconds, 1 / maxAttempts);
    const exponentialBackoff = initialIntervalSeconds * Math.pow(growthFactor, attempt);
    const intervalSeconds = Math.min(maxIntervalSeconds, Math.round(exponentialBackoff));
    return intervalSeconds;
};
