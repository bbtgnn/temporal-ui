<script>import { writable } from 'svelte/store';
import Checkbox from '../../../holocene/checkbox.svelte';
import Input from '../../../holocene/input/input.svelte';
import Modal from '../../../holocene/modal.svelte';
import Option from '../../../holocene/select/option.svelte';
import Select from '../../../holocene/select/select.svelte';
import { translate } from '../../../i18n/translate';
import { resetWorkflow } from '../../../services/workflow-service';
import { isCloud } from '../../../stores/advanced-visibility';
import { resetEvents } from '../../../stores/events';
import { resetWorkflows } from '../../../stores/reset-workflows';
import { temporalVersion } from '../../../stores/versions';
import { isNetworkError } from '../../../utilities/is-network-error';
import { minimumVersionRequired } from '../../../utilities/version-check';
export let open;
export let workflow;
export let namespace;
export let refresh;
let error = '';
let loading = false;
let eventId = writable('');
let reason;
let includeSignals = true;
let excludeSignals = false;
let excludeUpdates = false;
const hideResetModal = () => {
    open = false;
    includeSignals = true;
    excludeSignals = false;
    excludeUpdates = false;
    $eventId = '';
    reason = '';
};
const reset = async () => {
    error = '';
    loading = true;
    try {
        const response = await resetWorkflow({
            namespace,
            workflow,
            eventId: $eventId,
            reason,
            includeSignals,
            excludeSignals,
            excludeUpdates,
        });
        if (response && response.runId) {
            resetWorkflows.update((previous) => ({
                ...previous,
                [workflow.runId]: response.runId,
            }));
        }
        $refresh = Date.now();
        hideResetModal();
    }
    catch (err) {
        error = isNetworkError(err)
            ? err.message
            : translate('common.unknown-error');
    }
    finally {
        loading = false;
    }
    hideResetModal();
};
</script>

<Modal
  id="reset-confirmation-modal"
  data-testid="reset-confirmation-modal"
  confirmText={translate('common.confirm')}
  cancelText={translate('common.cancel')}
  bind:error
  bind:open
  {loading}
  on:confirmModal={reset}
  on:cancelModal={hideResetModal}
  confirmDisabled={!$eventId}
>
  <h3 slot="title">{translate('workflows.reset-modal-title')}</h3>
  <svelte:fragment slot="content">
    <div class="flex w-full flex-col gap-4">
      <Select
        data-testid="workflow-reset-event-id-select"
        menuClass="max-h-[16rem]"
        label={translate('workflows.reset-event-radio-group-description')}
        bind:value={$eventId}
        id="reset-event-id"
      >
        {#each $resetEvents as event}
          <Option value={event.id}>{event.id} - {event.eventType}</Option>
        {/each}
      </Select>
      {#if $isCloud || minimumVersionRequired('1.24.0', $temporalVersion)}
        <Checkbox
          id="reset-exclude-signals-checkbox"
          data-testid="reset-exclude-signals-checkbox"
          bind:checked={excludeSignals}
          label={translate('workflows.reset-exclude-signals')}
        />
        <Checkbox
          id="reset-exclude-updates-checkbox"
          data-testid="reset-exclude-updates-checkbox"
          bind:checked={excludeUpdates}
          label={translate('workflows.reset-exclude-updates')}
        />
      {:else}
        <Checkbox
          id="reset-include-signals-checkbox"
          data-testid="reset-include-signals-checkbox"
          bind:checked={includeSignals}
          label={translate('workflows.reset-reapply-type-label')}
        />
      {/if}

      <Input
        id="reset-reason"
        bind:value={reason}
        label={translate('common.reason')}
      />
    </div>
  </svelte:fragment>
</Modal>
