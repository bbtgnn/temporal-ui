<script>import { page } from '$app/stores';
import Combobox from '../holocene/combobox/combobox.svelte';
import { translate } from '../i18n/translate';
import { lastUsedNamespace } from '../stores/namespaces';
import { routeForNamespace } from '../utilities/route-for';
export let namespaceList = [];
$: namespace = $page.params.namespace || $lastUsedNamespace;
$: namespaceExists = namespaceList.some((namespaceListItem) => namespaceListItem.namespace === namespace);
$: href = routeForNamespace({ namespace });
const handleNamespaceSelect = (event) => {
    const namespaceListItem = event.detail.value;
    $lastUsedNamespace = namespaceListItem.namespace;
    namespaceListItem === null || namespaceListItem === void 0 ? void 0 : namespaceListItem.onClick(namespaceListItem.namespace);
};
</script>

<Combobox
  label={translate('namespaces.namespace-label', { namespace })}
  noResultsText={translate('common.no-results')}
  labelHidden
  value={namespace}
  id="namespace-switcher"
  leadingIcon="namespace-switcher"
  options={namespaceList}
  optionValueKey="namespace"
  on:change={handleNamespaceSelect}
  minSize={32}
  actionTooltip={translate('namespaces.go-to-namespace')}
  {href}
  hrefDisabled={!namespaceExists}
/>
