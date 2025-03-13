import { SvelteComponentTyped } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: (HTMLAttributes<HTMLDivElement> & {
        content: string;
        language?: 'json' | 'text' | 'shell';
        editable?: boolean;
        inline?: boolean;
        testId?: string;
        copyable?: boolean;
        minHeight?: number;
        maxHeight?: number;
        label?: string;
    }) | (HTMLAttributes<HTMLDivElement> & {
        content: string;
        language?: 'json' | 'text' | 'shell';
        editable?: boolean;
        inline?: boolean;
        testId?: string;
        copyable?: boolean;
        minHeight?: number;
        maxHeight?: number;
        label?: string;
    } & {
        copyable: true;
        copyIconTitle: string;
        copySuccessIconTitle: string;
    });
    events: {
        change: CustomEvent<string>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CodeBlockProps = typeof __propDef.props;
export type CodeBlockEvents = typeof __propDef.events;
export type CodeBlockSlots = typeof __propDef.slots;
export default class CodeBlock extends SvelteComponentTyped<CodeBlockProps, CodeBlockEvents, CodeBlockSlots> {
}
export {};
