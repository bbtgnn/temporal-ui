<script>import Copyable from '../../holocene/copyable/index.svelte';
import Icon from '../../holocene/icon/icon.svelte';
import Link from '../../holocene/link.svelte';
import Tooltip from '../../holocene/tooltip.svelte';
import { translate } from '../../i18n/translate';
export let title = '';
export let content;
export let copyable = false;
export let href = null;
export let textSize = 'md';
export let icon = undefined;
export let tooltip = '';
</script>

<p class="flex items-center gap-2 text-{textSize} whitespace-nowrap pt-2">
  {#if copyable}
    <Copyable
      copyIconTitle={translate('common.copy-icon-title')}
      copySuccessIconTitle={translate('common.copy-success-icon-title')}
      {content}
      visible
      container-class="gap-1 w-full"
    >
      {#if icon}
        <Icon name={icon} />
      {/if}
      {#if title}
        {title}
      {/if}
      {#if href}
        <Link
          {href}
          class="surface-subtle w-fit truncate rounded-sm p-1 leading-4"
          >{content}</Link
        >
      {:else}
        <Tooltip text={tooltip} hide={!tooltip} top>
          <span
            class="surface-subtle w-fit select-all truncate rounded-sm p-1 leading-4"
            >{content}</span
          >
        </Tooltip>
      {/if}
    </Copyable>
  {:else}
    {#if icon}
      <Icon name={icon} />
    {/if}
    {#if title}
      {title}
    {/if}
    {#if href}
      <Link
        {href}
        class="surface-subtle w-fit truncate rounded-sm p-1 leading-4"
        >{content}</Link
      >
    {:else}
      <Tooltip text={tooltip} hide={!tooltip} top>
        <span
          class="surface-subtle w-fit select-all truncate rounded-sm p-1 leading-4"
          >{content}</span
        >
      </Tooltip>
    {/if}
  {/if}
</p>
