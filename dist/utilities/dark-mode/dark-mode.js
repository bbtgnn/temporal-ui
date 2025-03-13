import { persistStore } from '../../stores/persist-store';
export const useDarkMode = persistStore('dark mode', !!import.meta.env.VITE_DARK_MODE, true);
export const darkMode = (node) => {
    useDarkMode.subscribe((value) => {
        if (value) {
            node.dataset.theme = 'dark';
        }
        else {
            node.dataset.theme = 'light';
        }
    });
};
