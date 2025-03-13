<script>import MenuItem from '../menu/menu-item.svelte';
export let label;
</script>

<MenuItem disabled>
  {label}
</MenuItem>
<slot />
