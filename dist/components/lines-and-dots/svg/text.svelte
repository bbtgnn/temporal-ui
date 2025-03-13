<script>var _a;
import Icon from '../../../holocene/icon/icon.svelte';
import Line from './line.svelte';
export let point = [0, 0];
export let category = undefined;
export let status = 'none';
export let fontSize = '13px';
export let fontWeight = '400';
export let textAnchor = 'start';
export let backdrop = false;
export let backdropHeight = 0;
export let icon = undefined;
export let config = undefined;
export let label = false;
$: [x, y] = point;
let textElement;
$: showIcon = icon && config;
$: textWidth = ((_a = textElement === null || textElement === void 0 ? void 0 : textElement.getBBox()) === null || _a === void 0 ? void 0 : _a.width) || 0;
$: backdropWidth = showIcon ? textWidth + 36 : textWidth + 12;
$: textX = showIcon && textAnchor === 'start' ? x + config.radius * 2 : x;
</script>

{#if backdrop}
  <Line
    startPoint={[x - backdropHeight, y]}
    endPoint={[x + backdropWidth, y]}
    {status}
    strokeWidth={backdropHeight}
  />
{/if}
{#if showIcon}
  <Icon
    name={icon}
    x={textAnchor === 'end' ? x - textWidth - backdropHeight : x}
    y={y - 8}
    class={!backdrop ? 'text-primary' : 'text-white'}
  />
{/if}
<text
  bind:this={textElement}
  class="cursor-pointer select-none outline-none {category} text-primary"
  class:label
  class:backdrop
  x={textX}
  {y}
  font-size={fontSize}
  font-weight={fontWeight}
  text-anchor={textAnchor}
>
  <slot />
</text>

<style>
  text {

    fill: currentColor;

    opacity: 1;
    stroke: none;
    dominant-baseline: middle;
    alignment-baseline: baseline;
}

  text.backdrop {

    fill: #FFFFFF;
}

  .label {
    fill: #c9d9f0;
    font-weight: 500;
  }

  text.marker,
  .command {
    fill: #ebebeb;
  }

  text.timer {
    fill: #fbbf24;
  }

  text.signal {
    fill: #ec4899;
  }

  text.activity {
    fill: #a78bfa;
  }

  text.pending {
    fill: #a78bfa;
  }

  text.child-workflow {
    fill: #67e4f9;
  }

  text.workflow {
    fill: #059669;
  }

  text.Failed {
    fill: #ff4518;
  }

  text.none {
    fill: #141414;
  }</style>
