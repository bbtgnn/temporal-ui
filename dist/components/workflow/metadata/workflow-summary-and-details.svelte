<script>var _a, _b;
import AccordionLight from '../../../holocene/accordion/accordion-light.svelte';
import Icon from '../../../holocene/icon/icon.svelte';
import Markdown from '../../../holocene/monaco/markdown.svelte';
import { translate } from '../../../i18n/translate';
import { workflowRun } from '../../../stores/workflow-run';
$: summary = (_a = $workflowRun === null || $workflowRun === void 0 ? void 0 : $workflowRun.userMetadata) === null || _a === void 0 ? void 0 : _a.summary;
$: details = (_b = $workflowRun === null || $workflowRun === void 0 ? void 0 : $workflowRun.userMetadata) === null || _b === void 0 ? void 0 : _b.details;
$: hasUserMetadata = summary || details;
</script>

{#if hasUserMetadata}
  <AccordionLight let:open>
    <div slot="title" class="flex w-full items-center gap-2 p-2 text-xl">
      <Icon name="info" class="text-brand" width={32} height={32} />{translate(
        'workflows.summary-and-details',
      )}
    </div>
    {#if open && summary}
      <h3>{translate('workflows.summary')}</h3>
      <Markdown content={summary} />
    {/if}
    {#if open && details}
      <h3>{translate('workflows.details')}</h3>
      <Markdown content={details} />
    {/if}
  </AccordionLight>
{/if}
