import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        endpoint?: string;
        passToken?: boolean;
        includeCreds?: boolean;
        error?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CodecEndpointSettingsProps = typeof __propDef.props;
export type CodecEndpointSettingsEvents = typeof __propDef.events;
export type CodecEndpointSettingsSlots = typeof __propDef.slots;
export default class CodecEndpointSettings extends SvelteComponentTyped<CodecEndpointSettingsProps, CodecEndpointSettingsEvents, CodecEndpointSettingsSlots> {
}
export {};
