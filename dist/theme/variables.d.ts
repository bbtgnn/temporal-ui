export type Variable = keyof typeof variables;
declare const light: Record<CSSVariable, RGB>;
declare const dark: Record<CSSVariable, RGB>;
export declare const variables: {
    readonly '--color-text-black': {
        readonly light: "space-black";
        readonly dark: "space-black";
    };
    readonly '--color-text-white': {
        readonly light: "off-white";
        readonly dark: "off-white";
    };
    readonly '--color-text-primary': {
        readonly light: "space-black";
        readonly dark: "off-white";
    };
    readonly '--color-text-secondary': {
        readonly light: "slate.800";
        readonly dark: "slate.300";
    };
    readonly '--color-text-inverse': {
        readonly light: "off-white";
        readonly dark: "space-black";
    };
    readonly '--color-text-subtle': {
        readonly light: "slate.700";
        readonly dark: "slate.700";
    };
    readonly '--color-text-danger': {
        readonly light: "red.700";
        readonly dark: "red.400";
    };
    readonly '--color-text-information': {
        readonly light: "indigo.600";
        readonly dark: "indigo.500";
    };
    readonly '--color-text-success': {
        readonly light: "green.700";
        readonly dark: "green.600";
    };
    readonly '--color-text-warning': {
        readonly light: "yellow.600";
        readonly dark: "yellow.500";
    };
    readonly '--color-text-pink': {
        readonly light: "pink.800";
        readonly dark: "pink.400";
    };
    readonly '--color-text-brand': {
        readonly light: "indigo.600";
        readonly dark: "indigo.400";
    };
    readonly '--color-surface-background': {
        readonly light: "off-white";
        readonly dark: "space-black";
    };
    readonly '--color-surface-primary': {
        readonly light: "white";
        readonly dark: "black";
    };
    readonly '--color-surface-secondary': {
        readonly light: "off-white";
        readonly dark: "off-black";
    };
    readonly '--color-surface-subtle': {
        readonly light: "slate.100";
        readonly dark: "slate.800";
    };
    readonly '--color-surface-table': {
        readonly light: "space-black";
        readonly dark: "slate.900";
    };
    readonly '--color-surface-success': {
        readonly light: "green.100";
        readonly dark: "green.950";
    };
    readonly '--color-surface-success-loud': {
        readonly light: "green.600";
        readonly dark: "green.600";
    };
    readonly '--color-surface-information': {
        readonly light: "indigo.100";
        readonly dark: "indigo.950";
    };
    readonly '--color-surface-information-loud': {
        readonly light: "indigo.600";
        readonly dark: "indigo.600";
    };
    readonly '--color-surface-danger': {
        readonly light: "red.100";
        readonly dark: "red.950";
    };
    readonly '--color-surface-warning': {
        readonly light: "yellow.100";
        readonly dark: "yellow.950";
    };
    readonly '--color-surface-brand': {
        readonly light: "indigo.600";
        readonly dark: "indigo.500";
    };
    readonly '--color-surface-inverse': {
        readonly light: "space-black";
        readonly dark: "off-white";
    };
    readonly '--color-surface-black': {
        readonly light: "black";
        readonly dark: "black";
    };
    readonly '--color-surface-code-block': {
        readonly light: "slate.50";
        readonly dark: "code-black";
    };
    readonly '--color-interactive-surface': {
        readonly light: "indigo.600";
        readonly dark: "indigo.600";
    };
    readonly '--color-interactive-hover': {
        readonly light: "indigo.700";
        readonly dark: "indigo.700";
    };
    readonly '--color-interactive-active': {
        readonly light: "indigo.800";
        readonly dark: "indigo.900";
    };
    readonly '--color-interactive-secondary-surface': {
        readonly light: "white";
        readonly dark: "slate.500";
    };
    readonly '--color-interactive-secondary-hover': {
        readonly light: "slate.50";
        readonly dark: "slate.900";
    };
    readonly '--color-interactive-secondary-active': {
        readonly light: "slate.200";
        readonly dark: "slate.800";
    };
    readonly '--color-interactive-danger-surface': {
        readonly light: "red.300";
        readonly dark: "red.300";
    };
    readonly '--color-interactive-danger-hover': {
        readonly light: "red.400";
        readonly dark: "red.400";
    };
    readonly '--color-interactive-danger-active': {
        readonly light: "red.500";
        readonly dark: "red.500";
    };
    readonly '--color-interactive-ghost-hover': {
        readonly light: "slate.100";
        readonly dark: "slate.700";
    };
    readonly '--color-interactive-ghost-active': {
        readonly light: "slate.100";
        readonly dark: "slate.950";
    };
    readonly '--color-interactive-table-hover': {
        readonly light: "indigo.100";
        readonly dark: "slate.900";
    };
    readonly '--color-border-primary': {
        readonly light: "space-black";
        readonly dark: "slate.400";
    };
    readonly '--color-border-secondary': {
        readonly light: "slate.300";
        readonly dark: "slate.700";
    };
    readonly '--color-border-subtle': {
        readonly light: "slate.200";
        readonly dark: "slate.800";
    };
    readonly '--color-border-table': {
        readonly light: "space-black";
        readonly dark: "slate.900";
    };
    readonly '--color-border-inverse': {
        readonly light: "off-white";
        readonly dark: "space-black";
    };
    readonly '--color-border-information': {
        readonly light: "indigo.600";
        readonly dark: "indigo.500";
    };
    readonly '--color-border-success': {
        readonly light: "green.600";
        readonly dark: "green.700";
    };
    readonly '--color-border-warning': {
        readonly light: "yellow.400";
        readonly dark: "yellow.700";
    };
    readonly '--color-border-danger': {
        readonly light: "red.500";
        readonly dark: "red.400";
    };
    readonly '--color-border-focus-info': {
        readonly light: "indigo.600";
        readonly dark: "indigo.600";
    };
    readonly '--color-border-focus-danger': {
        readonly light: "red.600";
        readonly dark: "red.600";
    };
};
export { light, dark };
