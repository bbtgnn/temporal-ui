<script>var _a;
import { page } from '$app/stores';
import AccordionLight from '../../../holocene/accordion/accordion-light.svelte';
import Button from '../../../holocene/button.svelte';
import Icon from '../../../holocene/icon/icon.svelte';
import Markdown from '../../../holocene/monaco/markdown.svelte';
import Tooltip from '../../../holocene/tooltip.svelte';
import { translate } from '../../../i18n/translate';
import { getWorkflowMetadata } from '../../../services/query-service';
import { authUser } from '../../../stores/auth-user';
import { workflowRun } from '../../../stores/workflow-run';
$: ({ namespace } = $page.params);
$: ({ workflow } = $workflowRun);
$: currentDetails = ((_a = $workflowRun === null || $workflowRun === void 0 ? void 0 : $workflowRun.metadata) === null || _a === void 0 ? void 0 : _a.currentDetails) || '';
$: closedWithoutDetails = !workflow.isRunning && !currentDetails;
let loading = false;
const fetchCurrentDetails = async () => {
    if (loading)
        return;
    loading = true;
    try {
        const { settings } = $page.data;
        const metadata = await getWorkflowMetadata({
            namespace,
            workflow: {
                id: workflow.id,
                runId: workflow.runId,
            },
        }, settings, $authUser === null || $authUser === void 0 ? void 0 : $authUser.accessToken);
        $workflowRun.metadata = metadata;
    }
    catch (error) {
        console.error('Error fetching current details:', error);
    }
    finally {
        loading = false;
    }
};
</script>

<AccordionLight
  let:open
  onToggle={closedWithoutDetails ? fetchCurrentDetails : undefined}
  icon={closedWithoutDetails ? 'retry' : undefined}
>
  <div slot="title" class="flex w-full items-center gap-2 p-2 text-xl">
    <Icon name="flag" class="text-brand" width={32} height={32} />
    {translate('workflows.current-details')}
    {#if loading}{translate('common.loading')}{/if}
  </div>
  {#if open}
    {#key currentDetails}
      <Markdown content={currentDetails} />
    {/key}
  {/if}
  <svelte:fragment slot="action">
    {#if workflow.isRunning}
      <Tooltip text={translate('workflows.update-details')} left>
        <Button
          variant="ghost"
          on:click={fetchCurrentDetails}
          disabled={loading}
        >
          <Icon name="retry" />
        </Button>
      </Tooltip>
    {/if}
  </svelte:fragment>
</AccordionLight>
