<script>import ToggleSwitch from '../../../holocene/toggle-switch.svelte';
import ZoomSvg from '../../../holocene/zoom-svg.svelte';
import { translate } from '../../../i18n/translate';
import WorkflowFamilyNodeDescription from './workflow-family-node-description.svelte';
import WorkflowFamilyNodeTree from './workflow-family-node-tree.svelte';
export let root;
let expandAll = false;
let activeWorkflow = undefined;
let openRuns = new Map();
const onExpandAll = () => {
    expandAll = !expandAll;
};
const onNodeClick = (node, generation) => {
    const newRuns = new Map(openRuns);
    const highestGeneration = Math.max(...Array.from(newRuns.keys()));
    if (openRuns.get(generation) === node.workflow.runId) {
        newRuns.set(generation, '');
    }
    else {
        newRuns.set(generation, node.workflow.runId);
    }
    if (generation < highestGeneration) {
        for (let i = generation + 1; i <= highestGeneration; i++) {
            newRuns.delete(i);
        }
    }
    openRuns = newRuns;
    activeWorkflow = node.workflow;
};
</script>

<div class="flex flex-col bg-primary">
  <div
    class="relative z-30 w-full overflow-hidden border-b border-subtle bg-primary lg:sticky lg:top-12"
  >
    <ZoomSvg
      initialZoom={2}
      maxZoomOut={5}
      maxZoomIn={0.25}
      containerHeight={240}
      let:width
      let:height
      let:zoomLevel
    >
      <div class="flex py-4" slot="controls">
        <ToggleSwitch
          label={translate('common.view-all')}
          labelPosition="left"
          id="autorefresh"
          checked={expandAll}
          on:change={onExpandAll}
        />
      </div>
      <WorkflowFamilyNodeTree
        {root}
        {width}
        {height}
        {zoomLevel}
        {onNodeClick}
        {expandAll}
        {openRuns}
        {activeWorkflow}
      />
    </ZoomSvg>
  </div>
  <div class="flex h-auto w-full flex-col overflow-auto bg-secondary text-base">
    <WorkflowFamilyNodeDescription
      {root}
      {expandAll}
      {onNodeClick}
      {activeWorkflow}
      {openRuns}
    />
  </div>
</div>
