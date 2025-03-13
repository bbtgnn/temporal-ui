/// <reference types="svelte" />
import type { User } from '../types/global';
export declare const authUser: Pick<import("svelte/store").Writable<User>, "update" | "subscribe" | "set">;
export declare const getAuthUser: () => User;
export declare const setAuthUser: (user: User) => void;
export declare const clearAuthUser: () => void;
