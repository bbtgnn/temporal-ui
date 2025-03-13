<script>import { isCloud } from '../stores/advanced-visibility';
import { temporalVersion } from '../stores/versions';
import { minimumVersionRequired } from '../utilities/version-check';
export let minimumVersion;
</script>

{#if $isCloud || minimumVersionRequired(minimumVersion, $temporalVersion)}
  <slot />
{:else}
  <slot name="fallback" />
{/if}
