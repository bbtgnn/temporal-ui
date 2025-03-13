import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AsyncTestProps = typeof __propDef.props;
export type AsyncTestEvents = typeof __propDef.events;
export type AsyncTestSlots = typeof __propDef.slots;
export default class AsyncTest extends SvelteComponentTyped<AsyncTestProps, AsyncTestEvents, AsyncTestSlots> {
}
export {};
