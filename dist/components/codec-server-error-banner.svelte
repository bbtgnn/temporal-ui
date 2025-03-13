<script>var _a, _b;
import { page } from '$app/stores';
import Banner from '../holocene/banner/banner.svelte';
import { translate } from '../i18n/translate';
import { dataEncoder } from '../stores/data-encoder';
import { lastUsedNamespace } from '../stores/namespaces';
$: namespace = (_b = (_a = $page.params) === null || _a === void 0 ? void 0 : _a.namespace) !== null && _b !== void 0 ? _b : $lastUsedNamespace;
$: pathNameSplit = $page.url.pathname.split('/');
$: showNamespaceSpecificNav =
    namespace &&
        (pathNameSplit.includes('workflows') ||
            pathNameSplit.includes('schedules') ||
            pathNameSplit.includes('batch-operations') ||
            pathNameSplit.includes('task-queues') ||
            pathNameSplit.includes('import'));
</script>

{#if $dataEncoder.hasError && showNamespaceSpecificNav}
  <Banner
    message={translate('data-encoder.codec-server-error')}
    id="transcoder-error"
    icon="transcoder-error"
    type="danger"
  />
{:else}
  <slot name="fallback" />
{/if}
