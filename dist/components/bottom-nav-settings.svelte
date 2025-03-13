<script>import { onDestroy } from 'svelte';
import DataEncoderSettings from './data-encoder-settings.svelte';
import TimezoneSelect from './timezone-select.svelte';
import NavigationButton from '../holocene/navigation/navigation-button.svelte';
import { translate } from '../i18n/translate';
import { dataEncoder } from '../stores/data-encoder';
import { useDarkMode } from '../utilities/dark-mode';
import { viewDataEncoderSettings } from './data-encoder-settings.svelte';
export let open = false;
$: hasCodecServer = $dataEncoder === null || $dataEncoder === void 0 ? void 0 : $dataEncoder.endpoint;
const onCodecServerClick = () => {
    $viewDataEncoderSettings = !$viewDataEncoderSettings;
};
onDestroy(() => {
    $viewDataEncoderSettings = false;
});
</script>

{#if open}
  <div class="flex h-full flex-col justify-start gap-6 overflow-auto px-4 py-8">
    <TimezoneSelect position="left" />
    <NavigationButton
      onClick={onCodecServerClick}
      tooltip={translate('data-encoder.codec-server')}
      label={translate('data-encoder.codec-server')}
      data-testid="data-encoder-status{hasCodecServer
        ? $dataEncoder.hasError
          ? '-error'
          : '-configured'
        : ''}"
      icon={hasCodecServer
        ? $dataEncoder.hasError
          ? 'transcoder-error'
          : 'transcoder-on'
        : 'transcoder-off'}
    />
    <DataEncoderSettings />
    <div class="border-b border-subtle" />
    <NavigationButton
      onClick={() => ($useDarkMode = !$useDarkMode)}
      tooltip={$useDarkMode
        ? translate('common.night')
        : translate('common.day')}
      label={$useDarkMode ? translate('common.night') : translate('common.day')}
      icon={$useDarkMode ? 'moon' : 'sun'}
    />
    <slot />
  </div>
{/if}
