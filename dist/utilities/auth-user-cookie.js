import { BROWSER } from 'esm-env';
import { atob } from './atob';
import { parseWithBigInt } from './parse-with-big-int';
const cookieName = 'user';
export const getAuthUserCookie = (isBrowser = BROWSER) => {
    if (!isBrowser)
        return {};
    const cookies = document.cookie.split(';');
    let i = 0;
    let next = cookies.find((c) => c.includes(cookieName + i));
    let userBase64 = '';
    while (next) {
        const [_, value] = next.split('=');
        userBase64 += value;
        i++;
        next = cookies.find((c) => c.includes(cookieName + i));
    }
    if (userBase64) {
        try {
            const userS = atob(userBase64);
            const user = parseWithBigInt(userS);
            return {
                accessToken: user === null || user === void 0 ? void 0 : user.AccessToken,
                idToken: user === null || user === void 0 ? void 0 : user.IDToken,
                name: user === null || user === void 0 ? void 0 : user.Name,
                picture: user === null || user === void 0 ? void 0 : user.Picture,
                email: user === null || user === void 0 ? void 0 : user.Email,
            };
        }
        catch (e) {
            console.error(e);
        }
    }
    return {};
};
export const cleanAuthUserCookie = (isBrowser = BROWSER) => {
    if (!isBrowser)
        return;
    const cookies = document.cookie.split(';');
    let i = 0;
    let next = cookies.find((c) => c.includes(cookieName + i));
    while (next) {
        const [name] = next.split('=');
        document.cookie = `${name}=; max-age=-1; path=/`;
        i++;
        next = cookies.find((c) => c.includes(cookieName + i));
    }
};
