<script>import BatchOperationDetails from '../components/batch-operations/details.svelte';
import BatchOperationHeader from '../components/batch-operations/header.svelte';
import BatchOperationResults from '../components/batch-operations/results.svelte';
import Card from '../holocene/card.svelte';
import Link from '../holocene/link.svelte';
import { translate } from '../i18n/translate';
import { describeBatchOperation } from '../services/batch-service';
import { autoRefresh } from '../stores/batch-operations';
import { routeForBatchOperations } from '../utilities/route-for';
export let namespace;
export let jobId;
let fetchKey = 0;
let timeout;
const handleToggleAutoRefresh = (event) => {
    if (event.detail.checked) {
        fetchKey += 1;
    }
    else if (timeout) {
        window.clearTimeout(timeout);
    }
};
const fetchBatchOperation = () => describeBatchOperation({ jobId, namespace }).then((operation) => {
    if ($autoRefresh && operation.state === 'Running') {
        timeout = window.setTimeout(() => {
            fetchKey += 1;
        }, 5000);
    }
    return operation;
});
</script>

<div class="flex flex-col gap-4">
  <div class="flex flex-row">
    <Link href={routeForBatchOperations({ namespace })} icon="chevron-left">
      {translate('batch.back-link')}
    </Link>
  </div>
  {#key fetchKey}
    {#await fetchBatchOperation() then operation}
      <BatchOperationHeader
        on:toggleAutoRefresh={handleToggleAutoRefresh}
        {operation}
      />
      <Card>
        <BatchOperationDetails {operation} />
      </Card>
      <Card>
        <BatchOperationResults {operation} />
      </Card>
    {/await}
  {/key}
</div>
