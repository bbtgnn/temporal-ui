<script>import DataEncoderStatus from './data-encoder-status.svelte';
import TimezoneSelect from './timezone-select.svelte';
import { translate } from '../i18n/translate';
let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<nav
  class="surface-primary sticky top-0 z-40 hidden w-full flex-col items-center justify-end border-b border-subtle p-1 px-4 md:flex md:flex-row md:px-8"
  data-testid="top-nav"
  aria-label={translate('common.main')}
>
  <div class="flex grow items-center">
    <slot name="left" />
  </div>
  <div class="flex items-center gap-2">
    <TimezoneSelect position={screenWidth < 768 ? 'left' : 'right'} />
    <DataEncoderStatus />
    <slot />
  </div>
</nav>
