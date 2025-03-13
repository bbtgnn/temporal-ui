<script>import { translate } from '../../i18n/translate';
import { relativeTime, timeFormat } from '../../stores/time-format';
import { formatDate } from '../../utilities/format-date';
import WorkflowDetail from '../lines-and-dots/workflow-detail.svelte';
export let version;
</script>

<div class="flex w-full flex-col gap-2 lg:flex-row lg:gap-8 xl:gap-16">
  <div class="flex w-full flex-col gap-2 lg:w-1/3 xl:w-1/4">
    <WorkflowDetail
      title={translate('common.status')}
      content={version.drainageInfo.status}
    />
    <WorkflowDetail
      title={translate('deployments.rollout-started')}
      content={formatDate(version.createTime, $timeFormat, {
        relative: $relativeTime,
      })}
    />
  </div>
  <div class="flex w-full flex-col gap-2 lg:w-1/3 xl:w-1/4">
    <WorkflowDetail title={translate('deployments.rollout-id')} content="-" />
    <WorkflowDetail title={translate('deployments.rollout-url')} content="-" />
  </div>
</div>
