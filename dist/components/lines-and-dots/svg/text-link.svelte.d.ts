import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        point?: [number, number];
        fontSize?: string;
        href: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TextLinkProps = typeof __propDef.props;
export type TextLinkEvents = typeof __propDef.events;
export type TextLinkSlots = typeof __propDef.slots;
export default class TextLink extends SvelteComponentTyped<TextLinkProps, TextLinkEvents, TextLinkSlots> {
}
export {};
