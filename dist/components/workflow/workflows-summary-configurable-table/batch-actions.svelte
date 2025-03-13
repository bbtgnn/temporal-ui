<script>var _a;
import { getContext } from 'svelte';
import { page } from '$app/stores';
import Button from '../../../holocene/button.svelte';
import { translate } from '../../../i18n/translate';
import Translate from '../../../i18n/translate.svelte';
import { BATCH_OPERATION_CONTEXT, } from '../../../pages/workflows-with-new-search.svelte';
import { isCloud } from '../../../stores/advanced-visibility';
import { coreUserStore } from '../../../stores/core-user';
import { temporalVersion } from '../../../stores/versions';
import { workflowCount, workflowsQuery } from '../../../stores/workflows';
import { minimumVersionRequired } from '../../../utilities/version-check';
import { workflowCancelEnabled } from '../../../utilities/workflow-cancel-enabled';
import { workflowResetEnabled } from '../../../utilities/workflow-reset-enabled';
import { workflowTerminateEnabled } from '../../../utilities/workflow-terminate-enabled';
export let workflows;
const { selectedWorkflows, allSelected, handleSelectAll, cancelableWorkflows, openBatchCancelConfirmationModal, openBatchTerminateConfirmationModal, openBatchResetConfirmationModal, } = getContext(BATCH_OPERATION_CONTEXT);
let coreUser = coreUserStore();
let selectedWorkflowsCount;
$: {
    selectedWorkflowsCount = (_a = $selectedWorkflows === null || $selectedWorkflows === void 0 ? void 0 : $selectedWorkflows.length) !== null && _a !== void 0 ? _a : 0;
}
$: terminateEnabled = workflowTerminateEnabled($page.data.settings, $coreUser, $page.params.namespace);
$: cancelEnabled = workflowCancelEnabled($page.data.settings, $coreUser, $page.params.namespace);
$: resetEnabled =
    workflowResetEnabled($page.data.settings, $coreUser, $page.params.namespace) && $isCloud
        ? true
        : minimumVersionRequired('1.23.0', $temporalVersion);
</script>

{#if $allSelected}
  <span class="font-semibold">
    <Translate key="workflows.all-selected" count={$workflowCount.count} />
  </span>
{:else}
  <span class="font-semibold"
    ><Translate
      key="workflows.n-selected"
      count={selectedWorkflowsCount}
    /></span
  >
  {#if $workflowsQuery}
    <span>
      ({translate('workflows.select-all-leading')}
      <button
        data-testid="select-all-workflows"
        on:click={() => handleSelectAll(workflows)}
        class="cursor-pointer underline"
        ><Translate
          key="workflows.select-all"
          count={$workflowCount.count}
        /></button
      >
      {translate('workflows.select-all-trailing')})
    </span>
  {/if}
{/if}
<div class="ml-4 inline-flex gap-2">
  {#if cancelEnabled}
    <Button
      size="xs"
      variant="ghost"
      class="text-off-white focus-visible:border-table"
      data-testid="bulk-cancel-button"
      disabled={!$cancelableWorkflows.length}
      on:click={openBatchCancelConfirmationModal}
      >{translate('workflows.request-cancellation')}</Button
    >
  {/if}
  {#if resetEnabled}
    <Button
      size="xs"
      variant="ghost"
      class="text-off-white focus-visible:border-table"
      data-testid="bulk-reset-button"
      on:click={openBatchResetConfirmationModal}
      >{translate('workflows.reset')}</Button
    >
  {/if}
  {#if terminateEnabled}
    <Button
      size="xs"
      variant="destructive"
      class="focus-visible:border-table"
      data-testid="bulk-terminate-button"
      on:click={openBatchTerminateConfirmationModal}
      >{translate('workflows.terminate')}</Button
    >
  {/if}
</div>
