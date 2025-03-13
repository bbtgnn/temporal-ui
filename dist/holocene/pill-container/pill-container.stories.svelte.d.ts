import { SvelteComponentTyped } from "svelte";
import Pill from './pill.svelte';
export declare const meta: {
    title: string;
    component: typeof PillContainer;
    subcomponents: {
        Pill: typeof Pill;
    };
    argTypes: {
        PILLS: {
            name: string;
            table: {
                disable: true;
            };
        };
    };
};
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PillContainerProps = typeof __propDef.props;
export type PillContainerEvents = typeof __propDef.events;
export type PillContainerSlots = typeof __propDef.slots;
export default class PillContainer extends SvelteComponentTyped<PillContainerProps, PillContainerEvents, PillContainerSlots> {
}
export {};
