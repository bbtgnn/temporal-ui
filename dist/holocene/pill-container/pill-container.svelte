<script context="module">export const PILLS = {};
</script>

<script>import { writable } from 'svelte/store';
import { onDestroy, setContext } from 'svelte';
import { twMerge as merge } from 'tailwind-merge';
let className = '';
export { className as class };
const pills = [];
const activePill = writable(null);
setContext(PILLS, {
    registerPill: (pill) => {
        pills.push(pill);
        activePill.update((current) => current || pill);
        onDestroy(() => {
            const i = pills.indexOf(pill);
            pills.splice(i, 1);
            activePill.update((current) => current === pill ? pills[i] || pills[pills.length - 1] : current);
        });
    },
    selectPill: (pill) => {
        activePill.set(pill);
    },
    activePill,
});
</script>

<div
  class={merge(
    'surface-subtle inline-flex flex-col items-center justify-start gap-2 rounded-md px-2 py-2 md:flex-row md:rounded-full',
    className,
  )}
>
  <slot />
</div>
