<script>import IconButton from '../holocene/icon-button.svelte';
import Tooltip from '../holocene/tooltip.svelte';
import { translate } from '../i18n/translate';
import { dataEncoder } from '../stores/data-encoder';
import { viewDataEncoderSettings } from './data-encoder-settings.svelte';
const onIconClick = () => {
    var _a;
    $viewDataEncoderSettings = !$viewDataEncoderSettings;
    if ($viewDataEncoderSettings) {
        (_a = document.getElementById('content-wrapper')) === null || _a === void 0 ? void 0 : _a.scrollTo(0, 0);
    }
};
let variant = 'ghost';
const updateVariant = (open) => {
    variant = open ? 'primary' : 'ghost';
};
$: updateVariant($viewDataEncoderSettings);
</script>

<div class="mx-1 flex items-center">
  {#if $dataEncoder?.endpoint}
    {#if $dataEncoder?.hasNotRequested}
      <Tooltip
        bottomRight
        text={translate('data-encoder.codec-server-configured')}
      >
        <IconButton
          {variant}
          label={translate('data-encoder.codec-server-configured')}
          class="relative flex items-center"
          data-testid="data-encoder-status-configured"
          icon="transcoder-on"
          on:click={onIconClick}
        />
      </Tooltip>
    {:else if $dataEncoder.hasError}
      <Tooltip bottomRight text={translate('data-encoder.codec-server-error')}>
        <IconButton
          {variant}
          label={translate('data-encoder.codec-server-error')}
          class="relative flex items-center"
          data-testid="data-encoder-status-error"
          icon="transcoder-error"
          on:click={onIconClick}
        />
      </Tooltip>
    {:else if $dataEncoder.hasSuccess}
      <Tooltip
        bottomRight
        text={translate('data-encoder.codec-server-success')}
      >
        <IconButton
          {variant}
          label={translate('data-encoder.codec-server-success')}
          class="relative flex items-center"
          data-testid="data-encoder-status-success"
          icon="transcoder-on"
          on:click={onIconClick}
        />
      </Tooltip>
    {/if}
  {:else}
    <Tooltip
      bottomRight
      text={translate('data-encoder.configure-codec-server')}
    >
      <IconButton
        {variant}
        label={translate('data-encoder.configure-codec-server')}
        class="relative flex items-center"
        data-testid="data-encoder-status"
        icon="transcoder-off"
        on:click={onIconClick}
      />
    </Tooltip>
  {/if}
</div>
