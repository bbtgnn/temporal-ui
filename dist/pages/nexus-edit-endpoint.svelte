<script>import { goto } from '$app/navigation';
import { page } from '$app/stores';
import Button from '../holocene/button.svelte';
import Input from '../holocene/input/input.svelte';
import Link from '../holocene/link.svelte';
import Modal from '../holocene/modal.svelte';
import { translate } from '../i18n/translate';
import NexusForm from './nexus-form.svelte';
import { routeForNexusEndpoint } from '../utilities/route-for';
export let endpoint;
export let targetNamespaceList = [];
export let callerNamespaceList = [];
export let onUpdate;
export let onDelete;
export let error = undefined;
export let loading = false;
export let isCloud = false;
export let nameRegexPattern = /^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]$/;
export let nameHintText = translate('nexus.endpoint-name-hint-with-dash');
let deleteConfirmationModalOpen = false;
let confirmDeleteInput = '';
</script>

<div class="flex flex-col gap-8">
  <div class="relative flex flex-col gap-4 text-sm">
    <Link href={routeForNexusEndpoint($page.params.id)} icon="chevron-left">
      {translate('nexus.back-to-endpoint')}
    </Link>
  </div>
  <div class="flex flex-col gap-1">
    <h1 data-testid="namespace-selector-title">
      {endpoint.spec.name}
    </h1>
  </div>
  <NexusForm
    {endpoint}
    {nameHintText}
    {nameRegexPattern}
    {targetNamespaceList}
    {callerNamespaceList}
    {error}
    {isCloud}
    nameDisabled
  />
  <div
    class="flex w-full flex-row items-center justify-between gap-4 max-sm:flex-col xl:w-1/2"
  >
    <div
      class="items-centeritems-center flex w-full flex-row gap-4 max-sm:flex-col"
    >
      <Button class="max-sm:w-full" on:click={onUpdate} {loading}
        >{translate('common.save')}</Button
      >
      <Button
        class="max-sm:hidden"
        variant="ghost"
        on:click={() => goto(routeForNexusEndpoint($page.params.id))}
        >{translate('common.cancel')}</Button
      >
    </div>
    <Button
      class="max-sm:w-full"
      variant="destructive"
      on:click={() => (deleteConfirmationModalOpen = true)}
      >{translate('common.delete')}</Button
    >
    <Button
      class="w-full sm:hidden"
      variant="ghost"
      on:click={() => goto(routeForNexusEndpoint($page.params.id))}
      >{translate('common.cancel')}</Button
    >
  </div>
</div>
<Modal
  id="delete-endpoint-modal"
  bind:open={deleteConfirmationModalOpen}
  {loading}
  confirmType="destructive"
  confirmText={translate('common.delete')}
  cancelText={translate('common.cancel')}
  on:confirmModal={onDelete}
  on:cancelModal={() => (deleteConfirmationModalOpen = false)}
  confirmDisabled={confirmDeleteInput !== endpoint.spec.name}
>
  <h3 slot="title">{translate('nexus.delete-modal-title')}</h3>
  <div slot="content" class="flex flex-col gap-4">
    <p>
      {translate('nexus.delete-modal-confirmation-preface')}
      <strong class="select-all">{endpoint.spec.name}</strong>?
      {translate('nexus.delete-modal-confirmation-postface')}
    </p>
    <p>
      {translate('nexus.type-confirm-preface')}
      <strong class="select-all">{endpoint.spec.name}</strong>
      {translate('nexus.type-confirm-postface')}
    </p>
    <Input
      id="delete-endpoint"
      labelHidden
      label={translate('nexus.delete-endpoint')}
      bind:value={confirmDeleteInput}
    />
  </div>
</Modal>
