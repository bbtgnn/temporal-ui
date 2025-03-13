import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        includesTaskQueueType: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PollerIconProps = typeof __propDef.props;
export type PollerIconEvents = typeof __propDef.events;
export type PollerIconSlots = typeof __propDef.slots;
export default class PollerIcon extends SvelteComponentTyped<PollerIconProps, PollerIconEvents, PollerIconSlots> {
}
export {};
