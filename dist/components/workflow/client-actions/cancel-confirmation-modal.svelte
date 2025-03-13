<script>import Modal from '../../../holocene/modal.svelte';
import { translate } from '../../../i18n/translate';
import { cancelWorkflow } from '../../../services/workflow-service';
import { toaster } from '../../../stores/toaster';
import { isNetworkError } from '../../../utilities/is-network-error';
export let open;
export let workflow;
export let namespace;
export let refresh;
let loading;
let error = '';
const cancel = async () => {
    error = '';
    loading = true;
    try {
        await cancelWorkflow({
            namespace,
            workflow,
        });
        open = false;
        $refresh = Date.now();
        toaster.push({
            id: 'workflow-cancelation-success-toast',
            message: translate('workflows.cancel-success'),
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
  id="cancel-confirmation-modal"
  data-testid="cancel-confirmation-modal"
  confirmText={translate('common.confirm')}
  cancelText={translate('common.cancel')}
  bind:error
  bind:open
  {loading}
  confirmType="destructive"
  on:confirmModal={cancel}
>
  <h3 slot="title">{translate('workflows.cancel-modal-title')}</h3>
  <svelte:fragment slot="content">
    <p>
      {translate('workflows.cancel-modal-confirmation')}
    </p>
  </svelte:fragment>
</Modal>
