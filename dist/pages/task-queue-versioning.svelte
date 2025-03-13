<script>import { page } from '$app/stores';
import WorkerCompatibility from '../components/worker-compatibility.svelte';
import WorkerRules from '../components/worker-rules.svelte';
import SkeletonTable from '../holocene/skeleton/table.svelte';
import { getVersioning, getWorkerTaskReachability, } from '../services/pollers-service';
import { getUniqueBuildIdsFromPollers, pollerHasVersioning, } from '../utilities/task-queue-compatibility';
export let taskQueue;
export let workers;
$: ({ namespace } = $page.params);
$: versioningEnabled = pollerHasVersioning(workers.pollers);
$: buildIds = getUniqueBuildIdsFromPollers(workers.pollers);
$: hasRules = (rules) => {
    return (rules === null || rules === void 0 ? void 0 : rules.assignmentRules) || (rules === null || rules === void 0 ? void 0 : rules.compatibleRedirectRules);
};
</script>

{#await getVersioning({ namespace, queue: taskQueue })}
  <SkeletonTable rows={3} />
{:then { rules, compatibility, versionSets }}
  {#if hasRules(rules)}
    <WorkerRules {rules} />
  {:else if versioningEnabled && versionSets?.length}
    {#await getWorkerTaskReachability( { namespace, buildIds, queue: taskQueue }, )}
      <SkeletonTable rows={3} />
    {:then reachability}
      <slot {compatibility} />
      <WorkerCompatibility
        {taskQueue}
        {workers}
        {compatibility}
        {reachability}
      />
    {/await}
  {:else}
    <p>No versioning configured for task queue.</p>
  {/if}
{/await}
