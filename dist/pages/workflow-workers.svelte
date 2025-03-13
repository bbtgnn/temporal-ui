<script>import { page } from '$app/stores';
import WorkerTable from '../components/worker-table.svelte';
import Link from '../holocene/link.svelte';
import { translate } from '../i18n/translate';
import {} from '../services/pollers-service';
import { routeForTaskQueue } from '../utilities/route-for';
export let taskQueue;
export let workers;
$: ({ namespace } = $page.params);
</script>

<section class="flex flex-col gap-4">
  <h2 data-testid="task-queue-name">
    {translate('common.task-queue')}:
    <Link
      href={routeForTaskQueue({
        namespace,
        queue: taskQueue,
      })}>{taskQueue}</Link
    >
  </h2>
  <WorkerTable {workers} />
</section>
