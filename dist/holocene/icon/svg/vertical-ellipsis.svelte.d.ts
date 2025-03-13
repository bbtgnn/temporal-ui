import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type VerticalEllipsisProps = typeof __propDef.props;
export type VerticalEllipsisEvents = typeof __propDef.events;
export type VerticalEllipsisSlots = typeof __propDef.slots;
export default class VerticalEllipsis extends SvelteComponentTyped<VerticalEllipsisProps, VerticalEllipsisEvents, VerticalEllipsisSlots> {
}
export {};
