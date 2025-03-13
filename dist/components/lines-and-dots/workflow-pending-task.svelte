<script>import Accordion from '../../holocene/accordion/accordion.svelte';
import Badge from '../../holocene/badge.svelte';
import { translate } from '../../i18n/translate';
import { timeFormat } from '../../stores/time-format';
import { formatDate } from '../../utilities/format-date';
export let pendingTask = undefined;
</script>

<Accordion title={translate('workflows.pending-workflow-task')}>
  <div class="flex flex-col gap-2">
    <p class="flex items-center gap-4">
      {translate('common.state')}
      <Badge>{pendingTask.state}</Badge>
    </p>
    <p class="flex items-center gap-4">
      {translate('common.attempt')}
      <Badge>{pendingTask.attempt}</Badge>
    </p>
    <p class="flex items-center gap-4">
      {translate('workflows.original-scheduled-time')}
      <Badge>{formatDate(pendingTask.originalScheduledTime, $timeFormat)}</Badge
      >
    </p>
    <p class="flex items-center gap-4">
      {translate('workflows.scheduled-time')}
      <Badge>{formatDate(pendingTask.scheduledTime, $timeFormat)}</Badge>
    </p>
    <p class="flex items-center gap-4">
      {translate('workflows.started-time')}
      <Badge>{formatDate(pendingTask.startedTime, $timeFormat)}</Badge>
    </p>
  </div>
</Accordion>
