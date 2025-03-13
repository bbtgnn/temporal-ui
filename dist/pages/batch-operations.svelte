<script>import BatchOperationsTable from '../components/batch-operations/table.svelte';
import Alert from '../holocene/alert.svelte';
import Loading from '../holocene/loading.svelte';
import { translate } from '../i18n/translate';
import { listBatchOperations } from '../services/batch-service';
import { inProgressBatchOperation } from '../stores/batch-operations';
export let namespace;
</script>

<h1>{translate('batch.list-page-title')}</h1>
{#await listBatchOperations(namespace)}
  <Loading />
{:then { operations }}
  {#if $inProgressBatchOperation}
    <Alert
      icon="info"
      intent="info"
      title={translate('batch.max-concurrent-alert-title')}
    >
      {translate('batch.max-concurrent-alert-description')}
    </Alert>
  {/if}
  <BatchOperationsTable {operations} {namespace} />
{/await}
