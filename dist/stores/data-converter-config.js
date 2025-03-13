import { writable } from 'svelte/store';
export const lastDataConverterStatus = writable('notRequested');
export function setLastDataConverterFailure(error) {
    lastDataConverterStatus.set('error');
    if (error)
        console.error(error);
}
export function setLastDataConverterSuccess() {
    lastDataConverterStatus.set('success');
}
export function resetLastDataConverterSuccess() {
    lastDataConverterStatus.set('notRequested');
}
