<script>import { translate } from '../../../i18n/translate';
import { routeForRelationships, routeForSchedule, } from '../../../utilities/route-for';
import ContinueAsNewNode from './continue-as-new-node.svelte';
export let namespace;
export let workflowId;
export let scheduleId;
export let current;
</script>

<div
  class="flex w-full flex-col items-center justify-between gap-4 bg-primary px-8 py-12 xl:px-32"
>
  <ContinueAsNewNode
    label="Schedule"
    value={scheduleId}
    icon="schedules"
    href={routeForSchedule({
      namespace: namespace,
      scheduleId,
    })}
  />
  <div class="border-top border-1 h-24 w-0.5 bg-subtle" />
  <ContinueAsNewNode
    label={translate('workflows.current-execution')}
    value={current}
    href={routeForRelationships({
      namespace,
      workflow: workflowId,
      run: current,
    })}
    current
  />
</div>
