<script>var _a, _b, _c;
import { goto } from '$app/navigation';
import { page } from '$app/stores';
import CancelConfirmationModal from './workflow/client-actions/cancel-confirmation-modal.svelte';
import ResetConfirmationModal from './workflow/client-actions/reset-confirmation-modal.svelte';
import SignalConfirmationModal from './workflow/client-actions/signal-confirmation-modal.svelte';
import TerminateConfirmationModal from './workflow/client-actions/terminate-confirmation-modal.svelte';
import UpdateConfirmationModal from './workflow/client-actions/update-confirmation-modal.svelte';
import Button from '../holocene/button.svelte';
import { MenuDivider, MenuItem } from '../holocene/menu';
import SplitButton from '../holocene/split-button.svelte';
import Tooltip from '../holocene/tooltip.svelte';
import { translate } from '../i18n/translate';
import { isCloud } from '../stores/advanced-visibility';
import { coreUserStore } from '../stores/core-user';
import { resetEvents } from '../stores/events';
import { refresh } from '../stores/workflow-run';
import { routeForWorkflowStart } from '../utilities/route-for';
import { workflowCancelEnabled } from '../utilities/workflow-cancel-enabled';
import { workflowCreateDisabled } from '../utilities/workflow-create-disabled';
import { workflowResetEnabled } from '../utilities/workflow-reset-enabled';
import { workflowSignalEnabled } from '../utilities/workflow-signal-enabled';
import { workflowTerminateEnabled } from '../utilities/workflow-terminate-enabled';
import { workflowUpdateEnabled } from '../utilities/workflow-update-enabled';
export let workflow;
export let namespace;
export let cancelInProgress;
export let isRunning;
let cancelConfirmationModalOpen = false;
let terminateConfirmationModalOpen = false;
let resetConfirmationModalOpen = false;
let signalConfirmationModalOpen = false;
let updateConfirmationModalOpen = false;
let resetDescription;
let coreUser = coreUserStore();
$: cancelEnabled = workflowCancelEnabled($page.data.settings, $coreUser, namespace);
$: signalEnabled = workflowSignalEnabled($page.data.settings, $coreUser, namespace);
$: updateEnabled = workflowUpdateEnabled($page.data.settings, $coreUser, namespace);
$: terminateEnabled = workflowTerminateEnabled($page.data.settings, $coreUser, namespace);
$: resetAuthorized = workflowResetEnabled($page.data.settings, $coreUser, namespace);
$: resetEnabled =
    resetAuthorized &&
        ((_a = workflow === null || workflow === void 0 ? void 0 : workflow.pendingChildren) === null || _a === void 0 ? void 0 : _a.length) === 0 &&
        $resetEvents.length > 0;
$: actionsDisabled = !resetEnabled && !signalEnabled && !terminateEnabled;
let workflowActions;
$: {
    if (!resetAuthorized) {
        resetDescription = translate('workflows.reset-disabled-unauthorized');
    }
    else if (resetAuthorized && ((_b = workflow === null || workflow === void 0 ? void 0 : workflow.pendingChildren) === null || _b === void 0 ? void 0 : _b.length) > 0) {
        resetDescription = translate('workflows.reset-disabled-pending-children');
    }
    else if (resetAuthorized &&
        ((_c = workflow === null || workflow === void 0 ? void 0 : workflow.pendingChildren) === null || _c === void 0 ? void 0 : _c.length) === 0 &&
        $resetEvents.length === 0) {
        resetDescription = translate('workflows.reset-disabled-no-events');
    }
}
$: workflowActions = [
    {
        label: translate('workflows.reset'),
        onClick: () => (resetConfirmationModalOpen = true),
        testId: 'reset-button',
        enabled: resetEnabled,
        description: resetEnabled ? '' : resetDescription,
    },
    {
        label: translate('workflows.signal'),
        onClick: () => (signalConfirmationModalOpen = true),
        testId: 'signal-button',
        enabled: signalEnabled,
        description: signalEnabled ? '' : translate('workflows.signal-disabled'),
    },
    {
        label: translate('workflows.update'),
        onClick: () => (updateConfirmationModalOpen = true),
        testId: 'update-button',
        enabled: updateEnabled,
        description: updateEnabled ? '' : translate('workflows.update-disabled'),
    },
    {
        label: translate('workflows.terminate'),
        onClick: () => (terminateConfirmationModalOpen = true),
        testId: 'terminate-button',
        enabled: terminateEnabled,
        destructive: true,
        description: terminateEnabled
            ? ''
            : translate('workflows.terminate-disabled'),
    },
];
</script>

{#if isRunning}
  <SplitButton
    id="workflow-actions"
    menuClass="w-[16rem] md:w-[24rem]"
    position="right"
    disabled={actionsDisabled}
    primaryActionDisabled={!cancelEnabled || cancelInProgress}
    on:click={() => (cancelConfirmationModalOpen = true)}
    label={translate('workflows.request-cancellation')}
    menuLabel={translate('workflows.workflow-actions')}
  >
    {#each workflowActions as { onClick, destructive, label, enabled, testId, description }}
      {#if !$isCloud || ($isCloud && testId !== 'update-button')}
        {#if destructive}
          <MenuDivider />
        {/if}
        <MenuItem
          on:click={onClick}
          {destructive}
          disabled={!enabled}
          data-testid={testId}
          {description}
        >
          {label}
        </MenuItem>
      {/if}
    {/each}
    {#if !workflowCreateDisabled($page)}
      <MenuDivider />
      <MenuItem
        on:click={() =>
          goto(
            routeForWorkflowStart({
              namespace,
              workflowId: workflow.id,
              taskQueue: workflow.taskQueue,
              workflowType: workflow.name,
            }),
          )}
        data-testid="start-workflow-button"
      >
        {translate('workflows.start-workflow-like-this-one')}
      </MenuItem>
    {/if}
  </SplitButton>
{:else if !workflowCreateDisabled($page)}
  <SplitButton
    id="workflow-actions"
    menuClass="w-[16rem]"
    position="right"
    primaryActionDisabled={!resetEnabled}
    on:click={() => (resetConfirmationModalOpen = true)}
    label={translate('workflows.reset')}
    menuLabel={translate('workflows.workflow-actions')}
  >
    <MenuItem
      on:click={() =>
        goto(
          routeForWorkflowStart({
            namespace,
            workflowId: workflow.id,
            taskQueue: workflow.taskQueue,
            workflowType: workflow.name,
          }),
        )}
      data-testid="start-workflow-button"
    >
      {translate('workflows.start-workflow-like-this-one')}
    </MenuItem>
  </SplitButton>
{:else}
  <Tooltip bottomRight width={200} text={resetDescription} hide={resetEnabled}>
    <Button
      aria-label={translate('workflows.reset')}
      disabled={!resetEnabled}
      variant="primary"
      on:click={() => (resetConfirmationModalOpen = true)}
      data-testid="workflow-reset-button"
    >
      {translate('workflows.reset')}
    </Button>
  </Tooltip>
{/if}

{#if resetEnabled}
  <ResetConfirmationModal
    {refresh}
    {workflow}
    {namespace}
    bind:open={resetConfirmationModalOpen}
  />
{/if}

{#if signalEnabled}
  <SignalConfirmationModal
    {refresh}
    {workflow}
    {namespace}
    bind:open={signalConfirmationModalOpen}
  />
{/if}

{#if updateEnabled}
  <UpdateConfirmationModal
    {workflow}
    {namespace}
    bind:open={updateConfirmationModalOpen}
  />
{/if}

{#if cancelEnabled}
  <CancelConfirmationModal
    {refresh}
    {workflow}
    {namespace}
    bind:open={cancelConfirmationModalOpen}
  />
{/if}

{#if terminateEnabled}
  <TerminateConfirmationModal
    {refresh}
    {workflow}
    {namespace}
    bind:open={terminateConfirmationModalOpen}
  />
{/if}
