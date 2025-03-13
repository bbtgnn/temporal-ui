<script>import { goto } from '$app/navigation';
import Button from '../holocene/button.svelte';
import Link from '../holocene/link.svelte';
import { translate } from '../i18n/translate';
import NexusForm, { endpointForm } from './nexus-form.svelte';
import { routeForNexus } from '../utilities/route-for';
export let onCreate;
export let targetNamespaceList = [];
export let callerNamespaceList = [];
export let error = undefined;
export let loading = false;
export let isCloud = false;
export let nameRegexPattern = /^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]$/;
export let nameHintText = translate('nexus.endpoint-name-hint-with-dash');
$: createDisabled =
    $endpointForm.spec.name === '' ||
        $endpointForm.spec.target.worker.namespace === '' ||
        $endpointForm.spec.target.worker.taskQueue === '';
</script>

<div class="flex w-full flex-col gap-8">
  <div class="text-sm">
    <Link href={routeForNexus()} icon="chevron-left">
      {translate('nexus.back-to-endpoints')}
    </Link>
  </div>
  <h1 data-testid="namespace-selector-title">
    {translate('nexus.create-endpoint')}
  </h1>
  <NexusForm
    {nameRegexPattern}
    {nameHintText}
    {error}
    {targetNamespaceList}
    {callerNamespaceList}
    {isCloud}
  />
  <div class="flex flex-row items-center gap-4 max-sm:flex-col">
    <Button
      variant="primary"
      on:click={onCreate}
      disabled={createDisabled}
      class="max-sm:w-full"
      {loading}>{translate('nexus.create-endpoint')}</Button
    >
    <Button
      variant="ghost"
      class="max-sm:w-full"
      on:click={() => goto(routeForNexus())}
      >{translate('common.cancel')}</Button
    >
  </div>
</div>
