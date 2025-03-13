<script>var _a, _b, _c;
import { page } from '$app/stores';
$: nexusEnabled = (_c = (_b = (_a = $page.data) === null || _a === void 0 ? void 0 : _a.systemInfo) === null || _b === void 0 ? void 0 : _b.capabilities) === null || _c === void 0 ? void 0 : _c.nexus;
</script>

{#if nexusEnabled}
  <slot />
{:else}
  <slot name="fallback" />
{/if}
