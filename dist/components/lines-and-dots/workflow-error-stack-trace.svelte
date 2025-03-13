<script>import Accordion from '../../holocene/accordion/accordion.svelte';
import CodeBlock from '../../holocene/code-block.svelte';
import { translate } from '../../i18n/translate';
export let failure = undefined;
</script>

{#if failure}
  <Accordion title={translate('common.failure')} class="text-sm">
    <div class="w-full text-right text-xs" slot="summary">
      {failure?.message}
    </div>
    <div class="flex flex-col gap-2">
      <p>{translate('common.message')}</p>
      <CodeBlock
        content={failure?.message || ''}
        language="text"
        copyIconTitle={translate('common.copy-icon-title')}
        copySuccessIconTitle={translate('common.copy-success-icon-title')}
      />
      {#if failure?.source}
        <p>{translate('common.source')}</p>
        <CodeBlock
          content={failure.source}
          language="text"
          copyIconTitle={translate('common.copy-icon-title')}
          copySuccessIconTitle={translate('common.copy-success-icon-title')}
        />
      {/if}
      {#if failure?.stackTrace}
        <p>{translate('common.stack-trace')}</p>
        <CodeBlock
          content={failure.stackTrace}
          language="text"
          copyIconTitle={translate('common.copy-icon-title')}
          copySuccessIconTitle={translate('common.copy-success-icon-title')}
        />
      {/if}
    </div>
  </Accordion>
{/if}
{#if failure?.cause}
  <svelte:self failure={failure.cause} />
{/if}
