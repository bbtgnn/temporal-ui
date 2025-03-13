import type { Story } from '@storybook/addon-svelte-csf';
import { within } from '@storybook/test';
type PlayFunction = Story['$$prop_def']['play'];
export declare const shouldNotBeTransparent: (fn: (canvas: ReturnType<typeof within>) => PlayFunction) => ({ canvasElement }: {
    canvasElement: any;
}) => void;
export {};
