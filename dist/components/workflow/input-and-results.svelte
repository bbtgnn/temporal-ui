<script>import Badge from '../../holocene/badge.svelte';
import CodeBlock from '../../holocene/code-block.svelte';
import { translate } from '../../i18n/translate';
import { parseWithBigInt, stringifyWithBigInt, } from '../../utilities/parse-with-big-int';
import PayloadDecoder from '../event/payload-decoder.svelte';
export let content;
export let title;
export let running = false;
$: parsedContent = parseContent(content);
$: payloads = getPayloads(parsedContent);
$: showParsedContent = payloads.length > 0;
$: showParsedContentCount = payloads.length > 1;
const parseContent = (c) => {
    try {
        return parseWithBigInt(c);
    }
    catch {
        return undefined;
    }
};
const parsePayloads = (c) => {
    try {
        const data = parseWithBigInt(c);
        return Array.isArray(data) ? parseWithBigInt(c) : [];
    }
    catch {
        return [];
    }
};
const getPayloads = (value) => {
    try {
        const payloads = value === null || value === void 0 ? void 0 : value.payloads;
        return Array.isArray(payloads) ? payloads : [];
    }
    catch {
        return [];
    }
};
</script>

<article class="flex w-full flex-col" {...$$restProps}>
  <h3 class="mb-2 flex items-center gap-2">
    {title}
    {#if showParsedContentCount}
      <Badge type="count">{payloads.length}</Badge>
    {/if}
  </h3>
  {#if content}
    {#if showParsedContent}
      <div class="max-h-96 overflow-auto p-1">
        <PayloadDecoder value={parsedContent} key="payloads" let:decodedValue>
          {#each parsePayloads(decodedValue) as decodedContent}
            <CodeBlock
              content={stringifyWithBigInt(decodedContent)}
              class="mb-2"
              copyIconTitle={translate('common.copy-icon-title')}
              copySuccessIconTitle={translate('common.copy-success-icon-title')}
            />
          {/each}
        </PayloadDecoder>
      </div>
    {:else}
      <PayloadDecoder value={parseWithBigInt(content)} let:decodedValue>
        <CodeBlock
          content={decodedValue}
          class="mb-2 pt-1"
          maxHeight={384}
          copyIconTitle={translate('common.copy-icon-title')}
          copySuccessIconTitle={translate('common.copy-success-icon-title')}
        />
      </PayloadDecoder>
    {/if}
  {:else}
    <CodeBlock
      content={running ? 'Results will appear upon completion.' : ''}
      language="text"
      class="mb-2 pt-1"
      maxHeight={384}
      copyable={false}
    />
  {/if}
</article>
