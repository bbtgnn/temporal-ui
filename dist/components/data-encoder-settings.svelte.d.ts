import { SvelteComponentTyped } from "svelte";
export declare const viewDataEncoderSettings: import("svelte/store").Writable<boolean>;
declare const __propDef: {
    props: {
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DataEncoderSettingsProps = typeof __propDef.props;
export type DataEncoderSettingsEvents = typeof __propDef.events;
export type DataEncoderSettingsSlots = typeof __propDef.slots;
export default class DataEncoderSettings extends SvelteComponentTyped<DataEncoderSettingsProps, DataEncoderSettingsEvents, DataEncoderSettingsSlots> {
}
export {};
