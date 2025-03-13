/// <reference types="svelte" />
import { type Readable } from 'svelte/store';
import { type CoreUser } from '../models/core-user';
export declare const defaultCoreUserStore: Readable<CoreUser>;
export declare const coreUserStore: () => Readable<CoreUser>;
