<script>import WorkflowFamilyNodeDescription from './workflow-family-node-description.svelte';
export let root;
export let expandAll;
export let onNodeClick;
export let activeWorkflow = undefined;
export let generation = 1;
export let openRuns;
</script>

{#each root?.children as child}
  <WorkflowFamilyNodeDescription
    root={child}
    {expandAll}
    {onNodeClick}
    {activeWorkflow}
    {generation}
    {openRuns}
  />
{/each}
