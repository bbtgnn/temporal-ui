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
export type XmarkFilledProps = typeof __propDef.props;
export type XmarkFilledEvents = typeof __propDef.events;
export type XmarkFilledSlots = typeof __propDef.slots;
export default class XmarkFilled extends SvelteComponentTyped<XmarkFilledProps, XmarkFilledEvents, XmarkFilledSlots> {
}
export {};
