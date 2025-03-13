<script>var _a;
import { writable } from 'svelte/store';
import PayloadInputWithEncoding, {} from '../../payload-input-with-encoding.svelte';
import Input from '../../../holocene/input/input.svelte';
import Modal from '../../../holocene/modal.svelte';
import Option from '../../../holocene/select/option.svelte';
import Select from '../../../holocene/select/select.svelte';
import { translate } from '../../../i18n/translate';
import { signalWorkflow } from '../../../services/workflow-service';
import { toaster } from '../../../stores/toaster';
import { workflowRun } from '../../../stores/workflow-run';
import { isNetworkError } from '../../../utilities/is-network-error';
export let open;
export let workflow;
export let namespace;
export let refresh;
$: ({ metadata } = $workflowRun);
$: signalDefinitions = (_a = metadata === null || metadata === void 0 ? void 0 : metadata.definition) === null || _a === void 0 ? void 0 : _a.signalDefinitions;
const defaultEncoding = 'json/plain';
let error = '';
let loading = false;
let name = '';
let customSignal = false;
let input = '';
let encoding = writable(defaultEncoding);
let messageType = '';
const hideSignalModal = () => {
    open = false;
    name = '';
    input = '';
    customSignal = false;
    $encoding = defaultEncoding;
    messageType = '';
};
const signal = async () => {
    error = '';
    loading = true;
    try {
        await signalWorkflow({
            namespace,
            workflow,
            input,
            encoding: $encoding,
            messageType,
            name,
        });
        $refresh = Date.now();
        toaster.push({
            message: translate('workflows.signal-success'),
            id: 'workflow-signal-success-toast',
        });
        hideSignalModal();
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
const handleCustom = () => {
    customSignal = true;
    name = '';
};
</script>

<Modal
  id="signal-confirmation-modal"
  data-testid="signal-confirmation-modal"
  bind:error
  bind:open
  {loading}
  confirmText={translate('common.submit')}
  cancelText={translate('common.cancel')}
  confirmDisabled={!name || !encoding}
  on:cancelModal={hideSignalModal}
  on:confirmModal={signal}
>
  <h3 slot="title">{translate('workflows.signal-modal-title')}</h3>
  <div slot="content" class="flex flex-col gap-4">
    {#if signalDefinitions?.length > 0 && !customSignal}
      <Select
        id="signal-select"
        label={translate('workflows.signal-name-label')}
        class="min-w-fit"
        bind:value={name}
        data-testid="signal-select"
        placeholder="Select a signal"
        required
      >
        {#each signalDefinitions as { name: value, description = '' }}
          <Option {value} {description}>{value}</Option>
        {/each}
        <Option
          on:click={handleCustom}
          value="custom"
          description="Input Signal name">Custom</Option
        >
      </Select>
    {:else}
      <Input
        id="signal-name"
        label={translate('workflows.signal-name-label')}
        required
        bind:value={name}
      />
    {/if}
    <PayloadInputWithEncoding bind:input bind:encoding bind:messageType />
  </div>
</Modal>
