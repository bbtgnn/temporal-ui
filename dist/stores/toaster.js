import { writable } from 'svelte/store';
import { v4 } from 'uuid';
const toasts = writable([]);
const push = (toast) => {
    const toastWithDefaults = {
        id: v4(),
        duration: 3000,
        variant: 'primary',
        ...toast,
    };
    toasts.update((ts) => [...ts, toastWithDefaults]);
    const timeoutId = setTimeout(() => {
        pop(toastWithDefaults.id);
        clearTimeout(timeoutId);
    }, toastWithDefaults.duration);
};
const pop = (id) => {
    toasts.update((ts) => ts.filter((t) => t.id !== id));
};
const clear = () => {
    toasts.set([]);
};
export const toaster = {
    push,
    pop,
    clear,
    toasts,
    set: toasts.set,
    subscribe: toasts.subscribe,
    update: toasts.update,
};
