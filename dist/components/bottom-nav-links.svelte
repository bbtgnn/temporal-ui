<script>import NavigationItem from '../holocene/navigation/navigation-item.svelte';
export let open = false;
export let linkList;
</script>

{#if open}
  <div
    class="flex h-full flex-col flex-col-reverse justify-start gap-6 overflow-auto px-4 py-8"
  >
    {#each linkList as item}
      {#if item.divider}
        <hr class="border-subtle" />
      {/if}
      <NavigationItem
        link={item.href}
        label={item.label}
        icon={item.icon}
        tooltip={item.tooltip || item.label}
        external={item?.external}
        animate={item?.animate}
      />
    {/each}
  </div>
{/if}
