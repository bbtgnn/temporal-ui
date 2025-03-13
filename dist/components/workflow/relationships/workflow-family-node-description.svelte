<script>import { page } from '$app/stores';
import Icon from '../../../holocene/icon/icon.svelte';
import WorkflowFamilyNodeDescriptionDetails from './workflow-family-node-description-details.svelte';
import WorkflowFamilyNodeDescriptionTree from './workflow-family-node-description-tree.svelte';
export let root;
export let expandAll;
export let generation = 0;
export let onNodeClick;
export let activeWorkflow = undefined;
export let openRuns;
$: ({ namespace, workflow, run } = $page.params);
$: expanded =
    expandAll ||
        openRuns.get(generation) === root.workflow.runId ||
        generation === 0;
$: isCurrent = root.workflow.id === workflow && root.workflow.runId === run;
$: isActive = root.workflow.runId === (activeWorkflow === null || activeWorkflow === void 0 ? void 0 : activeWorkflow.runId);
$: isRootWorkflow = generation === 0;
const onClick = () => {
    onNodeClick(root, generation);
};
</script>

<div class="w-full border-subtle" class:border-l={!isRootWorkflow}>
  <button
    class="flex w-full select-none {isActive &&
      'surface-interactive'} {isCurrent &&
      !isActive &&
      'surface-subtle'} items-center gap-1 px-2 py-1 lg:py-2 {!isActive &&
      'hover:surface-interactive-secondary'}"
    on:click|stopPropagation={onClick}
  >
    <div class="flex w-full items-center gap-3 pr-2 text-sm">
      <WorkflowFamilyNodeDescriptionDetails
        workflow={root.workflow}
        {namespace}
        {isRootWorkflow}
        {isActive}
      />
      <div class="flex basis-16 items-center justify-end gap-1">
        {#if root?.children?.length}
          <div class="flex items-center gap-2 text-sm">
            <Icon name="relationship" class="-mr-1 w-3 flex-shrink-0" />
            <span class="inline-block">{root?.children?.length}</span>
          </div>
          {#if !isRootWorkflow}
            <Icon
              name={expanded ? 'chevron-up' : 'chevron-down'}
              class="-mr-1 w-4 flex-shrink-0"
            />
          {/if}
        {/if}
      </div>
    </div>
  </button>
  {#if expanded}
    <div class="pl-4">
      {#if root?.children?.length}
        <WorkflowFamilyNodeDescriptionTree
          {root}
          {onNodeClick}
          {expandAll}
          {activeWorkflow}
          generation={generation + 1}
          {openRuns}
        />
      {/if}
    </div>
  {/if}
</div>

<style>
  .Running {
    background-color: #93bbfd;
  }

  .Started {
    background-color: #92a4c3;
  }

  .Completed {
    background-color: #00f37e;
  }

  .Fired {
    background-color: #f8a208;
  }

  .Signaled {
    background-color: #d300d8;
  }

  .Failed {
    background-color: #ff4518;
  }

  .Terminated {
    background-color: #fde989;
  }

  .TimedOut {
    background-color: #c2570c;
  }

  .Canceled {
    background-color: #fed64b;
  }

  .ContinuedAsNew {
    background-color: #e2d5fe;
  }</style>
