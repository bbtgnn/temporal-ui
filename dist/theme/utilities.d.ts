import type { Variable } from './variables';
export declare const rgb: (hexColor: HexColor) => RGB;
export declare const css: (variable: Variable) => string;
export declare const toColor: (name: ColorName) => RGB;
export declare const isHexColor: (color: unknown) => color is `#${string}`;
export declare const isPaletteColor: (color: string) => color is "blue" | "cyan" | "green" | "indigo" | "orange" | "pink" | "purple" | "red" | "slate" | "yellow";
export declare const isShade: (shade: unknown) => shade is Shade;
