import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FeedbackButtonProps = typeof __propDef.props;
export type FeedbackButtonEvents = typeof __propDef.events;
export type FeedbackButtonSlots = typeof __propDef.slots;
export default class FeedbackButton extends SvelteComponentTyped<FeedbackButtonProps, FeedbackButtonEvents, FeedbackButtonSlots> {
}
export {};
