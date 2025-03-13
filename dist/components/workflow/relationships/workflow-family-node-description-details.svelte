<script>import WorkflowStatus from '../../workflow-status.svelte';
import Icon from '../../../holocene/icon/icon.svelte';
import Link from '../../../holocene/link.svelte';
import { translate } from '../../../i18n/translate';
import { relativeTime, timeFormat } from '../../../stores/time-format';
import { formatDate } from '../../../utilities/format-date';
import { formatDistanceAbbreviated } from '../../../utilities/format-time';
import { routeForEventHistory } from '../../../utilities/route-for';
export let workflow;
export let namespace;
export let isRootWorkflow = false;
export let isActive = false;
$: elapsedTime = formatDistanceAbbreviated({
    start: workflow === null || workflow === void 0 ? void 0 : workflow.startTime,
    end: (workflow === null || workflow === void 0 ? void 0 : workflow.endTime) || Date.now(),
    includeMilliseconds: true,
});
</script>

<div
  class="flex w-full flex-col gap-2 p-1 text-left text-sm lg:flex-row lg:items-center"
>
  <div class="flex items-center gap-2 lg:basis-96">
    <div class="w-32 leading-4">
      <WorkflowStatus status={workflow.status} />
    </div>
    <div class="w-full leading-4">
      {#if isRootWorkflow}
        <p class="font-mono text-xs">{translate('common.type')}</p>
      {/if}
      <p>{workflow.name}</p>
    </div>
  </div>
  <div class="leading-4 lg:basis-[800px]">
    {#if isRootWorkflow}
      <p class="font-mono text-xs">{translate('common.id')}</p>
    {/if}
    <Link
      href={routeForEventHistory({
        namespace,
        workflow: workflow.id,
        run: workflow.runId,
      })}
      interactive={isActive}
    >
      {workflow.id}
    </Link>
  </div>
  <div class="hidden items-center gap-4 lg:flex lg:basis-5/12">
    <div class="leading-4">
      {#if isRootWorkflow}
        <p class="font-mono text-xs">
          {translate('common.start')}
        </p>
      {/if}
      <p>
        {formatDate(workflow?.startTime, $timeFormat, {
          relative: $relativeTime,
        })}
      </p>
    </div>
    <div class="leading-4">
      {#if isRootWorkflow}
        <p class="min-w-12 font-mono text-xs">{translate('common.end')}</p>
      {/if}
      <p>
        {formatDate(workflow?.endTime, $timeFormat, {
          relative: $relativeTime,
        }) || '-'}
      </p>
    </div>
    <div class="leading-4">
      {#if isRootWorkflow}
        <Icon name="clock" class="h-4 w-3" />
      {/if}
      <p>{elapsedTime}</p>
    </div>
  </div>
</div>
