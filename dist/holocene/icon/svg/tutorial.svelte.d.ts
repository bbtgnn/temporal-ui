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
export type TutorialProps = typeof __propDef.props;
export type TutorialEvents = typeof __propDef.events;
export type TutorialSlots = typeof __propDef.slots;
export default class Tutorial extends SvelteComponentTyped<TutorialProps, TutorialEvents, TutorialSlots> {
}
export {};
