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
export type FeedbackProps = typeof __propDef.props;
export type FeedbackEvents = typeof __propDef.events;
export type FeedbackSlots = typeof __propDef.slots;
export default class Feedback extends SvelteComponentTyped<FeedbackProps, FeedbackEvents, FeedbackSlots> {
}
export {};
