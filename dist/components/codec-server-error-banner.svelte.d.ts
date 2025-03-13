import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        fallback: {};
    };
};
export type CodecServerErrorBannerProps = typeof __propDef.props;
export type CodecServerErrorBannerEvents = typeof __propDef.events;
export type CodecServerErrorBannerSlots = typeof __propDef.slots;
export default class CodecServerErrorBanner extends SvelteComponentTyped<CodecServerErrorBannerProps, CodecServerErrorBannerEvents, CodecServerErrorBannerSlots> {
}
export {};
