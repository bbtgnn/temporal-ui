import temporal, { textStyles } from './plugin';
const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    plugins: [temporal, textStyles],
};
export default config;
