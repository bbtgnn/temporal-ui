<script>import { getContext } from 'svelte';
import { page } from '$app/stores';
import IsTemporalServerVersionGuard from '../../is-temporal-server-version-guard.svelte';
import Button from '../../../holocene/button.svelte';
import Checkbox from '../../../holocene/checkbox.svelte';
import Icon from '../../../holocene/icon/icon.svelte';
import Tooltip from '../../../holocene/tooltip.svelte';
import { translate } from '../../../i18n/translate';
import { BATCH_OPERATION_CONTEXT, } from '../../../pages/workflows-with-new-search.svelte';
import { supportsBulkActions } from '../../../stores/bulk-actions';
import { hideChildWorkflows } from '../../../stores/filters';
import { workflowCreateDisabled } from '../../../utilities/workflow-create-disabled';
import StartWorkflowButton from '../start-workflow-button.svelte';
export let workflow = undefined;
export let empty = false;
export let viewChildren = () => { };
export let childCount = undefined;
export let child = false;
const { allSelected, selectedWorkflows } = getContext(BATCH_OPERATION_CONTEXT);
$: ({ namespace } = $page.params);
$: label = translate('workflows.select-workflow', {
    workflow: workflow === null || workflow === void 0 ? void 0 : workflow.id,
});
$: childrenShown = childCount !== undefined;
</script>

<tr
  data-testid="workflows-summary-configurable-table-row"
  class:empty
  class:child
>
  {#if !empty && $supportsBulkActions}
    <td class="relative">
      <Checkbox
        {label}
        labelHidden
        bind:group={$selectedWorkflows}
        value={workflow}
        disabled={$allSelected}
        aria-label={label}
      />
    </td>
    <td
      class="cursor-point relative flex items-center justify-center gap-0.5 pt-2"
    >
      {#if !workflowCreateDisabled($page)}
        <StartWorkflowButton
          {namespace}
          workflowId={workflow.id}
          taskQueue={workflow.taskQueue}
          workflowType={workflow.name}
        />
      {/if}
      <IsTemporalServerVersionGuard minimumVersion="1.23.0">
        {#if $hideChildWorkflows && !child}
          <Button
            size="xs"
            variant={childrenShown ? 'primary' : 'ghost'}
            on:click={() => viewChildren(workflow)}
          >
            <Tooltip
              text={childrenShown
                ? translate('workflows.children', { count: childCount })
                : translate('workflows.show-children')}
              topLeft
            >
              <Icon name="relationship" class="scale-80" />
            </Tooltip>
          </Button>
        {/if}
      </IsTemporalServerVersionGuard>
    </td>
  {:else}
    <td></td>
  {/if}
  <slot />
</tr>

<style>
  .child {
    background-color: rgb(201 217 240 / 0.5)
}
.child:where([data-theme="dark"], [data-theme="dark"] *) {
    background-color: rgb(201 217 240 / 0.05)
}</style>
