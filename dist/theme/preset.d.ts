declare const config: {
    content: string[];
    plugins: {
        handler: import("tailwindcss/types/config").PluginCreator;
        config?: Partial<import("tailwindcss/types/config").Config>;
    }[];
};
export default config;
