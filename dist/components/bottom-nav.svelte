<script>import { writable } from 'svelte/store';
import { slide } from 'svelte/transition';
import { twMerge as merge } from 'tailwind-merge';
import { beforeNavigate } from '$app/navigation';
import { page } from '$app/stores';
import Button from '../holocene/button.svelte';
import Icon from '../holocene/icon/icon.svelte';
import Logo from '../holocene/logo.svelte';
import { translate } from '../i18n/translate';
import { lastUsedNamespace } from '../stores/namespaces';
import { routeForNamespace } from '../utilities/route-for';
import BottomNavLinks from './bottom-nav-links.svelte';
import BottomNavNamespaces from './bottom-nav-namespaces.svelte';
import BottomNavSettings from './bottom-nav-settings.svelte';
export let namespaceList = [];
export let linkList;
export let isCloud = false;
export let showNamespacePicker = true;
let viewLinks = false;
let viewNamespaces = writable(false);
let viewSettings = false;
function escapeHandler(e) {
    if (e.key === 'Escape' &&
        [viewLinks, viewNamespaces, viewSettings].some((isOpen) => isOpen)) {
        closeMenu();
    }
}
beforeNavigate(() => {
    closeMenu();
});
$: namespace = $page.params.namespace || $lastUsedNamespace;
$: namespaceExists = namespaceList.some((namespaceListItem) => namespaceListItem.namespace === namespace);
const onLinksClick = () => {
    viewLinks = !viewLinks;
    $viewNamespaces = false;
    viewSettings = false;
};
const onNamespaceClick = () => {
    viewLinks = false;
    $viewNamespaces = !$viewNamespaces;
    viewSettings = false;
};
const onSettingsClick = () => {
    viewLinks = false;
    $viewNamespaces = false;
    viewSettings = !viewSettings;
};
function closeMenu() {
    viewLinks = false;
    $viewNamespaces = false;
    viewSettings = false;
}
$: menuIsOpen = viewLinks || $viewNamespaces || viewSettings;
const truncateNamespace = (namespace) => {
    if (namespace.length > 16) {
        return `${namespace.slice(0, 8)}...${namespace.slice(-8)}`;
    }
    return namespace;
};
</script>

<svelte:window on:keypress={escapeHandler} />

{#if menuIsOpen}
  <div
    class="group surface-primary fixed top-0 z-50 h-[calc(100%-64px)] w-full overflow-auto md:hidden"
    data-nav="open"
    in:slide={{ duration: 200, delay: 0 }}
    out:slide={{ duration: 200, delay: 0 }}
  >
    <BottomNavLinks open={viewLinks} {linkList} />
    <slot name="nsPicker" open={$viewNamespaces} {closeMenu}>
      <BottomNavNamespaces open={$viewNamespaces} {namespaceList} />
    </slot>
    <BottomNavSettings open={viewSettings}>
      <slot />
    </BottomNavSettings>
  </div>
{/if}
<nav
  class={merge(
    'fixed bottom-0 z-40 flex h-[64px] w-full flex-row items-center justify-between gap-5 px-4 py-2 transition-colors md:hidden',
    isCloud
      ? 'bg-gradient-to-b from-indigo-600 to-indigo-900 text-off-white focus-visible:[&_[role=button]]:ring-success focus-visible:[&_a]:ring-success'
      : 'surface-black border-t border-subtle',
  )}
  data-testid="top-nav"
  aria-label={translate('common.main')}
>
  <button
    class="nav-button relative"
    data-testid="nav-menu-button"
    class:active-shadow={viewLinks}
    type="button"
    on:click={onLinksClick}
  >
    {#if viewLinks}
      <Icon name="close" height={32} width={32} />
    {:else}
      <Logo height={32} width={32} />
    {/if}
  </button>
  {#if showNamespacePicker}
    <div class="namespace-wrapper">
      <Button
        variant="ghost"
        data-testid="namespace-switcher"
        leadingIcon="namespace-switcher"
        size="xs"
        class="grow text-white"
        on:click={onNamespaceClick}>{truncateNamespace(namespace)}</Button
      >
      <div class="ml-1 h-full w-1 border-l border-subtle" />
      <Button
        variant="ghost"
        size="xs"
        href={routeForNamespace({ namespace })}
        disabled={!namespaceExists}
        ><Icon class="text-white" name="external-link" /></Button
      >
    </div>
  {/if}
  <button
    class="nav-button"
    data-testid="nav-profile-button"
    class:active-shadow={viewSettings}
    type="button"
    on:click={onSettingsClick}
  >
    {#if viewSettings}
      <Icon name="close" height={32} width={32} />
    {:else}
      <div
        class="flex aspect-square w-[32px] min-w-[32px] items-center justify-center"
      >
        <Icon name="astronaut" height={24} width={24} />
      </div>
    {/if}
  </button>
</nav>

<style>
  .namespace-wrapper {

    background-color: rgb(var(--color-surface-black));

    color: rgb(var(--color-text-white));

    display: flex;

    height: 2.5rem;

    width: 100%;

    flex-grow: 1;

    flex-direction: row;

    align-items: center;

    border-width: 1px;

    border-color: rgb(var(--color-border-subtle));

    padding-left: 0.125rem;

    padding-right: 0.125rem;

    font-size: 0.875rem;

    line-height: 1.25rem
}

.namespace-wrapper:focus-within:where([data-theme="dark"], [data-theme="dark"] *) {

    background-color: rgb(var(--color-surface-primary));

    color: rgb(var(--color-text-primary))
}

.namespace-wrapper:focus-within {

    border-color: rgb(var(--color-interactive-surface));

    outline: 2px solid transparent;

    outline-offset: 2px;

    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);

    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

    --tw-ring-color: rgb(var(--color-border-focus-info) / 0.7)
}

  .nav-button {

    position: relative;

    -webkit-user-select: none;

       -moz-user-select: none;

            user-select: none;

    padding: 0.25rem;

    text-align: center;

    vertical-align: middle;

    font-size: 0.75rem;

    line-height: 1rem;

    font-weight: 500;

    text-transform: uppercase;

    transition-property: all;

    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    transition-duration: 150ms
}</style>
