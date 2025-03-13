import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Skeleton;
    args: {
        class: string;
    };
    argTypes: {
        class: {
            control: "text";
            description: string;
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
export type SkeletonProps = typeof __propDef.props;
export type SkeletonEvents = typeof __propDef.events;
export type SkeletonSlots = typeof __propDef.slots;
export default class Skeleton extends SvelteComponentTyped<SkeletonProps, SkeletonEvents, SkeletonSlots> {
}
export {};
