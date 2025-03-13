<script>import { getContext } from 'svelte';
import { TABS } from './tabs.svelte';
export let id;
export let tabId;
const { registerPanel, activePanel } = getContext(TABS);
$: active = $activePanel === id;
registerPanel(id);
</script>

<div
  {id}
  class:hidden={!active}
  class:text-primary={active}
  aria-labelledby={tabId}
  tabindex="0"
  role="tabpanel"
  {...$$restProps}
>
  <slot />
</div>
