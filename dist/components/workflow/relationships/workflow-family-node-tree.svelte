<script>import { cva } from 'class-variance-authority';
import { page } from '$app/stores';
export let root;
export let width;
export let height;
export let zoomLevel;
export let rootX = 0;
export let rootY = 0;
export let generation = 1;
export let openRuns;
export let expandAll;
export let onNodeClick;
export let activeWorkflow = undefined;
$: ({ workflow, run } = $page.params);
const getPositions = (width, height, rootX, rootY) => {
    const x = rootX || width / 2;
    const y = rootY || height / 3;
    const radius = 20;
    return {
        x,
        y,
        radius,
    };
};
$: ({ x, y, radius } = getPositions(width, height, rootX, rootY));
$: getPosition = (index) => {
    const childY = y + 4 * radius;
    const getX = () => {
        var _a;
        const numberOfSiblings = (_a = root.children) === null || _a === void 0 ? void 0 : _a.length;
        if (numberOfSiblings === 1)
            return x;
        const expandFactor = (radius * 6) / zoomLevel;
        if (numberOfSiblings % 2 === 0) {
            return (x + (index - numberOfSiblings * 0.5) * expandFactor + expandFactor / 2);
        }
        else {
            const middleIndex = numberOfSiblings / 2 - 0.5;
            if (index === middleIndex)
                return x;
            return x + (index - middleIndex) * expandFactor;
        }
    };
    return { childX: getX(), childY };
};
const nodeClick = (e, node) => {
    e.stopPropagation();
    onNodeClick(node, generation);
};
$: isExpanded = (node) => {
    const opened = openRuns.get(generation) === node.workflow.runId;
    return expandAll || opened;
};
$: isCurrent = (node) => {
    return node.workflow.id === workflow && node.workflow.runId === run;
};
$: isActive = (node) => {
    return node.workflow.runId === (activeWorkflow === null || activeWorkflow === void 0 ? void 0 : activeWorkflow.runId);
};
const workflowStatus = cva(['stroke-2'], {
    variants: {
        status: {
            Running: 'fill-blue-300 stroke-blue-500',
            TimedOut: 'fill-orange-200 stroke-orange-400',
            Completed: 'fill-green-200 stroke-green-400',
            Failed: 'fill-red-200 stroke-red-400',
            ContinuedAsNew: 'fill-purple-200 stroke-purple-400',
            Canceled: 'fill-slate-100 stroke-slate-300',
            Terminated: 'fill-yellow-200 stroke-yellow-400',
            Paused: 'fill-yellow-200 stroke-yellow-400',
            Unspecified: 'fill-slate-100 stroke-slate-300',
            Scheduled: 'fill-blue-300 stroke-blue-500',
            Started: 'fill-blue-300 stroke-blue-500',
            Open: 'fill-green-200 stroke-green-400',
            New: 'fill-blue-300 stroke-blue-500',
            Initiated: 'fill-blue-300 stroke-blue-500',
            Fired: 'fill-pink-200 stroke-pink-400',
            CancelRequested: 'fill-yellow-200 stroke-yellow-400',
            Signaled: 'fill-pink-200 stroke-pink-400',
        },
    },
});
</script>

{#if root?.children.length}
  <line
    x1={getPosition(0).childX}
    y1={getPosition(0).childY - 1.5 * radius}
    x2={getPosition(root?.children.length - 1).childX}
    y2={getPosition(0).childY - 1.5 * radius}
    class="stroke-2 transition-all duration-300 ease-in-out {isActive(root)
      ? 'stroke-indigo-700'
      : 'stroke-slate-100 dark:stroke-slate-800'}"
  />
{/if}
{#each root?.children as child, index}
  {@const { childX, childY } = getPosition(index)}
  {#if child.children.length && isExpanded(child)}
    <svelte:self
      root={child}
      {width}
      {height}
      {zoomLevel}
      rootX={childX}
      rootY={childY}
      generation={generation + 1}
      {expandAll}
      {openRuns}
      {onNodeClick}
      {activeWorkflow}
    />
  {/if}
  <line
    x1={childX}
    y1={childY - 1.5 * radius}
    x2={childX}
    y2={childY}
    class="stroke-2 transition-all duration-300 ease-in-out {isActive(root)
      ? 'stroke-indigo-700'
      : 'stroke-slate-100 dark:stroke-slate-800'}"
  />
  />
  <g
    role="button"
    tabindex="0"
    class="outline-none"
    on:click={(e) => nodeClick(e, child)}
    on:keypress={(e) => nodeClick(e, child)}
  >
    {#if child?.children?.length && isExpanded(child)}
      <line
        x1={childX}
        y1={childY}
        x2={childX}
        y2={childY + 2.5 * radius}
        class="stroke-2 transition-all duration-300 ease-in-out {isActive(child)
          ? 'stroke-indigo-700'
          : 'stroke-slate-100 dark:stroke-slate-800'}"
      />
    {/if}
    {#if isActive(child)}
      <circle
        cx={childX}
        cy={childY}
        r={radius}
        class="fill-indigo-700"
        fill-opacity=".95"
      />
    {/if}
    {#if isCurrent(child)}
      <circle
        cx={childX}
        cy={childY}
        r={radius}
        class="fill-indigo-200"
        fill-opacity=".75"
      />
    {/if}
    <rect
      class={workflowStatus({ status: child.workflow.status })}
      x={childX - radius / 2}
      y={childY - radius / 2}
      cx={radius / 2}
      cy={radius / 2}
      width={radius}
      height={radius}
      cursor="pointer"
    />
    {#if child?.children?.length && !isExpanded(child)}
      <text
        x={childX}
        y={childY + 2 * radius}
        class="text-center font-mono text-lg"
        fill="currentColor"
        text-anchor="middle"
        font-weight="500">{child.children.length}</text
      >
    {/if}
  </g>
{/each}

{#if generation === 1}
  <g
    role="button"
    class="outline-none"
    tabindex="0"
    on:click={(e) => nodeClick(e, root)}
    on:keypress={(e) => nodeClick(e, root)}
  >
    {#if root?.children?.length}
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={y + 2.5 * radius}
        class="stroke-2 transition-all duration-300 ease-in-out {isActive(root)
          ? 'stroke-indigo-700'
          : 'stroke-slate-100 dark:stroke-slate-800'}"
      />
    {/if}
    {#if isCurrent(root)}
      <circle
        cx={x}
        cy={y}
        r={radius}
        class="fill-indigo-200"
        fill-opacity=".75"
      />
    {/if}
    {#if isActive(root)}
      <circle
        cx={x}
        cy={y}
        r={radius}
        class="fill-indigo-700"
        fill-opacity=".95"
      />
    {/if}
    <rect
      class={workflowStatus({ status: root.workflow.status })}
      x={x - radius / 2}
      y={y - radius / 2}
      width={radius}
      height={radius}
      cx={radius / 2}
      cy={radius / 2}
    />
    {#if root?.children?.length}
      <text
        {x}
        y={y - radius * 1.5}
        class="text-center font-mono text-lg"
        fill="currentColor"
        text-anchor="middle"
        font-weight="500">{root.children.length}</text
      >
    {/if}
  </g>
{/if}

<style>
  .Running {

    fill: #AEFFD8
}

  .Started {

    fill: #AEFFD8
}

  .Completed {

    fill: #AEFFD8
}

  .Fired {

    fill: #AEFFD8
}

  .Signaled {

    fill: #AEFFD8
}

  .Failed {

    fill: #AEFFD8
}

  .Terminated {

    fill: #AEFFD8
}

  .TimedOut {

    fill: #AEFFD8
}

  .Canceled {

    fill: #AEFFD8
}

  .ContinuedAsNew {

    fill: #AEFFD8
}</style>
