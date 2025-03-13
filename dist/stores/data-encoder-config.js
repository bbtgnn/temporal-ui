import { writable } from 'svelte/store';
import { persistStore } from './persist-store';
import { has } from '../utilities/has';
export const codecEndpoint = persistStore('endpoint', null, true);
export const passAccessToken = persistStore('passAccessToken', false, true);
export const includeCredentials = persistStore('includeCredentials', false, true);
export const overrideRemoteCodecConfiguration = persistStore('overrideRemoteCodecConfiguration', false, true);
export const lastDataEncoderStatus = writable('notRequested');
export const lastDataEncoderError = writable('');
export function setLastDataEncoderFailure(error) {
    lastDataEncoderStatus.set('error');
    if (error && has(error, 'message') && typeof error.message === 'string') {
        lastDataEncoderError.set(error.message);
    }
    else {
        lastDataEncoderError.set('');
    }
}
export function setLastDataEncoderSuccess() {
    lastDataEncoderStatus.set('success');
}
export function resetLastDataEncoderSuccess() {
    lastDataEncoderStatus.set('notRequested');
}
