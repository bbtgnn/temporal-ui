<script>import { twMerge as merge } from 'tailwind-merge';
import Icon from './icon/icon.svelte';
let className = '';
export { className as class };
export let text = '';
export let icon = null;
/** bottom center of the tooltip aligned to the top center of the wrapper */
export let top = false;
/** bottom right of the tooltip aligned to the top right of the wrapper */
export let topRight = false;
/** left center of the tooltip aligned to the right center of the wrapper */
export let right = false;
/** top center of the tooltip aligned to the bottom center of the wrapper */
export let bottom = false;
/** top left of the tooltip aligned to the bottom left of the wrapper */
export let bottomLeft = false;
/** top right of the tooltip aligned to the bottom right of the wrapper */
export let bottomRight = false;
/** right center of the tooltip aligned to the left center of the wrapper */
export let left = false;
/** bottom left of the tooltip aligned to the top left of the wrapper   */
export let topLeft = false;
export let hide = false;
export let width = null;
export let show = false;
</script>

{#if hide}
  <slot />
{:else}
  <div class={merge('wrapper group relative inline-block', className)}>
    <slot />
    <div
      class={merge(
        'tooltip absolute left-0 top-0 z-50 hidden translate-x-12 whitespace-nowrap text-xs opacity-0 transition-all group-hover:inline-block group-hover:opacity-90',
        show && 'inline-block opacity-90',
      )}
      class:left
      class:right
      class:bottom
      class:bottomLeft
      class:bottomRight
      class:top
      class:topRight
      class:topLeft
      style={width ? `white-space: pre-wrap; width: ${width}px;` : null}
    >
      <div class="inline-block rounded-md bg-slate-800 px-2 py-2">
        <div class="flex gap-2 text-slate-100">
          <slot name="content">
            {#if icon}<Icon name={icon} class="inline h-4 text-white" />{/if}
            <span>{text}</span>
          </slot>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .tooltip.top {

    left: 50%;

    margin-top: -0.5rem;

    --tw-translate-x: -50%;

    --tw-translate-y: -100%;

    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

  .tooltip.bottom {

    bottom: 0px;

    left: 50%;

    margin-bottom: -0.5rem;

    --tw-translate-x: -50%;

    --tw-translate-y: 100%;

    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

  .tooltip.left {

    left: 0px;

    top: 50%;

    margin-left: -0.5rem;

    --tw-translate-x: -100%;

    --tw-translate-y: -50%;

    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

  .tooltip.right {

    right: 0px;

    top: 50%;

    margin-right: -0.5rem;

    --tw-translate-y: -50%;

    --tw-translate-x: 100%;

    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

  .tooltip.topRight {

    left: auto;

    right: 0px;

    margin-top: -0.5rem;

    --tw-translate-y: -100%;

    --tw-translate-x: 0px;

    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

  .tooltip.topLeft {

    left: 0px;

    right: auto;

    margin-top: -0.5rem;

    --tw-translate-y: -100%;

    --tw-translate-x: 0px;

    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

  .tooltip.bottomLeft {

    bottom: 0px;

    left: 0px;

    right: auto;

    margin-bottom: -0.5rem;

    --tw-translate-x: 0px;

    --tw-translate-y: 100%;

    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

  .tooltip.bottomRight {

    bottom: 0px;

    left: auto;

    right: 0px;

    margin-bottom: -0.5rem;

    --tw-translate-x: 0px;

    --tw-translate-y: 100%;

    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}</style>
