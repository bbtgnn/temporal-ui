import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof CollapsibleDivider;
    args: {
        label: string;
    };
    argTypes: {
        label: {
            name: string;
            control: "text";
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
export type CollapsibleDividerProps = typeof __propDef.props;
export type CollapsibleDividerEvents = typeof __propDef.events;
export type CollapsibleDividerSlots = typeof __propDef.slots;
export default class CollapsibleDivider extends SvelteComponentTyped<CollapsibleDividerProps, CollapsibleDividerEvents, CollapsibleDividerSlots> {
}
export {};
