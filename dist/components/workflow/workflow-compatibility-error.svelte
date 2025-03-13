<script>var _a;
import { fly } from 'svelte/transition';
import Alert from '../../holocene/alert.svelte';
import { translate } from '../../i18n/translate';
import { workflowRun } from '../../stores/workflow-run';
import { workflowIsCompatibleWithWorkers } from '../../utilities/task-queue-compatibility';
export let compatibility;
$: ({ workflow, workers } = $workflowRun);
$: runningWithNoWorkers = (workflow === null || workflow === void 0 ? void 0 : workflow.isRunning) && !((_a = workers === null || workers === void 0 ? void 0 : workers.pollers) === null || _a === void 0 ? void 0 : _a.length);
$: runningWithNoCompatibleWorkers =
    (workflow === null || workflow === void 0 ? void 0 : workflow.isRunning) &&
        !workflowIsCompatibleWithWorkers(workflow, workers.pollers, compatibility);
</script>

{#if !runningWithNoWorkers && runningWithNoCompatibleWorkers}
  <div class="mb-4" in:fly={{ duration: 200, delay: 100 }}>
    <Alert
      icon="warning"
      intent="warning"
      title={translate('workflows.workflow-error-no-compatible-workers-title')}
    >
      {translate('workflows.workflow-error-no-compatible-workers-description', {
        taskQueue: workflow?.taskQueue,
      })}
    </Alert>
  </div>
{/if}
