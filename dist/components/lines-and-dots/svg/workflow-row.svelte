<script>import Icon from '../../../holocene/icon/icon.svelte';
import { TimelineConfig } from '../constants';
import Dot from './dot.svelte';
import Line from './line.svelte';
export let workflow;
export let length;
export let y;
const { radius, height, gutter } = TimelineConfig;
$: start = gutter;
$: end = start + length - 2 * gutter;
</script>

<g role="button" tabindex="0" class="relative cursor-pointer" {height}>
  <Line
    startPoint={[start, y]}
    endPoint={[end, y]}
    classification={workflow.status}
    strokeWidth={radius * 2}
    pending={workflow.isRunning}
  />
  <Dot point={[start, y]} classification={workflow.status} r={radius} />
  <Icon
    name="workflow"
    x={start - radius / 2}
    y={y - radius / 2}
    width={radius}
    height={radius}
    strokeWidth="4"
    class="text-black"
  />
  <Dot point={[end, y]} classification={workflow.status} r={radius} />
  <Icon
    name="workflow"
    x={end - radius / 2}
    y={y - radius / 2}
    width={radius}
    height={radius}
    strokeWidth="4"
    class="text-black"
  />
</g>

<style>
  g {
    cursor: default;
    pointer-events: bounding-box;
    outline: none;
  }</style>
