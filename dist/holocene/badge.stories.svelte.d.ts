import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Badge;
    args: {
        count: number;
        label: string;
    };
    argTypes: {
        label: {
            control: "text";
        };
        count: {
            control: "number";
            min: number;
            max: number;
            step: number;
        };
    };
    parameters: {
        controls: {
            exclude: string[];
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
export type BadgeProps = typeof __propDef.props;
export type BadgeEvents = typeof __propDef.events;
export type BadgeSlots = typeof __propDef.slots;
export default class Badge extends SvelteComponentTyped<BadgeProps, BadgeEvents, BadgeSlots> {
}
export {};
