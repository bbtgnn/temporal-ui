<script>import { translate } from '../../i18n/translate';
import { routeForNamespace } from '../../utilities/route-for';
import EventLink from './event-link.svelte';
export let links = [];
</script>

{#each links as link}
  {#if link?.workflowEvent}
    <div class="flex w-full items-center gap-4 p-2">
      <EventLink {link} />
    </div>
    <div class="flex w-full items-center gap-4 p-2">
      <EventLink
        {link}
        label={translate('nexus.link-namespace')}
        value={link.workflowEvent.namespace}
        href={routeForNamespace({ namespace: link.workflowEvent.namespace })}
      />
    </div>
  {/if}
{/each}
