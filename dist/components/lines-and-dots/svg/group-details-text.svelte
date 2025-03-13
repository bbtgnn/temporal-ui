<script>import EventDetailsLink from '../../event/event-details-link.svelte';
import PayloadDecoder from '../../event/payload-decoder.svelte';
import CodeBlock from '../../../holocene/code-block.svelte';
import { displayLinkType, getCodeBlockValue, } from '../../../utilities/get-single-attribute-for-event';
import { DetailsConfig, staticCodeBlockHeight } from '../constants';
export let key;
export let value;
export let attributes;
export let onDecode = undefined;
const { fontSizeRatio } = DetailsConfig;
$: codeBlockValue = getCodeBlockValue(value);
$: linkType = displayLinkType(key, attributes);
</script>

{#if typeof value === 'object'}
  {#if value?.payloads}
    <PayloadDecoder {value} key="payloads" let:decodedValue {onDecode}>
      {#key decodedValue}
        <CodeBlock
          content={decodedValue}
          maxHeight={staticCodeBlockHeight - fontSizeRatio}
        />
      {/key}
    </PayloadDecoder>
  {:else if key === 'searchAttributes'}
    <PayloadDecoder
      key="searchAttributes"
      value={{ searchAttributes: codeBlockValue }}
      let:decodedValue
      {onDecode}
    >
      {#key decodedValue}
        <CodeBlock
          content={decodedValue}
          maxHeight={staticCodeBlockHeight - fontSizeRatio}
        />
      {/key}
    </PayloadDecoder>
  {:else}
    <PayloadDecoder value={codeBlockValue} let:decodedValue {onDecode}>
      {#key decodedValue}
        <CodeBlock
          content={decodedValue}
          maxHeight={staticCodeBlockHeight - fontSizeRatio}
        />
      {/key}
    </PayloadDecoder>
  {/if}
{:else if linkType !== 'none'}
  <EventDetailsLink {value} {attributes} type={linkType} />
{:else}
  {value}
{/if}
