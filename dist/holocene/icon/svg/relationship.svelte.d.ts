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
export type RelationshipProps = typeof __propDef.props;
export type RelationshipEvents = typeof __propDef.events;
export type RelationshipSlots = typeof __propDef.slots;
export default class Relationship extends SvelteComponentTyped<RelationshipProps, RelationshipEvents, RelationshipSlots> {
}
export {};
