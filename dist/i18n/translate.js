import { t } from 'i18next';
const translateGeneric = (key, replace = {}) => {
    const [namespace, ...keys] = key.split('.');
    if (namespace && keys.length > 0) {
        const k = keys.join('.');
        return t(`${namespace}:${k}`, replace);
    }
};
export const createTranslate = () => {
    return translateGeneric;
};
export const translate = createTranslate();
