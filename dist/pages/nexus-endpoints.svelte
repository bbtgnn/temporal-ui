<script>import debounce from 'just-debounce';
import { page } from '$app/stores';
import Badge from '../holocene/badge.svelte';
import Button from '../holocene/button.svelte';
import EmptyState from '../holocene/empty-state.svelte';
import Input from '../holocene/input/input.svelte';
import Link from '../holocene/link.svelte';
import { translate } from '../i18n/translate';
import NexusEmptyState from './nexus-empty-state.svelte';
import { timeFormat } from '../stores/time-format';
import { formatDate } from '../utilities/format-date';
import { pluralize } from '../utilities/pluralize';
import { routeForNexusEndpoint, routeForNexusEndpointCreate, } from '../utilities/route-for';
import { updateQueryParameters } from '../utilities/update-query-parameters';
export let endpoints = [];
export let searchPlaceholder = translate('common.search');
export let createDisabled = false;
let search = '';
$: searchParam = $page.url.searchParams.get('search') || '';
const searchParamUpdate = debounce((value) => {
    updateQueryParameters({
        parameter: 'search',
        value,
        url: $page.url,
    });
}, 350);
$: {
    searchParamUpdate(search);
}
</script>

{#if !endpoints?.length && !searchParam}
  <NexusEmptyState {createDisabled}>
    <slot />
  </NexusEmptyState>
{:else}
  <div class="mb-8 flex items-center justify-between">
    <h1 data-testid="namespace-selector-title">
      {translate('nexus.endpoints')}
    </h1>
    <Button
      disabled={createDisabled}
      variant="primary"
      href={routeForNexusEndpointCreate()}
      >{translate('nexus.create-endpoint')}</Button
    >
  </div>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col justify-between lg:flex-row">
      <Input
        id="endpoint-search"
        bind:value={search}
        icon="search"
        label={searchPlaceholder}
        labelHidden
        autoFocus
        type="search"
        placeholder={searchPlaceholder}
        class="w-full lg:w-1/2"
      />
    </div>
    {#if endpoints.length}
      <div
        class="grid grid-cols-1 gap-4 pr-8 md:grid-cols-2 md:pr-24 lg:grid-cols-3 xl:grid-cols-4 xl:pr-48"
      >
        {#each endpoints as endpoint}
          <Link href={routeForNexusEndpoint(endpoint.id)} role="button">
            <div
              class="transition:colors flex cursor-pointer flex-col gap-1 p-4 duration-200 ease-in-out"
            >
              <h3 class="break-all">
                {endpoint.spec.name}
              </h3>
              {#if endpoint.lastModifiedTime}
                <p class="text-xs text-secondary">
                  Last update {formatDate(
                    endpoint.lastModifiedTime,
                    $timeFormat,
                  )}
                </p>
              {/if}
              {#if endpoint.createdTime}
                <p class="text-xs text-secondary">
                  Created on {formatDate(endpoint.createdTime, $timeFormat)}
                </p>
              {/if}
              {#if endpoint.spec?.allowedCallerNamespaces}
                <Badge type="primary" class="px-2 py-1"
                  >{endpoint.spec?.allowedCallerNamespaces.length}
                  {pluralize(
                    translate('namespaces.namespace'),
                    endpoint.spec?.allowedCallerNamespaces.length,
                  )}</Badge
                >
              {/if}
            </div>
          </Link>
        {/each}
      </div>
    {:else}
      <div class="flex w-full justify-center">
        <EmptyState title={translate('nexus.empty-state')} />
      </div>
    {/if}
  </div>
{/if}
