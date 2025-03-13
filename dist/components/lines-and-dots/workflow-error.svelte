<script>import AccordionGroup from '../../holocene/accordion/accordion-group.svelte';
import Alert from '../../holocene/alert.svelte';
import Icon from '../../holocene/icon/icon.svelte';
import Link from '../../holocene/link.svelte';
import { translate } from '../../i18n/translate';
import { relativeTime, timeFormat } from '../../stores/time-format';
import { spaceBetweenCapitalLetters } from '../../utilities/format-camel-case';
import { formatDate } from '../../utilities/format-date';
import { getErrorCause } from '../../utilities/get-workflow-task-failed-event';
import { CategoryIcon } from './constants';
import WorkflowErrorStackTrace from './workflow-error-stack-trace.svelte';
import WorkflowPendingTask from './workflow-pending-task.svelte';
export let error;
export let pendingTask = undefined;
let cause;
$: {
    cause = getErrorCause(error);
}
</script>

{#if cause && cause !== 'ResetWorkflow'}
  <Alert
    icon="warning"
    intent="warning"
    title={translate(`typed-errors.${cause}.title`)}
  >
    <p>
      {translate(`typed-errors.${cause}.description`)}
    </p>
    {#if cause === 'WorkflowWorkerUnhandledFailure' || cause === 'BadSearchAttributes'}
      <p>
        {translate('typed-errors.link-preface')}<Link
          newTab
          href={translate(`typed-errors.${cause}.link`)}
          >{translate(`typed-errors.${cause}.action`)}</Link
        >.
      </p>
    {/if}
    <div
      class="mt-2 flex w-full flex-col gap-0 overflow-hidden border border-danger"
    >
      <div class="flex items-center justify-between gap-2 bg-danger px-2 py-2">
        <div class="flex items-center gap-2">
          {error.id}
          <Icon name={CategoryIcon[error.category]} />
          <span class="font-semibold text-danger"
            >{spaceBetweenCapitalLetters(error?.name)}</span
          >
        </div>
        {formatDate(error?.eventTime, $timeFormat, {
          relative: $relativeTime,
        })}
      </div>
      <div class="flex flex-col gap-2 bg-primary p-4">
        {#if error.attributes?.failure}
          <AccordionGroup>
            <WorkflowErrorStackTrace failure={error.attributes.failure} />
            {#if pendingTask}
              <WorkflowPendingTask {pendingTask} />
            {/if}
          </AccordionGroup>
        {/if}
      </div>
    </div>
  </Alert>
{/if}
