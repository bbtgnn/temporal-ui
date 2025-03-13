import { get } from 'svelte/store';
import { persistStore } from './persist-store';
export const authUser = persistStore('AuthUser', {});
export const getAuthUser = () => get(authUser);
export const setAuthUser = (user) => {
    const { accessToken, idToken, name, email, picture } = user;
    if (!accessToken) {
        throw new Error('No access token');
    }
    authUser.set({
        accessToken,
        idToken,
        name,
        email,
        picture,
    });
};
export const clearAuthUser = () => {
    authUser.set({});
};
