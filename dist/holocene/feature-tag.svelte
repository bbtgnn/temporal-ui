<script>import { viewedFeatureTags } from '../stores/new-feature-tags';
export let feature;
export let alpha = false;
$: hide = $viewedFeatureTags === null || $viewedFeatureTags === void 0 ? void 0 : $viewedFeatureTags.includes(feature);
</script>

{#if hide}
  <slot />
{:else}
  <span class="new-tag" class:alpha />
{/if}

<style>
  .new-tag {

    position: absolute;

    right: 0.25rem;

    top: 0.25rem;

    height: 0.5rem;

    width: 0.5rem
}

@keyframes pulse {

    50% {

        opacity: .5
    }
}

.new-tag {

    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

    border-radius: 9999px;

    --tw-bg-opacity: 1;

    background-color: rgb(0 243 126 / var(--tw-bg-opacity))
}

  .alpha {

    --tw-bg-opacity: 1;

    background-color: rgb(203 181 253 / var(--tw-bg-opacity))
}</style>
