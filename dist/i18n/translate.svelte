<script>import { translate } from './translate';
export let key;
export let count = undefined;
export let replace = undefined;
$: translated = translate(key, { ...replace, count });
</script>

{#if translated !== key}
  {translated}
{:else}
  <slot />
{/if}
