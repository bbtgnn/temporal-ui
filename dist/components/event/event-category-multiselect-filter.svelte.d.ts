import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        compact?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EventCategoryMultiselectFilterProps = typeof __propDef.props;
export type EventCategoryMultiselectFilterEvents = typeof __propDef.events;
export type EventCategoryMultiselectFilterSlots = typeof __propDef.slots;
export default class EventCategoryMultiselectFilter extends SvelteComponentTyped<EventCategoryMultiselectFilterProps, EventCategoryMultiselectFilterEvents, EventCategoryMultiselectFilterSlots> {
}
export {};
