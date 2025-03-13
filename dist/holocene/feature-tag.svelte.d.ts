import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        feature: string;
        alpha?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FeatureTagProps = typeof __propDef.props;
export type FeatureTagEvents = typeof __propDef.events;
export type FeatureTagSlots = typeof __propDef.slots;
export default class FeatureTag extends SvelteComponentTyped<FeatureTagProps, FeatureTagEvents, FeatureTagSlots> {
}
export {};
