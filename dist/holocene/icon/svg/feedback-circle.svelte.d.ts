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
export type FeedbackCircleProps = typeof __propDef.props;
export type FeedbackCircleEvents = typeof __propDef.events;
export type FeedbackCircleSlots = typeof __propDef.slots;
export default class FeedbackCircle extends SvelteComponentTyped<FeedbackCircleProps, FeedbackCircleEvents, FeedbackCircleSlots> {
}
export {};
