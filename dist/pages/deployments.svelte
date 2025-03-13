<script>import { page } from '$app/stores';
import DeploymentTableRow from '../components/deployments/deployment-table-row.svelte';
import Alert from '../holocene/alert.svelte';
import Badge from '../holocene/badge.svelte';
import EmptyState from '../holocene/empty-state.svelte';
import Link from '../holocene/link.svelte';
import PaginatedTable from '../holocene/table/paginated-table/api-paginated.svelte';
import { translate } from '../i18n/translate';
import { fetchPaginatedDeployments } from '../services/deployments-service';
let error = '';
$: namespace = $page.params.namespace;
$: onFetch = () => {
    error = '';
    return fetchPaginatedDeployments(namespace, '', onError);
};
const onError = (err) => {
    var _a;
    error =
        ((_a = err === null || err === void 0 ? void 0 : err.body) === null || _a === void 0 ? void 0 : _a.message) || translate('deployments.error-message-fetching');
};
const columns = [
    { label: translate('deployments.name'), pinned: true },
    {
        label: translate('deployments.deployment-version'),
        pinned: true,
    },
    { label: translate('deployments.deployed'), pinned: true },
    {
        label: translate('deployments.workflows'),
        pinned: true,
    },
];
</script>

<div class="flex flex-col gap-4">
  {#key [namespace]}
    <PaginatedTable
      let:visibleItems
      {onFetch}
      {onError}
      aria-label={translate('deployments.deployments')}
      pageSizeSelectLabel={translate('common.per-page')}
      nextButtonLabel={translate('common.next')}
      previousButtonLabel={translate('common.previous')}
      emptyStateMessage={translate('deployments.empty-state-title')}
      errorMessage={translate('deployments.error-message-fetching')}
    >
      <caption class="sr-only" slot="caption"
        >{translate('deployments.deployments')}</caption
      >
      <div class="flex flex-col gap-4" slot="header">
        <div class="flex flex-wrap items-center gap-2">
          <h1>
            {translate('deployments.worker-deployments')}
          </h1>
          <Badge class="shrink-0">Pre-Release</Badge>
        </div>
      </div>

      <tr slot="headers" class="text-left">
        {#each columns as { label }, index}
          <th class={index === 0 && 'w-full'}>{label}</th>
        {/each}
      </tr>
      {#each visibleItems as deployment}
        <DeploymentTableRow {deployment} {columns} />
      {/each}

      <svelte:fragment slot="empty">
        <EmptyState
          title={translate('deployments.empty-state-title')}
          class="px-4"
        >
          <p class="text-center">
            Enable Worker Deployments to manage your workers more effectively. <Link
              href="https://docs.temporal.io/worker-deployments"
              newTab>Learn more</Link
            >.
          </p>
          {#if error}
            <Alert intent="warning" icon="warning" class="px-12">
              {error}
            </Alert>
          {/if}
        </EmptyState>
      </svelte:fragment>
    </PaginatedTable>
  {/key}
</div>
