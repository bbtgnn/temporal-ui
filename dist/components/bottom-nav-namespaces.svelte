<script>import Input from '../holocene/input/input.svelte';
import { lastUsedNamespace } from '../stores/namespaces';
export let open = false;
export let namespaceList = [];
let search = '';
$: namespaces = (search
    ? namespaceList.filter(({ namespace }) => namespace.includes(search))
    : namespaceList).sort((a, b) => a.namespace.localeCompare(b.namespace));
</script>

{#if open}
  <div data-testid="namespace-search-list">
    <Input
      id="namespace-search"
      type="search"
      label="Namespace search"
      labelHidden
      autoFocus
      placeholder="Search"
      class="sticky top-0 w-full bg-primary p-2"
      bind:value={search}
    />
    <ul class="flex w-full flex-col gap-4 overflow-auto p-4 pt-2">
      {#each namespaces as { namespace, onClick }}
        <li>
          <button
            class="namespace"
            class:selected={namespace === $lastUsedNamespace}
            on:click|preventDefault|stopPropagation={() => onClick(namespace)}
          >
            {namespace}
          </button>
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  .namespace {

    width: 100%;

    cursor: pointer;

    border-width: 1px;

    border-color: transparent;

    text-align: left;

    font-size: 0.875rem;

    line-height: 1.25rem;

    font-weight: 500;
}

.namespace:hover {

    background-color: rgb(var(--color-interactive-secondary-surface));

    color: rgb(var(--color-text-primary));
}

.namespace:hover:focus-visible {

    background-color: rgb(var(--color-interactive-secondary-hover));
}

.namespace:hover:hover {

    background-color: rgb(var(--color-interactive-secondary-hover));
}

.namespace:hover:active {

    background-color: rgb(var(--color-interactive-secondary-active));
}

.namespace:focus-visible {

    background-color: rgb(var(--color-interactive-secondary-surface));

    color: rgb(var(--color-text-primary));
}

.namespace:focus-visible:focus-visible {

    background-color: rgb(var(--color-interactive-secondary-hover));
}

.namespace:focus-visible:hover {

    background-color: rgb(var(--color-interactive-secondary-hover));
}

.namespace:focus-visible:active {

    background-color: rgb(var(--color-interactive-secondary-active));
}

.namespace:focus-visible {

    border-color: rgb(var(--color-border-inverse));

    outline: 2px solid transparent;

    outline-offset: 2px;

    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);

    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

    --tw-ring-color: rgb(var(--color-border-focus-info) / 0.7);
}

.namespace:focus-visible:where([data-theme="dark"], [data-theme="dark"] *) {

    border-color: rgb(var(--color-interactive-surface));
}

    .namespace.selected {

    color: rgb(var(--color-text-brand));
}</style>
