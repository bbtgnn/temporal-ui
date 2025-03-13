<script>import { createEventDispatcher, onDestroy, onMount } from 'svelte';
import { twMerge as merge } from 'tailwind-merge';
import { useDarkMode } from '../../utilities/dark-mode/dark-mode';
const dispatch = createEventDispatcher();
let monaco;
let editor;
let container;
export let content = '';
onMount(async () => {
    monaco = (await import('./index')).default;
    const editor = monaco.editor.create(container, {
        language: 'markdown',
    });
    const model = monaco.editor.createModel(content, 'markdown');
    model.onDidChangeContent(() => {
        const value = model.getValue();
        dispatch('change', { value });
    });
    editor.setModel(model);
});
$: {
    if ($useDarkMode) {
        monaco === null || monaco === void 0 ? void 0 : monaco.editor.setTheme('vs-dark');
    }
    else {
        monaco === null || monaco === void 0 ? void 0 : monaco.editor.setTheme('vs');
    }
}
onDestroy(() => {
    monaco === null || monaco === void 0 ? void 0 : monaco.editor.getModels().forEach((model) => model.dispose());
    editor === null || editor === void 0 ? void 0 : editor.dispose();
});
</script>

<div
  class={merge('h-full min-h-80', $$restProps.class)}
  bind:this={container}
></div>
