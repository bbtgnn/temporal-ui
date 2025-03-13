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
export type FilterSolidProps = typeof __propDef.props;
export type FilterSolidEvents = typeof __propDef.events;
export type FilterSolidSlots = typeof __propDef.slots;
export default class FilterSolid extends SvelteComponentTyped<FilterSolidProps, FilterSolidEvents, FilterSolidSlots> {
}
export {};
