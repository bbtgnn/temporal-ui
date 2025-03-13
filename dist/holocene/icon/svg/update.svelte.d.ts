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
export type UpdateProps = typeof __propDef.props;
export type UpdateEvents = typeof __propDef.events;
export type UpdateSlots = typeof __propDef.slots;
export default class Update extends SvelteComponentTyped<UpdateProps, UpdateEvents, UpdateSlots> {
}
export {};
