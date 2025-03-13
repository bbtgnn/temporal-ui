<script>import { writable } from 'svelte/store';
import { getContext } from 'svelte';
import { v4 } from 'uuid';
import Modal from '../../../holocene/modal.svelte';
import { translate } from '../../../i18n/translate';
import Translate from '../../../i18n/translate.svelte';
import { Action } from '../../../models/workflow-actions';
import { BATCH_OPERATION_CONTEXT, } from '../../../pages/workflows-with-new-search.svelte';
import { batchTerminateWorkflows } from '../../../services/batch-service';
import { authUser } from '../../../stores/auth-user';
import { toaster } from '../../../stores/toaster';
import { workflowsQuery } from '../../../stores/workflows';
import { isNetworkError } from '../../../utilities/is-network-error';
import { getPlacholder } from '../../../utilities/workflow-actions';
import BatchOperationConfirmationModalBody from './batch-operation-confirmation-form.svelte';
export let namespace;
export let open;
const reason = writable('');
const reasonPlaceholder = getPlacholder(Action.Terminate, $authUser.email);
const jobId = writable('');
const jobIdValid = writable(true);
let jobIdPlaceholder = v4();
let error = '';
const { allSelected, terminableWorkflows } = getContext(BATCH_OPERATION_CONTEXT);
const resetForm = () => {
    $reason = '';
    $jobId = '';
    $jobIdValid = true;
    jobIdPlaceholder = v4();
};
$: if (open)
    resetForm();
const terminateWorkflows = async () => {
    error = '';
    try {
        const options = {
            namespace,
            reason: $reason || reasonPlaceholder,
            jobId: $jobId || jobIdPlaceholder,
            ...($allSelected
                ? { query: $workflowsQuery }
                : { workflows: $terminableWorkflows }),
        };
        await batchTerminateWorkflows(options);
        open = false;
        resetForm();
        toaster.push({
            message: translate('workflows.batch-terminate-all-success'),
            id: 'batch-terminate-success-toast',
        });
    }
    catch (err) {
        error = isNetworkError(err)
            ? err.message
            : translate('common.unknown-error');
    }
};
</script>

<Modal
  id="batch-terminate-confirmation-modal"
  bind:open
  bind:error
  data-testid="batch-terminate-confirmation"
  confirmType="destructive"
  cancelText={translate('common.cancel')}
  confirmDisabled={!jobIdValid}
  confirmText={translate('workflows.terminate')}
  on:confirmModal={terminateWorkflows}
>
  <h3 slot="title">
    <Translate key="workflows.batch-terminate-modal-title" />
  </h3>
  <svelte:fragment slot="content">
    <BatchOperationConfirmationModalBody
      bind:reason={$reason}
      bind:jobId={$jobId}
      bind:jobIdValid={$jobIdValid}
      {reasonPlaceholder}
      {jobIdPlaceholder}
      action={Action.Terminate}
    />
  </svelte:fragment>
</Modal>
