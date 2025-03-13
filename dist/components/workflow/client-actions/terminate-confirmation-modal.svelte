<script>import Input from '../../../holocene/input/input.svelte';
import Modal from '../../../holocene/modal.svelte';
import { translate } from '../../../i18n/translate';
import { terminateWorkflow } from '../../../services/workflow-service';
import { toaster } from '../../../stores/toaster';
import { isNetworkError } from '../../../utilities/is-network-error';
export let open;
export let workflow;
export let namespace;
export let refresh;
let reason = '';
let error = '';
let loading = false;
const hideModal = () => {
    open = false;
    reason = '';
};
const terminate = async () => {
    error = '';
    loading = true;
    try {
        await terminateWorkflow({
            workflow,
            namespace,
            reason,
        });
        open = false;
        reason = '';
        $refresh = Date.now();
        toaster.push({
            id: 'workflow-termination-success-toast',
            message: translate('workflows.terminate-success'),
        });
    }
    catch (err) {
        error = isNetworkError(err)
            ? err.message
            : translate('common.unknown-error');
    }
    finally {
        loading = false;
    }
};
</script>

<Modal
  id="terminate-confirmation-modal"
  data-testid="terminate-confirmation-modal"
  bind:error
  bind:open
  {loading}
  confirmText={translate('workflows.terminate')}
  cancelText={translate('common.cancel')}
  confirmType="destructive"
  on:cancelModal={hideModal}
  on:confirmModal={terminate}
>
  <h3 slot="title">{translate('workflows.terminate-modal-title')}</h3>
  <div slot="content">
    <p>
      {translate('workflows.terminate-modal-confirmation')}
    </p>
    <Input
      id="workflow-termination-reason"
      class="mt-4"
      placeholder={translate('common.reason-placeholder')}
      label={translate('common.reason-placeholder')}
      labelHidden
      bind:value={reason}
    />
  </div>
</Modal>
