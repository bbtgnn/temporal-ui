<script>import Badge from '../../holocene/badge.svelte';
import CodeBlock from '../../holocene/code-block.svelte';
import Copyable from '../../holocene/copyable/index.svelte';
import { translate } from '../../i18n/translate';
import { timeFormat } from '../../stores/time-format';
import { format } from '../../utilities/format-camel-case';
import { formatDate } from '../../utilities/format-date';
import { displayLinkType, getCodeBlockValue, getStackTrace, shouldDisplayAsTime, } from '../../utilities/get-single-attribute-for-event';
import EventDetailsLink from './event-details-link.svelte';
import PayloadDecoder from './payload-decoder.svelte';
export let key;
export let value;
export let attributes;
$: codeBlockValue = getCodeBlockValue(value);
$: stackTrace = getStackTrace(codeBlockValue);
$: linkType = displayLinkType(key, attributes);
</script>

<div class="flex {$$props.class}">
  {#if typeof value === 'object'}
    <div class="content code-block-row">
      <div class="flex flex-col">
        <p class="text-sm">{format(key)}</p>
        {#if value?.payloads}
          <PayloadDecoder {value} key="payloads" let:decodedValue>
            <CodeBlock
              content={decodedValue}
              maxHeight={384}
              copyIconTitle={translate('common.copy-icon-title')}
              copySuccessIconTitle={translate('common.copy-success-icon-title')}
            />
          </PayloadDecoder>
        {:else if key === 'searchAttributes'}
          <PayloadDecoder
            key="searchAttributes"
            value={{ searchAttributes: codeBlockValue }}
            let:decodedValue
          >
            <CodeBlock
              content={decodedValue}
              maxHeight={384}
              copyIconTitle={translate('common.copy-icon-title')}
              copySuccessIconTitle={translate('common.copy-success-icon-title')}
            />
          </PayloadDecoder>
        {:else}
          <PayloadDecoder value={codeBlockValue} let:decodedValue>
            <CodeBlock
              content={decodedValue}
              maxHeight={384}
              copyIconTitle={translate('common.copy-icon-title')}
              copySuccessIconTitle={translate('common.copy-success-icon-title')}
            />
          </PayloadDecoder>
        {/if}
      </div>
      {#if stackTrace}
        <div class="flex flex-col">
          <p class="text-sm">{translate('workflows.call-stack-tab')}</p>
          <CodeBlock
            content={stackTrace}
            language="text"
            class="mb-2 h-full lg:pr-2"
            copyIconTitle={translate('common.copy-icon-title')}
            copySuccessIconTitle={translate('common.copy-success-icon-title')}
          />
        </div>
      {/if}
    </div>
  {:else if linkType !== 'none'}
    <div class="content detail-row">
      <p class="text-sm">{format(key)}</p>
      <Copyable
        copyIconTitle={translate('common.copy-icon-title')}
        copySuccessIconTitle={translate('common.copy-success-icon-title')}
        content={String(value)}
      >
        <EventDetailsLink
          value={String(value)}
          {attributes}
          type={linkType}
          class="whitespace-pre-line"
        />
      </Copyable>
    </div>
  {:else}
    <div class="content detail-row">
      <p class="text-sm">{format(key)}</p>
      <Badge type="subtle" class="inline-block whitespace-pre-wrap">
        {shouldDisplayAsTime(key) ? formatDate(value, $timeFormat) : value}
      </Badge>
    </div>
  {/if}
</div>

<style>
  .content {

    display: block;

    width: 100%;

    padding-left: 0.5rem;

    padding-right: 0.5rem;

    padding-top: 0.25rem;

    padding-bottom: 0.25rem;

    text-align: left
}

  .code-block-row {

    display: block;

    width: 100%;

    -webkit-user-select: all;

       -moz-user-select: all;

            user-select: all;

    padding-top: 0.25rem;

    padding-bottom: 0.25rem;

    text-align: left
}

  .detail-row {

    display: flex;

    width: 100%;

    align-items: center;

    gap: 0.5rem;

    padding-top: 0.25rem;

    padding-bottom: 0.25rem;

    text-align: left
}</style>
