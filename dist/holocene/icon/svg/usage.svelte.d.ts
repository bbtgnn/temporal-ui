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
export type UsageProps = typeof __propDef.props;
export type UsageEvents = typeof __propDef.events;
export type UsageSlots = typeof __propDef.slots;
export default class Usage extends SvelteComponentTyped<UsageProps, UsageEvents, UsageSlots> {
}
export {};
