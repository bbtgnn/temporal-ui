import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof EmptyState;
    args: {
        title: string;
        content: string;
        error: string;
        icon: "comet";
    };
    argTypes: {
        title: {
            control: "text";
        };
        content: {
            control: "text";
        };
        error: {
            control: "text";
        };
        icon: {
            control: "select";
            options: string[];
            table: {
                category: string;
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
export type EmptyStateProps = typeof __propDef.props;
export type EmptyStateEvents = typeof __propDef.events;
export type EmptyStateSlots = typeof __propDef.slots;
export default class EmptyState extends SvelteComponentTyped<EmptyStateProps, EmptyStateEvents, EmptyStateSlots> {
}
export {};
