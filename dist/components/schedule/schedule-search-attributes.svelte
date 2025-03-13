<script>var _a;
import Accordion from '../../holocene/accordion/accordion.svelte';
import { translate } from '../../i18n/translate';
import { decodePayloadAttributes } from '../../utilities/decode-payload';
import { payloadToString } from '../../utilities/payload-to-string';
import { pluralize } from '../../utilities/pluralize';
export let searchAttributes;
$: decodedSearchAttributes = decodePayloadAttributes({ searchAttributes });
$: indexedFields =
    (_a = decodedSearchAttributes === null || decodedSearchAttributes === void 0 ? void 0 : decodedSearchAttributes.searchAttributes.indexedFields) !== null && _a !== void 0 ? _a : {};
$: searchAttributeCount = Object.keys(indexedFields).length;
</script>

<Accordion
  title={translate('events.custom-search-attributes')}
  subtitle={`${searchAttributeCount} ${translate(
    'events.custom-search',
  )} ${pluralize(translate('events.attribute'), searchAttributeCount)}`}
  expandable={searchAttributeCount > 0}
>
  {#if searchAttributeCount}
    <ul class="w-full">
      {#each Object.entries(indexedFields) as [searchAttrName, searchAttrValue]}
        {@const value = payloadToString(searchAttrValue)}
        <li
          class="flex flex-wrap items-center gap-2 border-b py-2 last-of-type:border-b-0"
        >
          <span class="break-all">{searchAttrName}</span>
          <span class="surface-subtle select-all rounded-sm p-1 leading-4"
            >{value}</span
          >
        </li>
      {/each}
    </ul>
  {/if}
</Accordion>
