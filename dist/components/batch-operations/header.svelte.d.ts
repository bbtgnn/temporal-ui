import { SvelteComponentTyped } from "svelte";
import type { BatchOperation } from '../../types/batch';
declare const __propDef: {
    props: {
        operation: BatchOperation;
    };
    events: {
        toggleAutoRefresh: CustomEvent<{
            checked: boolean;
        }>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HeaderProps = typeof __propDef.props;
export type HeaderEvents = typeof __propDef.events;
export type HeaderSlots = typeof __propDef.slots;
export default class Header extends SvelteComponentTyped<HeaderProps, HeaderEvents, HeaderSlots> {
}
export {};
