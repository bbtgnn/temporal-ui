export declare const has: <K extends readonly string[], V = unknown>(target: unknown, ...properties: K) => target is Record<K[number], V>;
export declare const hasAnyProperties: (obj: unknown) => obj is boolean;
