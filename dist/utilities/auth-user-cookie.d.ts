import type { User } from '../types/global';
export declare const getAuthUserCookie: (isBrowser?: boolean) => User;
export declare const cleanAuthUserCookie: (isBrowser?: boolean) => void;
