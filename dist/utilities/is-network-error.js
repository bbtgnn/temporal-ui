import { has } from './has';
export function isNetworkError(error) {
    if (!error)
        return false;
    return has(error, 'statusCode', 'statusText', 'response');
}
