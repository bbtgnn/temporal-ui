import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        placeholder?: string;
        label?: string;
        value?: string;
        name?: string;
        icon?: boolean;
        id?: string;
    };
    events: {
        submit: SubmitEvent;
        input: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SearchProps = typeof __propDef.props;
export type SearchEvents = typeof __propDef.events;
export type SearchSlots = typeof __propDef.slots;
export default class Search extends SvelteComponentTyped<SearchProps, SearchEvents, SearchSlots> {
}
export {};
