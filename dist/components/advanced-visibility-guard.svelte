<script>import { supportsAdvancedVisibility } from '../stores/advanced-visibility';
</script>

{#if $supportsAdvancedVisibility}
  <slot />
{:else}
  <slot name="fallback" />
{/if}
