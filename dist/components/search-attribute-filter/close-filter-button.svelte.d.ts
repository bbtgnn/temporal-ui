import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CloseFilterButtonProps = typeof __propDef.props;
export type CloseFilterButtonEvents = typeof __propDef.events;
export type CloseFilterButtonSlots = typeof __propDef.slots;
export default class CloseFilterButton extends SvelteComponentTyped<CloseFilterButtonProps, CloseFilterButtonEvents, CloseFilterButtonSlots> {
}
export {};
