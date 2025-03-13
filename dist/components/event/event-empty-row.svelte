<script>import EmptyState from '../../holocene/empty-state.svelte';
import Loading from '../../holocene/loading.svelte';
import { translate } from '../../i18n/translate';
export let loading = false;
export let title = translate('events.empty-state-title');
export let content = translate('events.empty-state-description');
</script>

{#if loading}
  <Loading />
{:else}
  <EmptyState {title} {content} />
{/if}
